# Project Owner Dashboard Features Document

This document outlines the core features and capabilities of the Project Owner Dashboard. It serves as a product blueprint for frontend developers, designers, and project managers to understand the full scope of the platform.

---

## 1. Authentication & Onboarding
Provides secure access to the dashboard for project owners.

- **Account Registration:** New owners can create an account using an email address and password.
- **Standard Login:** Existing owners can authenticate using their email/username and password.
- **Social Login (OAuth):** Frictionless onboarding and login via Google, Apple, or Facebook.
- **Phone Verification (OTP):** Alternative secure login via mobile phone number and SMS-delivered verification codes.
- **Profile Management:** Dashboard headers and settings pages can load active user profile data (name, email).

---

## 2. Global Project Analytics
A high-level overview giving owners immediate insights into their project's performance and usage metrics.

- **KPI At a Glance:** A top dashboard widget displaying:
  - **Total Documents:** Number of files actively ingested into the AI's knowledge base.
  - **Total Departments:** Number of logical groupings or organizational segments set up.
  - **Unique Clients:** The total number of distinct end-users interacting with the chatbot.
  - **Total Conversations & Messages:** Aggregate interaction volume.
- **Financial & Token Tracking:** Real-time visibility into the exact number of LLM tokens consumed and their precise cost in USD, eliminating the need to wait for end-of-month cloud bills.

---

## 3. Conversation Auditing & Chat Log Viewer
Allows project owners to monitor and assure the quality of the AI's interactions with end-users.

- **Global Chat Feed:** A chronological list of all conversations occurring within the project across all client users.
- **Conversation Detail View:** Read the full transcript of any selected chat session.
- **Cost-Per-Conversation Tracking:** Each interaction displays its associated token cost, allowing owners to identify expensive queries or highly engaged users.
- **Source Verification:** See exactly which document snippets the AI cited when responding to a specific client message.

---

## 4. Subscription & Billing Management
Empowers owners to manage their service tiers and system limitations.

- **Quota Monitoring:** A visual progress bar detailing current usage against system constraints:
  - File count limit.
  - Total page count limit.
- **Plan Details:** Displays the active subscription tier (e.g., Free, Pro, Enterprise) and its enabled features.
- **Self-Service Upgrades:** Seamless transition to higher-tier plans when limits are reached, directly integrating with the billing gateway.

---

## 5. Knowledge Base (Content) Management
The core engine for project owners to make the AI smarter by uploading proprietary data.

- **Document Ingestion:** Upload multiple formats (PDF, DOCX, TXT) to be instantly processed, chunked, and vectorized by the RAG engine.
- **Department Routing:** Assign specific documents to specific "Departments" (e.g., HR, Sales, IT) to compartmentalize knowledge and ensure the AI only references relevant data when answering specialized questions.
- **Document Status Tracking:** Monitor processing states (`pending`, `processing`, `completed`, `failed`) for large uploads.
- **Content Deletion:** Permanently wipe out-of-date or incorrect documents from both the database and the vector store to ensure the AI's knowledge remains accurate.

---

## 6. AI Playground (Chatbot Simulator)
An internal testing suite allowing the project owner to interact with their configured AI.

- **Live Sandbox:** Send questions to the AI before deploying it to end-users to ensure it behaves correctly.
- **Parameter Optimization:** Adjust model temperature (creativity vs. factual strictness) and test outcomes.
- **Retrieval Traceability:** View precisely which internal document chunks the AI retrieves and scores to formulate its answer, ensuring the RAG engine is surfacing the right information.
