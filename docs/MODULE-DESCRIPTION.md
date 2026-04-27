# Module Description

Cab Booking Management System is divided into modules so each part of the system has a clear responsibility.

## Core Modules

- Dashboard: Shows Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations statistics, insight panels, and domain workflow status.
- Cab Booking Customers: Manages cab booking customers with cab booking customer code, cab booking customer name, cab booking category, booking & reservation management owner, cab booking customer status, cab booking customer code, cab booking phone number, cab booking email.
- Cab Booking Slots: Manages cab booking slots with cab booking slot code, cab booking slot name, cab booking category, booking & reservation management owner, cab booking slot status, cab booking slot code, cab booking slot date, cab booking capacity.
- Cab Bookings: Manages cab bookings with cab booking booking code, cab booking booking name, cab booking category, booking & reservation management owner, cab booking booking status, cab booking booking number, cab booking booking date, cab booking booking status.
- Cab Booking Payments: Manages cab booking payments with cab booking payment code, cab booking payment name, cab booking category, booking & reservation management owner, cab booking payment status, cab booking payment number, cab booking amount, cab booking payment status.
- Cab Booking Cancellations: Manages cab booking cancellations with cab booking cancellation code, cab booking cancellation name, cab booking category, booking & reservation management owner, cab booking cancellation status, cab booking cancellation number, cab booking cancellation reason, cab booking refund amount.
- Create Booking: Supports workflow steps such as Select Customer, Choose Slot, Capture Payment, Confirm Booking.
- Reschedule Booking: Supports workflow steps such as Open Booking, Check New Slot, Update Schedule, Notify Customer.
- Process Cancellation: Supports workflow steps such as Verify Booking, Capture Reason, Calculate Refund, Close Booking.
- Reports: Provides summary views for Cab Booking Customers, Cab Booking Slots, Cab Bookings, Cab Booking Payments, and Cab Booking Cancellations and configured workflows.
- Audit Trail: Tracks important actions performed in the system.

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

## Dashboard Statistics

- Total Bookings
- Available Slots
- Pending Payments
- Cancellations

## Unique Domain Features

- Create Booking: Create Booking for cab booking with clear steps, ownership, and audit-ready status updates.
- Reschedule Booking: Reschedule Booking for cab booking with clear steps, ownership, and audit-ready status updates.
- Process Cancellation: Process Cancellation for cab booking with clear steps, ownership, and audit-ready status updates.

## Seed Data Theme

- Primary Data: domain records with code, title, description, and status
- People / Owners: staff users and administrators
- Workflows: Create Booking, Reschedule Booking, Process Cancellation
