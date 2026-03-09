# Project Owner Dashboard API Integration Guide

This guide outlines the APIs required to build the **Project Owner Dashboard**. The target audience for this portal are the creators (owners) of a project and their direct team members. This dashboard allows them to manage content (documents/departments), test their chatbot, view subscription usage, and monitor aggregate engagement/cost analytics.

All requests (except login/registration) require a valid JWT token in the `Authorization: Bearer <token>` header.

---

## 0. Authentication

*Before accessing the dashboard, users must authenticate to acquire a JWT token.*

### Register a New Account
**Endpoint:** `POST /api/v1/auth/register`
- **Request Body:**
  ```json
  {
    "username": "jane_owner",
    "email": "owner@example.com",
    "password": "SecurePassword123!",
    "full_name": "Jane Owner"
  }
  ```
- **Description:** Creates a new user account.

### Standard Login
**Endpoint:** `POST /api/v1/auth/login`
- **Request Body:**
  ```json
  {
    "username": "jane_owner",
    "password": "SecurePassword123!"
  }
  ```
- **Response:**
  ```json
  {
    "access_token": "eyJhbG...",
    "token_type": "bearer"
  }
  ```

### Get Current User Profile
**Endpoint:** `GET /api/v1/auth/me`
- **Description:** Returns the profile information for the actively authenticated user. Useful to verify token validity and load the user's name/email in the UI.

### Social Login (Google / Apple / Facebook)
**Endpoint:** `POST /api/v1/auth/login/social`
- **Description:** Exchange an OAuth provider token for a DLILA system JWT. The backend MUST securely verify the provided `token` against the OAuth provider (Google, Apple, Facebook) before issuing a session. This prevents spoofing via raw IDs.
- **Request Body:**
  ```json
  {
    "provider": "google",
    "token": "eyJhbGciOiJSUzI1... (OIDC id_token or OAuth access_token)",
    "email": "owner@gmail.com",
    "full_name": "Jane Owner"
  }
  ```
- **Response:** Returns the same `access_token` and `token_type` as standard login.

### Phone Number OTP Login (Request)
**Endpoint:** `POST /api/v1/auth/login/phone/request-otp`
- **Description:** Initiates a phone-based login flow, sending an SMS.
- **Request Body:**
  ```json
  {
    "phone_number": "+1234567890"
  }
  ```

### Phone Number OTP Login (Verify)
**Endpoint:** `POST /api/v1/auth/login/phone/verify`
- **Description:** Verifies the OTP code received via SMS.
- **Request Body:**
  ```json
  {
    "phone_number": "+1234567890",
    "otp": "456123"
  }
  ```
- **Response:** Returns the standard `access_token`.

---

## 1. Project Analytics & Statistics

*Provides high-level insights into how the project is performing and how much it costs.*

### Get Project Analytics
**Endpoint:** `GET /api/v1/projects/{project_id}/analytics`
- **Description:** Returns aggregate data for the project, calculated dynamically from the database.
- **Response:**
  ```json
  {
    "total_documents": 15,
    "total_departments": 3,
    "unique_clients": 142,
    "total_conversations": 350,
    "total_messages": 1200,
    "total_tokens_used": 1450000,
    "total_cost_usd": 2.45
  }
  ```

### Get Historical Usage
**Endpoint:** `GET /api/v1/projects/{project_id}/usage/history`
- **Description:** Returns historical text and image token usage over a specified period to populate dashboard charts.
- **Response:**
  ```json
  {
    "history": [
      { "date": "2023-10-01", "text_tokens": 12000, "image_tokens": 5 },
      { "date": "2023-10-02", "text_tokens": 15000, "image_tokens": 8 }
    ]
  }
  ```

---

## 2. Conversation & Chat Oversight

*Allows the project owner to review all interactions end-users are having with the AI.*

### List All Client Conversations (Owner View)
**Endpoint:** `GET /api/v1/projects/{project_id}/conversations/all`
- **Query Params:** `skip` (default: 0), [limit](file:///Users/mahmoodesmail/PycharmProjects/dlila/app/rag_engine/embeddings/providers/gemini_embedder_provider.py#53-58) (default: 20)
- **Description:** Unlike the standard `/conversations` endpoint which only returns chats belonging to the active user, this endpoint bypasses the user filter to return **all** conversations belonging to the project.
- **Response Elements:**
  ```json
  {
    "conversations": [
      {
        "id": "65ab...",
        "user_id": "client_user_id_123",
        "title": "How do I reset my password?",
        "message_count": 4,
        "total_tokens": 1500,
        "total_cost": 0.0015,
        "is_active": true,
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "total": 350,
    "skip": 0,
    "limit": 20
  }
  ```

### View Specific Conversation Messages
**Endpoint:** `GET /api/v1/projects/{project_id}/conversations/{conversation_id}/messages`
- **Description:** Retrieve the exact transcript of a conversation. Includes the calculated token cost for *each individual message* via the `total_tokens` and `total_cost` fields on the message object natively.

---

## 3. Subscription Management

*Allows the owner to monitor their quota and upgrade their plan features.*

### View Active Subscription Quota
**Endpoint:** `GET /api/v1/subscriptions/my`
- **Description:** Returns the owner's active plan, including page and file limits.
- **Response:**
  ```json
  {
    "plan_id": "...",
    "status": "active",
    "pages_used": 140,
    "files_used": 15,
    "plan": {
      "name": "Pro Plan",
      "max_files": 500,
      "max_total_pages": 10000
    }
  }
  ```

### Upgrade Subscription
**Endpoint:** `POST /api/v1/subscriptions/upgrade`
- **Request Body:**
  ```json
  {
    "plan_id": "new_plan_id",
    "interval": "monthly"
  }
  ```
- **Description:** Triggers a Stripe checkout session or immediate DB upgrade depending on billing configuration.

---

## 4. Content Management

*Allows the owner to build the RAG knowledge base.*

### List Departments
**Endpoint:** `GET /api/v1/projects/{project_id}/departments`
- **Description:** Returns a list of all active departments within a project.
- **Response:**
  ```json
  [
    { "id": "dept_123", "name": "HR", "description": "Human Resources Documents" }
  ]
  ```

### Create Department
**Endpoint:** `POST /api/v1/projects/{project_id}/departments`
- **Request Body:**
  ```json
  {
    "name": "Engineering",
    "description": "Technical specs and architecture documents."
  }
  ```
- **Description:** Creates a new department within the project.

### Upload a Document
**Endpoint:** `POST /api/v1/projects/{project_id}/documents`
- **Content-Type:** `multipart/form-data`
- **Payload:**
  - [file](file:///Users/mahmoodesmail/PycharmProjects/dlila/app/rag_engine/processors/providers/image_processor_provider.py#22-50): The binary file (PDF, TXT, DOCX).
  - `department_id` (Optional): The ID of the department to restrict this document to.
  - `chunking_strategy` (Optional): e.g., "semantic".
- **Description:** Uploads, OCRs, chunks, and vectorizes a file automatically.
- **Cost Warning:** This action consumes "files" and "pages" from the subscription quota. If limits are exceeded, this returns `403 Forbidden`.

### List Documents
**Endpoint:** `GET /api/v1/projects/{project_id}/documents`
- **Description:** Returns the status of all uploaded documents (`pending`, `processing`, `completed`, `failed`).

### Delete Document
**Endpoint:** `DELETE /api/v1/projects/{project_id}/documents/{document_id}`
- **Description:** Removes the document and purges its vector embeddings. Note: This *does not* refund subscription pages in the current billing cycle.

---

## 5. Simulating/Testing the Chatbot

*Allows the owner to test the RAG engine from the dashboard before deploying it to end-users.*

### Ask a Question
**Endpoint:** `POST /api/v1/projects/{project_id}/chat/ask`
- **Request Body:**
  ```json
  {
    "question": "What is the return policy?",
    "conversation_id": null, 
    "temperature": 0.7
  }
  ```
- **Description:** Runs the full Retrieval Augmented Generation pipeline and returns an answer along with the exact source document chunks cited.

---

## 6. Project Management

*Allows the owner to view, create, and configure their DLILA projects.*

### List User Projects
**Endpoint:** `GET /api/v1/projects`
- **Description:** Returns a list of all projects the authenticated user has access to.

### Create Project
**Endpoint:** `POST /api/v1/projects`
- **Request Body:**
  ```json
  {
    "name": "New Support Bot",
    "domain": "support.example.com",
    "persona": "Helpful assistant"
  }
  ```

### Update Project Settings
**Endpoint:** `PUT /api/v1/projects/{project_id}`
- **Request Body:**
  ```json
  {
    "name": "Updated Support Bot",
    "domain": "support.example.com",
    "persona": "Friendly technical expert"
  }
  ```
