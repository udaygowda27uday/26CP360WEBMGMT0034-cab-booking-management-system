# Activity Diagram

```mermaid
flowchart TD
  Start([Start]) --> Login[Login]
  Login --> Valid{Valid user?}
  Valid -- No --> Error[Show error]
  Error --> Login
  Valid -- Yes --> Dashboard[Open dashboard]
  Dashboard --> Manage[Manage Cab Booking Customers]
  Manage --> Workflow[Run Create Booking]
  Workflow --> Report[View reports]
  Report --> Logout[Logout]
  Logout --> End([End])
```
