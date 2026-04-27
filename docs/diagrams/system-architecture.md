# System Architecture Diagram

```mermaid
flowchart LR
  User[User Browser] --> Frontend[React + Tailwind]
  Frontend --> API[Spring Boot REST API]
  API --> DB[(SQLite)]
  API --> Swagger[Swagger Docs]
  API --> Auth[JWT Auth]
```
