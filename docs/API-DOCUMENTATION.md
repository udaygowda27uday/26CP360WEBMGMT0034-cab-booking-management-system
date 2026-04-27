# API Documentation

The backend exposes REST APIs for Cab Booking Management System. Swagger documentation is available at:

```txt
http://localhost:18080/api/docs
```

## Authentication

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/auth/login` | Login and receive an access token |

## Common APIs

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check backend health |
| GET | `/api/dashboard/stats` | Fetch dashboard statistics |
| GET | `/api/reports/summary` | View report summary |
| GET | `/api/audit-log` | View audit history |

## Domain APIs

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/domain/CabBookingCustomer` | List Cab Booking Customers |
| POST | `/api/domain/CabBookingCustomer` | Create Cab Booking Customers entry |
| GET | `/api/domain/CabBookingSlot` | List Cab Booking Slots |
| POST | `/api/domain/CabBookingSlot` | Create Cab Booking Slots entry |
| GET | `/api/domain/CabBookingBooking` | List Cab Bookings |
| POST | `/api/domain/CabBookingBooking` | Create Cab Bookings entry |
| GET | `/api/domain/CabBookingPayment` | List Cab Booking Payments |
| POST | `/api/domain/CabBookingPayment` | Create Cab Booking Payments entry |
| GET | `/api/domain/CabBookingCancellation` | List Cab Booking Cancellations |
| POST | `/api/domain/CabBookingCancellation` | Create Cab Booking Cancellations entry |

## Demo Login

```json
{
  "email": "admin@example.com",
  "password": "Admin@123"
}
```
