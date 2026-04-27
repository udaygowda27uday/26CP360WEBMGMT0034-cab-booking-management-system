# Presentation Content

## Project

Cab Booking Management System

## Slide 1: Title

Cab Booking Management System

Final Year Major Project using React + Tailwind, Spring Boot, SQLite, Swagger, Docker, and config-driven generation.

## Slide 2: Problem Statement

Manual handling of Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations causes delays, duplicate entries, weak reporting, and poor tracking in the cab booking domain.

## Slide 3: Objectives

Provide secure login, domain workflows, analytics dashboard, reports, audit history, seed data, documented APIs, and student-ready project material.

## Slide 4: Existing System

Existing work is usually managed using paper registers, spreadsheets, or disconnected tools with limited validation and reporting.

## Slide 5: Proposed System

Cab Booking Management System centralizes Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations in one web application with a frontend dashboard, backend REST API, and SQLite storage.

## Slide 6: Technology Stack

Frontend: React + Tailwind
Backend: Spring Boot
Database: SQLite
API Docs: Swagger
Runtime: Docker Compose

## Slide 7: System Architecture

Browser frontend communicates with the Spring Boot API. The API validates requests, applies authentication, stores data in SQLite, and exposes Swagger documentation.

## Slide 8: Modules

- Dashboard
- Cab Booking Customers
- Cab Booking Slots
- Cab Bookings
- Cab Booking Payments
- Cab Booking Cancellations
- Create Booking
- Reschedule Booking
- Process Cancellation
- Reports
- Audit Trail

## Slide 9: Database Design

The data model includes users, roles, audit logs, and domain collections for Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, Cab Booking Cancellations. Key fields include Cab Booking Customers with Cab Booking Customer Code, Cab Booking Customer Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Customer Status, Cab Booking Customer Code, Cab Booking Phone Number, Cab Booking Email; Cab Booking Slots with Cab Booking Slot Code, Cab Booking Slot Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Slot Status, Cab Booking Slot Code, Cab Booking Slot Date, Cab Booking Capacity; Cab Bookings with Cab Booking Booking Code, Cab Booking Booking Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Booking Status, Cab Booking Booking Number, Cab Booking Booking Date, Cab Booking Booking Status; Cab Booking Payments with Cab Booking Payment Code, Cab Booking Payment Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Payment Status, Cab Booking Payment Number, Cab Booking Amount, Cab Booking Payment Status; Cab Booking Cancellations with Cab Booking Cancellation Code, Cab Booking Cancellation Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Cancellation Status, Cab Booking Cancellation Number, Cab Booking Cancellation Reason, Cab Booking Refund Amount.

## Slide 10: Screenshots Placeholder

Use screenshots from docs/screenshots: login page, dashboard, management pages, reports, audit log, and Swagger.

## Slide 11: Testing

Testing includes backend build, frontend build, Docker config, migration, seed, health endpoint, Swagger endpoint, login API, CRUD smoke test, browser smoke test, screenshots, and uniqueness validation.

## Slide 12: Future Scope

- Create Booking: Create Booking for cab booking with clear steps, ownership, and audit-ready status updates.
- Reschedule Booking: Reschedule Booking for cab booking with clear steps, ownership, and audit-ready status updates.
- Process Cancellation: Process Cancellation for cab booking with clear steps, ownership, and audit-ready status updates.
- PDF/Excel export
- role-based permissions
- email/SMS notifications
- advanced analytics

## Slide 13: Conclusion

Cab Booking Management System is major-project ready because it includes working code, workflows, analytics scope, seed data, Docker setup, validation, browser testing, screenshots, config-driven project material, and complete submission documentation.
