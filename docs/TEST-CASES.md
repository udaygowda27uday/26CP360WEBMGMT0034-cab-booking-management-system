# Test Cases

| Test Case ID | Scenario | Steps | Expected Result |
| --- | --- | --- | --- |
| TC-001 | Admin login | Enter valid demo credentials and submit | Dashboard opens successfully |
| TC-002 | Invalid login | Enter wrong password and submit | Error message is displayed |
| TC-003 | View dashboard | Login and open dashboard | Statistics for Total Bookings, Available Slots, Pending Payments, and Cancellations are shown |
| TC-004 | Create CabBookingCustomer | Open Cab Booking Customers page and submit valid form | New CabBookingCustomer entry is created |
| TC-005 | Edit record | Update an existing Cab Booking Customers item | Updated values are saved |
| TC-006 | Delete record | Delete an existing item after confirmation | Item is removed or marked inactive |
| TC-007 | Search Cab Booking Customers | Search by domain fields | Matching Cab Booking Customers are displayed |
| TC-008 | View reports | Open reports page | Summary report loads correctly |
| TC-009 | Swagger check | Open `/api/docs` | Swagger documentation is visible |
| TC-010 | Health check | Call `/api/health` | API returns healthy status |

## Domain-Specific Test Focus

The tester should verify that seed data correctly represents domain records with code, title, description, and status, staff users and administrators, and Create Booking, Reschedule Booking, Process Cancellation.
