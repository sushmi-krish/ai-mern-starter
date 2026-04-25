# ai-mern-starter- Governed Conversational Intelligence
A Professional Template for High-Concurrency AI Integration
## Project Vision
In the 2026 AI landscape, simply connecting an LLM to a UI is no longer enough. This project demonstrates how to build a governed, secure, and human‑centered AI system using the MERN stack, designed as a teaching template for learners entering AI development and automation roles.
The goal is to show how modern AI applications must combine:
 * Low‑latency performance
 * AI governance and security controls
 * Clear documentation for safe adoption
 * Human‑centered design principles

This project provides a safe, audited gateway to Large Language Models, making it suitable for industries with strict compliance needs such as Automotive and Finance.
---
## Key Engineering Achievements
1. Governed Middleware Layer
Unlike standard "Hello World" bots, this project implements a custom Node.js Middleware Gatekeeper:
  - Request Validation: Sanitizes user inputs to prevent "Prompt Injection" attacks and ensure data integrity.
  - Automated Audit Logging: Tracks API performance, model latency, and status codes to address core AI accountability principles.
2. High-Concurrency Inference
Utilized the Cloudgroq API (LPU-powered) to ensure sub-second response times, demonstrating an understanding of scalable AI infrastructure and asynchronous request handling.
3. Human-Centered Design (HCD)
Focused on Explainable AI (XAI) principles by managing complex asynchronous states in React, providing clear feedback to the user during the AI "thinking" cycle.
---
## Technical Stack

| Layer    |   Technology     |         Purpose                 |
|----------|------------------|---------------------------------|
| Frontend |  React.js        | Dynamic UI & State Management   |
| Backend  |Node.js/Express   | Logic Orchestration & Middleware|
| AI Engine|Cloudgroq/Llama 3 |  High-Speed LLM Inference       |
| Security | Dotenv/Middleware|  API Key & Input Governance     |
---
## Current Deployment status

- The core infrastructure is operational. I have successfully moved from an empty repository to a functional full-stack environment.
- API Orchestration: Successfully bridged the React frontend with the Node.js backend using Axios and Express.
- AI Inference Testing: Integrated and manually verified the Cloudgroq API handshake. The system currently processes natural language queries and returns real-   time LLM responses.
- Security Baseline: Implemented manual CORS (Cross-Origin Resource Sharing) handling and Environment Variable (.env) protection to ensure no sensitive keys      are exposed.
---
## The Development Roadmap
I treat this project as a professional engineering sprint. My progress is documented below
# Sprint 0: Infrastructure[Done]
 * Connect MERN skeleton to Cloudgroq API.
 * Manual verification of end-to-end API connectivity.
# Sprint 1: Persistence & Architecture[up next]
 * Modularization: Move the Governed Middleware into a dedicated directory for better scalability.
 * Folder Flattening: Optimize the frontend directory structure to industry-standard patterns.
 * Database Integration: Connect MongoDB to enable persistent conversation history (Long-Term Memory).
# Sprint 2: Domain Specialization[Future]
 * Implement industry-specific knowledge bases (Automotive/Finance focus).
 * UI/UX overhaul using professional Chat UI components
---
# Installation & Setup
 1. Clone - git clone https://github.com/sushmi-krish/ai-mern-starter.git
 2. Server: cd backend && npm install && node server.js
 3. Client: cd frontend/frontend && npm install && npm start
---
## Contact 
Author : Sushmitha Krishnamoorthy
