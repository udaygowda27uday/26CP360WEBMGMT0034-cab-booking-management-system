# Use Case Diagram

```mermaid
flowchart LR
  Admin((Admin)) --> Login[Login]
  Admin --> Dashboard[View Dashboard]
  Admin --> Primary[Manage Cab Booking Customers]
  Admin --> Workflow[Run Create Booking]
  Admin --> Reports[View Reports]
  Staff((Staff)) --> Login
  Staff --> Primary
  Staff --> Workflow
  Viewer((Viewer)) --> Login
  Viewer --> Reports
```
