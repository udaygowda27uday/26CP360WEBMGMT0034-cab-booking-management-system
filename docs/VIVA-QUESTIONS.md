# Viva Questions

## Basic Questions

### 1. What is Cab Booking Management System?

Cab Booking Management System is a web-based cab booking management system for handling Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations.

### 2. Why did you choose this project?

It solves common record keeping and reporting problems in the cab booking domain.

### 3. Who are the users of the system?

The main users are admin, staff or operator, and viewer or report user.

### 4. What is the main objective?

The main objective is to digitize and simplify management of Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations.

### 5. What are the main modules?

Dashboard, Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, Cab Booking Cancellations, Create Booking, Reschedule Booking, Process Cancellation, Reports, Audit Trail.

### 6. What is the demo login?

The demo login is admin@example.com with password Admin@123.

### 7. What is a dashboard?

A dashboard shows important project statistics and recent activity in one place.

### 8. What is CRUD?

CRUD means create, read, update, and delete cab booking customers and related domain data.

### 9. Why is seed data used?

Seed data helps demonstrate the project immediately after setup.

### 10. What is an audit log?

An audit log stores important user actions for tracking and review.

### 11. Why is this a major project?

It includes advanced workflows, analytics, auditability, documentation, validation, screenshots, and Docker deployment for cab booking.

### 12. What is the major project category?

Final Year Major Project

### 13. How is configuration used in generation?

The generator uses domain configuration for modules, menu labels, workflows, seed scenarios, report ideas, and student documentation.

### 14. What problem does the project solve?

It reduces manual work for managing Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations.

### 15. What is the project category?

Management

### 16. Is this project web-based?

Yes, it runs in a browser with a backend API and database.

### 17. Can a student explain this project in viva?

Yes, the project includes simple modules, diagrams, test cases, and viva answers.

### 18. What is the role of the admin?

The admin logs in, views the dashboard, manages cab booking customers, and reviews reports.

### 19. What is the role of staff?

Staff users can operate daily record and transaction workflows.

### 20. What is the role of viewer?

A viewer can understand dashboard and report information.

### 21. Why are reports important?

Reports help summarize project data for decisions and demonstrations.

### 22. What is a module?

A module is a separate part of the system with a clear responsibility.

### 23. Why is documentation included?

Documentation helps with college submission, presentation, and viva preparation.

### 24. What is the main page after login?

The dashboard is the main page after login.

### 25. What does student-friendly UI mean?

It means the interface is simple, clean, and easy to explain.

## Technical Questions

### 1. Which frontend technology is used?

The frontend uses React + Tailwind.

### 2. Which backend technology is used?

The backend uses Spring Boot to expose REST APIs.

### 3. Which database is used?

SQLite is used for project data storage.

### 4. What is Swagger?

Swagger provides interactive API documentation for testing backend endpoints.

### 5. What is Docker Compose?

Docker Compose runs the frontend, backend, and database services together.

### 6. What is JWT authentication?

JWT authentication uses a signed token to identify a logged-in user.

### 7. Why use validation pipes?

Validation pipes check request data before it reaches business logic.

### 8. What is a REST API?

A REST API exposes resources through HTTP methods such as GET, POST, PATCH, and DELETE.

### 9. What is CORS?

CORS allows the browser frontend to call the backend API from a different port.

### 10. How is the health endpoint useful?

It confirms that the backend service is running correctly.

### 11. Why use React + Tailwind?

React + Tailwind provides the user interface for login, dashboard, pages, forms, and reports.

### 12. Why use Tailwind CSS?

Tailwind makes styling faster and consistent through utility classes.

### 13. Why use Spring Boot?

Spring Boot provides REST APIs, authentication, seed support, and Swagger documentation.

### 14. What is TypeScript?

TypeScript adds type checking to JavaScript for safer code.

### 15. What is an API client?

An API client is frontend code that calls backend endpoints.

### 16. What is protected routing?

Protected routing prevents unauthenticated users from opening private pages.

### 17. What is a controller?

A controller receives HTTP requests and returns API responses.

### 18. What is a service?

A service contains business logic used by controllers.

### 19. What is an entity?

An entity represents a database table in the backend code.

### 20. What is DTO?

A DTO defines the shape of data accepted by an API.

### 21. What is pagination?

Pagination splits large record lists into smaller pages.

### 22. What is search?

Search lets users filter cab booking customers by configured domain fields.

### 23. What is a build command?

A build command checks and compiles the app for production use.

### 24. What is integration testing?

Integration testing checks that multiple parts work together.

### 25. What is browser testing?

Browser testing checks the real UI flow in a browser.

## Database Questions

### 1. What are the main data models?

The data model includes users, roles, audit logs, and domain collections for Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, Cab Booking Cancellations. Key fields include Cab Booking Customers with Cab Booking Customer Code, Cab Booking Customer Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Customer Status, Cab Booking Customer Code, Cab Booking Phone Number, Cab Booking Email; Cab Booking Slots with Cab Booking Slot Code, Cab Booking Slot Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Slot Status, Cab Booking Slot Code, Cab Booking Slot Date, Cab Booking Capacity; Cab Bookings with Cab Booking Booking Code, Cab Booking Booking Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Booking Status, Cab Booking Booking Number, Cab Booking Booking Date, Cab Booking Booking Status; Cab Booking Payments with Cab Booking Payment Code, Cab Booking Payment Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Payment Status, Cab Booking Payment Number, Cab Booking Amount, Cab Booking Payment Status; Cab Booking Cancellations with Cab Booking Cancellation Code, Cab Booking Cancellation Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Cancellation Status, Cab Booking Cancellation Number, Cab Booking Cancellation Reason, Cab Booking Refund Amount.

### 2. What does the CabBookingCustomer data represent?

It represents domain records with code, title, description, and status.

### 3. What does the Create Booking workflow represent?

It represents Create Booking, Reschedule Booking, Process Cancellation.

### 4. Why use SQLite?

SQLite is suitable for this generated project and supported by the Docker run system.

### 5. What is a primary key?

A primary key uniquely identifies each row in a table.

### 6. What is a foreign key?

A foreign key links one table to another table.

### 7. What is database migration?

Migration creates or updates database tables based on the application model.

### 8. What is database seeding?

Seeding inserts initial sample data for testing and demonstration.

### 9. How are reports generated?

Reports summarize Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations and Create Booking activity through backend APIs.

### 10. How is data protected?

Access is protected using login authentication and backend validation.

### 11. What type of database is SQLite?

SQLite stores generated project data for local demonstration.

### 12. Why is structured data useful here?

It helps organize users, Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations, workflows, and logs.

### 13. What is a table?

A table stores rows of related data.

### 14. What is a row?

A row is one record in a database table.

### 15. What is a column?

A column stores one type of value for each row.

### 16. What is indexing?

Indexing helps the database search data faster.

### 17. What is normalization?

Normalization organizes data to reduce duplication.

### 18. What is a transaction in database terms?

A transaction is a safe group of database operations.

### 19. Why store audit logs?

Audit logs help trace who performed important actions.

### 20. What data is seeded first?

Admin user, roles, and domain data for Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations are seeded.

### 21. How are passwords stored?

Passwords should be stored using hashing, not plain text.

### 22. What is data integrity?

Data integrity means cab booking customers and related workflow entries remain correct and consistent.

### 23. Can SQLite run with Docker?

Yes, the project run system configures SQLite through Docker or local backend configuration.

### 24. How can database data be reset?

The Docker volume can be removed and migrations/seeds can be run again.

### 25. What is a one-to-many relationship?

One row in a table can be connected to many rows in another table.

## Project-Specific Questions

### 1. What are the main entities in Cab Booking Management System?

Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, Cab Booking Cancellations.

### 2. What does Cab Booking Customers management do?

It allows users to create, view, update, search, and track Cab Booking Customers.

### 3. What dashboard stats are shown?

Total Bookings, Available Slots, Pending Payments, Cancellations.

### 4. What unique features are included?

Create Booking: Create Booking for cab booking with clear steps, ownership, and audit-ready status updates., Reschedule Booking: Reschedule Booking for cab booking with clear steps, ownership, and audit-ready status updates., Process Cancellation: Process Cancellation for cab booking with clear steps, ownership, and audit-ready status updates..

### 5. How does this project help the domain?

It centralizes Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations and improves searching, reporting, and tracking.

### 6. What screenshots are included?

Screenshots include Login Page, Dashboard, Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, Cab Booking Cancellations, Create Booking, Reschedule Booking, Process Cancellation, Reports, Audit Trail, Swagger Api Docs.

### 7. What documentation is included?

Synopsis, abstract, problem statement, requirements, diagrams, API docs, test cases, viva questions, and presentation content are included.

### 8. What makes this project student-ready?

It includes working code, tests, Docker setup, docs, screenshots, and demo credentials.

### 9. Can the project be customized?

Yes, modules, seed data, names, and documentation can be generated from variant configuration.

### 10. What is the future scope?

Role permissions, exports, notifications, file uploads, analytics, and mobile support can be added.

### 11. What is the primary entity?

Cab Booking Customers

### 12. What is the transaction entity?

Create Booking

### 13. How is the dashboard domain-specific?

It shows statistics such as Total Bookings, Available Slots, Pending Payments, Cancellations.

### 14. How is seed data domain-specific?

It is based on domain records with code, title, description, and status, staff users and administrators, and Create Booking, Reschedule Booking, Process Cancellation.

### 15. What does the reports page show?

It shows summaries that help understand project activity.

### 16. What does the audit page show?

It shows important actions performed in the system.

### 17. How are categories used?

Categories group similar cab booking customers for better organization.

### 18. How are departments used?

Departments identify ownership or responsibility areas.

### 19. How is Create Booking used?

Create Booking represents Create Booking, Reschedule Booking, Process Cancellation.

### 20. What is the best demo flow?

Login, show dashboard, open Cab Booking Customers, run Create Booking, view reports, then show Swagger.

### 21. What should be explained in presentation?

Problem, objectives, modules, architecture, database, testing, screenshots, and conclusion.

### 22. What is the learning outcome?

Students learn full-stack development, database design, testing, Docker, and documentation.

### 23. Can modules be renamed?

Yes, the variant configuration can define domain-specific module names.

### 24. Why include screenshots?

Screenshots prove the project runs and help complete the submission report.

### 25. Why include diagrams?

Diagrams make architecture, database, and workflows easier to explain.

## Deployment Questions

### 1. How do you run the project?

Run docker compose up --build inside the backend folder.

### 2. What is the frontend URL?

http://localhost:13000

### 3. What is the backend URL?

http://localhost:18080/api

### 4. What is the Swagger URL?

http://localhost:18080/api/docs

### 5. What is the health URL?

http://localhost:18080/api/health

### 6. Which services run in Docker?

Frontend, backend, and SQLite run as Docker Compose services.

### 7. What file stores environment variables?

backend/.env stores the local environment variables.

### 8. Why is backend/.env.example included?

It shows required configuration without exposing private environment values.

### 9. How can you validate the project?

Run npm run validate:project -- cab-booking-management-system from the factory root.

### 10. How can screenshots be regenerated?

Run node scripts/capture-screenshots.mjs cab-booking-management-system after starting the project.

### 11. What command starts Docker?

cd backend && docker compose up --build

### 12. What command stops Docker?

cd backend && docker compose down --remove-orphans

### 13. Which port does the frontend use?

The frontend uses port 13000 on localhost.

### 14. Which port does the backend use?

The backend uses port 18080 on localhost.

### 15. Which port does SQLite expose?

The database host port is configured in backend/.env as DB_HOST_PORT when the selected database needs a server port.

### 16. What is a container?

A container packages an application service with its runtime environment.

### 17. What is an image?

An image is the build template used to start a container.

### 18. Why use health checks?

Health checks confirm that services are ready before testing.

### 19. How is Swagger tested?

The automation opens the Swagger endpoint and browser screenshot.

### 20. How is login tested?

The validation script sends demo credentials to the login API.

### 21. How is CRUD tested?

The validation script creates and reads a sample category record.

### 22. How is frontend tested?

The frontend build and browser smoke test are run.

### 23. How is backend tested?

The backend build, health endpoint, Swagger, login, and CRUD APIs are checked.

### 24. Where are generated screenshots stored?

They are stored in projects/cab-booking-management-system/docs/screenshots.

### 25. What is the one-command readiness script?

npm run project:ready -- cab-booking-management-system --template management
