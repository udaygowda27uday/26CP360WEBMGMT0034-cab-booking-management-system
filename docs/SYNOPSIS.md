# Synopsis

## Project Title

Cab Booking Management System

## Project Category

Management

## Synopsis

Cab Booking Management System is a web-based management system designed to help users manage Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations through a secure dashboard, structured CRUD workflows, reports, and audit history.

The project uses the Student Project Factory management template and adapts it for the cab booking domain. It includes domain-specific modules, sample seed data, dashboard statistics, API documentation, and demo credentials so students can run and explain the project confidently.

## Main Features

- Create Booking: Create Booking for cab booking with clear steps, ownership, and audit-ready status updates.
- Reschedule Booking: Reschedule Booking for cab booking with clear steps, ownership, and audit-ready status updates.
- Process Cancellation: Process Cancellation for cab booking with clear steps, ownership, and audit-ready status updates.

## Main Modules

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

## Technology Stack

- Frontend: React + Tailwind
- Backend: Spring Boot
- Database: SQLite
- API Docs: Swagger
- Runtime: Docker Compose

## Domain Entities

- Cab Booking Customers: Cab Booking Customer Code, Cab Booking Customer Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Customer Status, Cab Booking Customer Code, Cab Booking Phone Number, Cab Booking Email
- Cab Booking Slots: Cab Booking Slot Code, Cab Booking Slot Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Slot Status, Cab Booking Slot Code, Cab Booking Slot Date, Cab Booking Capacity
- Cab Bookings: Cab Booking Booking Code, Cab Booking Booking Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Booking Status, Cab Booking Booking Number, Cab Booking Booking Date, Cab Booking Booking Status
- Cab Booking Payments: Cab Booking Payment Code, Cab Booking Payment Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Payment Status, Cab Booking Payment Number, Cab Booking Amount, Cab Booking Payment Status
- Cab Booking Cancellations: Cab Booking Cancellation Code, Cab Booking Cancellation Name, Cab Booking Category, Booking & Reservation Management Owner, Cab Booking Cancellation Status, Cab Booking Cancellation Number, Cab Booking Cancellation Reason, Cab Booking Refund Amount

## Domain Workflows

- Create Booking: Select Customer -> Choose Slot -> Capture Payment -> Confirm Booking
- Reschedule Booking: Open Booking -> Check New Slot -> Update Schedule -> Notify Customer
- Process Cancellation: Verify Booking -> Capture Reason -> Calculate Refund -> Close Booking

## Demo Access

```txt
Email: admin@example.com
Password: Admin@123
```
