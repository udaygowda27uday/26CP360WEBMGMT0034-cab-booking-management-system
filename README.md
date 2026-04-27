# Cab Booking Management System

`Cab Booking Management System` is a ready-to-run student project generated from the `management` template. It includes frontend, backend, database, Docker setup, Swagger API docs, demo login, seed data, screenshots, viva questions, project report content, and presentation material.

Project Category: `Web Application`.

This project can be used as a minor project or upgraded into a final-year major/enterprise project with custom modules, new UI, advanced reports, role permissions, payment/export modules, and complete college submission documentation.

## Features

- React + Tailwind frontend with protected dashboard
- Spring Boot backend REST API
- SQLite database
- Docker Compose run system
- Swagger API documentation
- Demo admin login
- CRUD modules
- Dashboard statistics
- Reports and CSV export
- Audit log
- Seed data
- Student documentation pack
- Browser-tested demo screenshots
- Upgrade-ready custom UI design

## Project Modules

`Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, Cab Booking Cancellations`

## Tech Stack

- Frontend: React + Tailwind
- Backend: Spring Boot
- Database: SQLite
- API Docs: Swagger
- Runtime: Docker Compose

## Demo Login

```txt
Email: admin@example.com
Password: Admin@123
```

## Run Locally

### Prerequisites

Install these tools first:

- Git
- Docker Desktop
- Node.js 20 or newer

### Steps

```bash
git clone <your-repo-url>
cd cab-booking-management-system
cd backend
cp .env.example .env
docker compose up --build
```

Open:

```txt
Frontend: http://localhost:13000
Backend API: http://localhost:18080/api
Swagger Docs: http://localhost:18080/api/docs
Health Check: http://localhost:18080/api/health
```

Stop the project:

```bash
cd backend
docker compose down
```

Reset database and seed again:

```bash
cd backend
docker compose down -v
docker compose up --build
```

## Change Master Login Email And Password

Before the first run, edit:

```txt
backend/config/seed.json
```

Change this section:

```json
{
  "admin": {
    "email": "admin@example.com",
    "password": "Admin@123",
    "displayName": "System Admin",
    "role": "admin"
  }
}
```

Then run:

```bash
cd backend
docker compose up --build
```

If you already ran the project once, reset the database so the new admin user is seeded:

```bash
cd backend
docker compose down -v
docker compose up --build
```

## Student Submission Docs

Generated documentation is available in:

```txt
docs/
```

Important files:

- `SYNOPSIS.md`
- `ABSTRACT.md`
- `PROJECT-REPORT.md`
- `MAJOR-PROJECT.md`
- `PRESENTATION-CONTENT.md`
- `PRESENTATION.pptx`
- `VIVA-QUESTIONS.md`
- `TEST-CASES.md`
- `ER-DIAGRAM.md`
- `UML-DIAGRAMS.md`
- `SCREENSHOTS-CHECKLIST.md`
- `screenshots/`
- `diagrams/`

## Screenshots

Demo screenshots are stored in:

```txt
docs/screenshots/
```

Typical screenshots include login page, dashboard, list pages, forms, reports, audit log, and Swagger docs.

## Promotional Upgrade Options

Want this project upgraded so it does not look like a common downloaded project?

Available upgrades:

- Convert minor project to major project
- Convert major project to enterprise-level project
- Change complete UI theme and layout
- Add unique vector images based on your project topic
- Make the project look fresh and different from common downloaded projects
- Add project-specific modules
- Add advanced dashboard analytics
- Add role-based permissions
- Add PDF/Excel export
- Add payment, email, SMS, or notification modules
- Add custom report, synopsis, PPT, viva, and screenshots
- Prepare a complete college submission package

## Contact And Community

For upgrades and customization, contact CSEProjects360:

```txt
WhatsApp: +91 78914 45668
Website: CSEProjects360
```

[Send WhatsApp Message](https://wa.me/917891445668?text=Hello%2C%20I%20want%20to%20upgrade%20my%20student%20project%20with%20a%20unique%20design%20and%20major%20project%20features.)

[Visit CSEProjects360](https://cseprojects360.com)

Scan to message on WhatsApp:

[![WhatsApp QR Code](https://quickchart.io/qr?text=https%3A%2F%2Fwa.me%2F917891445668%3Ftext%3DHello%252C%2520I%2520want%2520to%2520upgrade%2520my%2520student%2520project%2520with%2520a%2520unique%2520design%2520and%2520major%2520project%2520features.&size=180)](https://wa.me/917891445668?text=Hello%2C%20I%20want%20to%20upgrade%20my%20student%20project%20with%20a%20unique%20design%20and%20major%20project%20features.)

Community links:

- WhatsApp Group: request the latest group invite on WhatsApp.
- WhatsApp Channel: request the latest channel link on WhatsApp.
- Telegram Group: request the latest group invite on WhatsApp.
- Telegram Channel: request the latest channel link on WhatsApp.

## Why Customize?

Many student projects look the same because they use the same template, same colors, same dashboard, and same module names. This project factory supports domain-specific modules, configurable design templates, vector illustrations, documentation, and screenshots so your project can look original and presentation-ready.

## Notes

- Change demo credentials before submission.
- Do not commit real API keys or production passwords.
- Use Docker Compose for the easiest local setup.
- If ports are busy, update `backend/.env` and run again.


## Domain-Specific Project Details

A student-ready cab booking generated from the management template with domain modules, seed data, reports, Swagger docs, Docker support, screenshots, viva questions, PPT content, and submission documentation.

### Target Users

- Booking Admin
- Front Desk
- Customer Support
- Manager

### Domain Modules

- Cab Booking Customers: Cab Booking Customer Code, Cab Booking Customer Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Customer Status, Cab Booking Customer Code, Cab Booking Phone Number, Cab Booking Email
- Cab Booking Slots: Cab Booking Slot Code, Cab Booking Slot Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Slot Status, Cab Booking Slot Code, Cab Booking Slot Date, Cab Booking Capacity
- Cab Bookings: Cab Booking Booking Code, Cab Booking Booking Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Booking Status, Cab Booking Booking Number, Cab Booking Booking Date, Cab Booking Booking Status
- Cab Booking Payments: Cab Booking Payment Code, Cab Booking Payment Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Payment Status, Cab Booking Payment Number, Cab Booking Amount, Cab Booking Payment Status
- Cab Booking Cancellations: Cab Booking Cancellation Code, Cab Booking Cancellation Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Cancellation Status, Cab Booking Cancellation Number, Cab Booking Cancellation Reason, Cab Booking Refund Amount

### Workflows

- Create Booking: Select Customer -> Choose Slot -> Capture Payment -> Confirm Booking
- Reschedule Booking: Open Booking -> Check New Slot -> Update Schedule -> Notify Customer
- Process Cancellation: Verify Booking -> Capture Reason -> Calculate Refund -> Close Booking

### Demo Use Cases

- Manage cab booking customers for Cab Booking
- Track cab booking slots and operational ownership
- Run create booking workflow
- Generate cab booking reports and audit history

### Problem Statement

Cab Booking needs a focused system for cab booking customers, cab booking slots, cab bookings, cab booking payments, workflows, reports, and audit visibility instead of manual spreadsheets.

### Learning Outcomes

- Cab Booking domain modelling
- Booking & Reservation Management CRUD and dashboard design
- Cab Booking workflow automation
- Student-ready documentation, screenshots, and Docker deployment
