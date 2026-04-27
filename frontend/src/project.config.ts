export const projectConfig: any = {
  "projectName": "cab-booking-management-system",
  "displayName": "Cab Booking",
  "shortDescription": "Cab Booking for booking & reservation workflows, dashboard tracking, domain records, reports, and audit history.",
  "longDescription": "A student-ready cab booking generated from the management template with domain modules, seed data, reports, Swagger docs, Docker support, screenshots, viva questions, PPT content, and submission documentation.",
  "targetUsers": [
    "Booking Admin",
    "Front Desk",
    "Customer Support",
    "Manager"
  ],
  "useCases": [
    "Manage cab booking customers for Cab Booking",
    "Track cab booking slots and operational ownership",
    "Run create booking workflow",
    "Generate cab booking reports and audit history"
  ],
  "projectCategory": "web",
  "projectCategoryName": "Web Application",
  "category": "Management",
  "layoutVariant": "split-console",
  "visualIdentity": {
    "icon": "CalendarDays",
    "heroTitle": "Cab Booking Workspace",
    "heroSubtitle": "Cab Booking workspace for cab booking customers, cab booking slots, cab bookings, cab booking payments, guided workflows, reports, and audit history.",
    "vectorTitle": "Cab Booking vector dashboard",
    "vectorMotifs": [
      "Cab Booking Customers",
      "Cab Booking Slots",
      "Cab Bookings",
      "Cab Booking Payments",
      "Cab Booking Cancellations"
    ],
    "badge": "Booking Major Project",
    "vectorStyle": "booking-workflow"
  },
  "sidebarGroups": [
    {
      "group": "Reservation Operations",
      "items": [
        {
          "label": "Dashboard",
          "icon": "CalendarDays",
          "route": "/dashboard",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 1
        },
        {
          "label": "Cab Booking Customers",
          "icon": "Users",
          "route": "/cab-booking-customers",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 2
        },
        {
          "label": "Cab Booking Slots",
          "icon": "Clock",
          "route": "/cab-booking-slots",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 3
        },
        {
          "label": "Cab Bookings",
          "icon": "CalendarCheck",
          "route": "/cab-booking-bookings",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 4
        },
        {
          "label": "Cab Booking Payments",
          "icon": "CreditCard",
          "route": "/cab-booking-payments",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 5
        },
        {
          "label": "Cab Booking Cancellations",
          "icon": "CalendarX",
          "route": "/cab-booking-cancellations",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 6
        },
        {
          "label": "Create Booking",
          "icon": "CalendarCheck",
          "route": "/cab-booking-workflows/create-booking",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 7
        },
        {
          "label": "Reschedule Booking",
          "icon": "CalendarCheck",
          "route": "/cab-booking-workflows/reschedule-booking",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 8
        },
        {
          "label": "Process Cancellation",
          "icon": "CalendarCheck",
          "route": "/cab-booking-workflows/process-cancellation",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 9
        },
        {
          "label": "Reports",
          "icon": "ClipboardClock",
          "route": "/reports",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 10
        },
        {
          "label": "Audit Trail",
          "icon": "History",
          "route": "/audit-logs",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 11
        }
      ]
    }
  ],
  "entities": [
    {
      "name": "CabBookingCustomer",
      "plural": "Cab Booking Customers",
      "route": "/cab-booking-customers",
      "icon": "Users",
      "fields": [
        {
          "name": "customerCode",
          "label": "Cab Booking Customer Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Customer Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Customer Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "customerCode",
          "label": "Cab Booking Customer Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "phone",
          "label": "Cab Booking Phone Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "email",
          "label": "Cab Booking Email",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "relationships": [],
      "page": {
        "title": "Cab Booking Customers",
        "createAction": "Add Cab Booking Customer",
        "intro": "Cab Booking uses cab booking customers to handle cab booking operations with domain-specific tracking.",
        "searchPlaceholder": "Search cab booking customers by code, name, category, owner, or status...",
        "emptyState": "No cab booking customers have been added yet.",
        "successMessage": "Cab Booking Customer saved successfully.",
        "validationMessage": "Please enter valid cab booking customers details."
      },
      "seed": [
        {
          "customerCode": "CBC-2026-0001",
          "name": "Aarav Sharma",
          "category": "Cab Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "phone": "+91 9800000000",
          "email": "aarav.sharma@example.edu",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "customerCode": "CBC-2026-0002",
          "name": "Diya Patel",
          "category": "Cab Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "phone": "+91 9800013791",
          "email": "diya.patel@example.edu",
          "title": "Cab Booking Cab Reservation"
        },
        {
          "customerCode": "CBC-2026-0003",
          "name": "Rohan Mehta",
          "category": "Cab Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "phone": "+91 9800027582",
          "email": "rohan.mehta@example.edu",
          "title": "Cab Booking Equipment Booking"
        },
        {
          "customerCode": "CBC-2026-0004",
          "name": "Ananya Rao",
          "category": "Cab Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "phone": "+91 9800041373",
          "email": "ananya.rao@example.edu",
          "title": "Cab Booking Room Booking Slot"
        },
        {
          "customerCode": "CBC-2026-0005",
          "name": "Kabir Singh",
          "category": "Cab Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "phone": "+91 9800055164",
          "email": "kabir.singh@example.edu",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "customerCode": "CBC-2026-0006",
          "name": "Isha Nair",
          "category": "Cab Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "phone": "+91 9800068955",
          "email": "isha.nair@example.edu",
          "title": "Cab Booking Cab Reservation"
        },
        {
          "customerCode": "CBC-2026-0007",
          "name": "Arjun Verma",
          "category": "Cab Review",
          "ownerName": "Arjun Verma",
          "status": "Active",
          "phone": "+91 9800082746",
          "email": "arjun.verma@example.edu",
          "title": "Cab Booking Equipment Booking"
        },
        {
          "customerCode": "CBC-2026-0008",
          "name": "Meera Iyer",
          "category": "Cab Support",
          "ownerName": "Meera Iyer",
          "status": "Pending Review",
          "phone": "+91 9800096537",
          "email": "meera.iyer@example.edu",
          "title": "Cab Booking Room Booking Slot"
        },
        {
          "customerCode": "CBC-2026-0009",
          "name": "Vivaan Joshi",
          "category": "Cab Operations",
          "ownerName": "Vivaan Joshi",
          "status": "Approved",
          "phone": "+91 9800110328",
          "email": "vivaan.joshi@example.edu",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "customerCode": "CBC-2026-0010",
          "name": "Sara Khan",
          "category": "Cab Service",
          "ownerName": "Sara Khan",
          "status": "In Progress",
          "phone": "+91 9800124119",
          "email": "sara.khan@example.edu",
          "title": "Cab Booking Cab Reservation"
        }
      ]
    },
    {
      "name": "CabBookingSlot",
      "plural": "Cab Booking Slots",
      "route": "/cab-booking-slots",
      "icon": "Clock",
      "fields": [
        {
          "name": "slotCode",
          "label": "Cab Booking Slot Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Slot Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Slot Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "slotCode",
          "label": "Cab Booking Slot Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "slotDate",
          "label": "Cab Booking Slot Date",
          "type": "date",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "capacity",
          "label": "Cab Booking Capacity",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "relationships": [],
      "page": {
        "title": "Cab Booking Slots",
        "createAction": "Manage Cab Booking Slot",
        "intro": "Cab Booking uses cab booking slots to handle cab booking operations with domain-specific tracking.",
        "searchPlaceholder": "Search cab booking slots by code, name, category, owner, or status...",
        "emptyState": "No cab booking slots have been added yet.",
        "successMessage": "Cab Booking Slot saved successfully.",
        "validationMessage": "Please enter valid cab booking slots details."
      },
      "seed": [
        {
          "slotCode": "CBS-2026-0001",
          "name": "Aarav Sharma",
          "category": "Cab Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "slotDate": "2026-05-01",
          "capacity": "Pune",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "slotCode": "CBS-2026-0002",
          "name": "Diya Patel",
          "category": "Cab Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "slotDate": "2026-05-02",
          "capacity": "Mumbai",
          "title": "Cab Booking Cab Reservation"
        },
        {
          "slotCode": "CBS-2026-0003",
          "name": "Rohan Mehta",
          "category": "Cab Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "slotDate": "2026-05-03",
          "capacity": "Bengaluru",
          "title": "Cab Booking Equipment Booking"
        },
        {
          "slotCode": "CBS-2026-0004",
          "name": "Ananya Rao",
          "category": "Cab Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "slotDate": "2026-05-04",
          "capacity": "Hyderabad",
          "title": "Cab Booking Room Booking Slot"
        },
        {
          "slotCode": "CBS-2026-0005",
          "name": "Kabir Singh",
          "category": "Cab Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "slotDate": "2026-05-05",
          "capacity": "Ahmedabad",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "slotCode": "CBS-2026-0006",
          "name": "Isha Nair",
          "category": "Cab Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "slotDate": "2026-05-06",
          "capacity": "Jaipur",
          "title": "Cab Booking Cab Reservation"
        }
      ]
    },
    {
      "name": "CabBookingBooking",
      "plural": "Cab Bookings",
      "route": "/cab-booking-bookings",
      "icon": "CalendarCheck",
      "fields": [
        {
          "name": "bookingCode",
          "label": "Cab Booking Booking Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Booking Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Booking Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "bookingNo",
          "label": "Cab Booking Booking Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "bookingDate",
          "label": "Cab Booking Booking Date",
          "type": "date",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "bookingStatus",
          "label": "Cab Booking Booking Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "relationships": [],
      "page": {
        "title": "Cab Bookings",
        "createAction": "Manage Cab Booking Booking",
        "intro": "Cab Booking uses cab bookings to handle cab booking operations with domain-specific tracking.",
        "searchPlaceholder": "Search cab bookings by code, name, category, owner, or status...",
        "emptyState": "No cab bookings have been added yet.",
        "successMessage": "Cab Booking Booking saved successfully.",
        "validationMessage": "Please enter valid cab bookings details."
      },
      "seed": [
        {
          "bookingCode": "CB-2026-0001",
          "name": "Aarav Sharma",
          "category": "Cab Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "bookingNo": "CB-2026-0001",
          "bookingDate": "2026-05-01",
          "bookingStatus": "Active",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "bookingCode": "CB-2026-0002",
          "name": "Diya Patel",
          "category": "Cab Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "bookingNo": "CB-2026-0002",
          "bookingDate": "2026-05-02",
          "bookingStatus": "Pending Review",
          "title": "Cab Booking Cab Reservation"
        },
        {
          "bookingCode": "CB-2026-0003",
          "name": "Rohan Mehta",
          "category": "Cab Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "bookingNo": "CB-2026-0003",
          "bookingDate": "2026-05-03",
          "bookingStatus": "Approved",
          "title": "Cab Booking Equipment Booking"
        },
        {
          "bookingCode": "CB-2026-0004",
          "name": "Ananya Rao",
          "category": "Cab Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "bookingNo": "CB-2026-0004",
          "bookingDate": "2026-05-04",
          "bookingStatus": "In Progress",
          "title": "Cab Booking Room Booking Slot"
        },
        {
          "bookingCode": "CB-2026-0005",
          "name": "Kabir Singh",
          "category": "Cab Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "bookingNo": "CB-2026-0005",
          "bookingDate": "2026-05-05",
          "bookingStatus": "Closed",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "bookingCode": "CB-2026-0006",
          "name": "Isha Nair",
          "category": "Cab Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "bookingNo": "CB-2026-0006",
          "bookingDate": "2026-05-06",
          "bookingStatus": "Escalated",
          "title": "Cab Booking Cab Reservation"
        }
      ]
    },
    {
      "name": "CabBookingPayment",
      "plural": "Cab Booking Payments",
      "route": "/cab-booking-payments",
      "icon": "CreditCard",
      "fields": [
        {
          "name": "paymentCode",
          "label": "Cab Booking Payment Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Payment Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Payment Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "paymentNo",
          "label": "Cab Booking Payment Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "amount",
          "label": "Cab Booking Amount",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "paymentStatus",
          "label": "Cab Booking Payment Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "relationships": [],
      "page": {
        "title": "Cab Booking Payments",
        "createAction": "Manage Cab Booking Payment",
        "intro": "Cab Booking uses cab booking payments to handle cab booking operations with domain-specific tracking.",
        "searchPlaceholder": "Search cab booking payments by code, name, category, owner, or status...",
        "emptyState": "No cab booking payments have been added yet.",
        "successMessage": "Cab Booking Payment saved successfully.",
        "validationMessage": "Please enter valid cab booking payments details."
      },
      "seed": [
        {
          "paymentCode": "CBP-2026-0001",
          "name": "Aarav Sharma",
          "category": "Cab Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "paymentNo": "CBP-2026-0001",
          "amount": 1250,
          "paymentStatus": "Active",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "paymentCode": "CBP-2026-0002",
          "name": "Diya Patel",
          "category": "Cab Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "paymentNo": "CBP-2026-0002",
          "amount": 2500,
          "paymentStatus": "Pending Review",
          "title": "Cab Booking Cab Reservation"
        },
        {
          "paymentCode": "CBP-2026-0003",
          "name": "Rohan Mehta",
          "category": "Cab Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "paymentNo": "CBP-2026-0003",
          "amount": 3750,
          "paymentStatus": "Approved",
          "title": "Cab Booking Equipment Booking"
        },
        {
          "paymentCode": "CBP-2026-0004",
          "name": "Ananya Rao",
          "category": "Cab Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "paymentNo": "CBP-2026-0004",
          "amount": 5000,
          "paymentStatus": "In Progress",
          "title": "Cab Booking Room Booking Slot"
        },
        {
          "paymentCode": "CBP-2026-0005",
          "name": "Kabir Singh",
          "category": "Cab Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "paymentNo": "CBP-2026-0005",
          "amount": 6250,
          "paymentStatus": "Closed",
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "paymentCode": "CBP-2026-0006",
          "name": "Isha Nair",
          "category": "Cab Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "paymentNo": "CBP-2026-0006",
          "amount": 7500,
          "paymentStatus": "Escalated",
          "title": "Cab Booking Cab Reservation"
        }
      ]
    },
    {
      "name": "CabBookingCancellation",
      "plural": "Cab Booking Cancellations",
      "route": "/cab-booking-cancellations",
      "icon": "CalendarX",
      "fields": [
        {
          "name": "cancellationCode",
          "label": "Cab Booking Cancellation Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Cancellation Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Cancellation Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "cancellationNo",
          "label": "Cab Booking Cancellation Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "reason",
          "label": "Cab Booking Cancellation Reason",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "refundAmount",
          "label": "Cab Booking Refund Amount",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "relationships": [],
      "page": {
        "title": "Cab Booking Cancellations",
        "createAction": "Manage Cab Booking Cancellation",
        "intro": "Cab Booking uses cab booking cancellations to handle cab booking operations with domain-specific tracking.",
        "searchPlaceholder": "Search cab booking cancellations by code, name, category, owner, or status...",
        "emptyState": "No cab booking cancellations have been added yet.",
        "successMessage": "Cab Booking Cancellation saved successfully.",
        "validationMessage": "Please enter valid cab booking cancellations details."
      },
      "seed": [
        {
          "cancellationCode": "CBC-2026-0001",
          "name": "Aarav Sharma",
          "category": "Cab Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "cancellationNo": "CBC-2026-0001",
          "reason": "Northstar Operations Cab Booking Cancellation 1",
          "refundAmount": 1250,
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "cancellationCode": "CBC-2026-0002",
          "name": "Diya Patel",
          "category": "Cab Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "cancellationNo": "CBC-2026-0002",
          "reason": "Greenfield Services Cab Booking Cancellation 2",
          "refundAmount": 2500,
          "title": "Cab Booking Cab Reservation"
        },
        {
          "cancellationCode": "CBC-2026-0003",
          "name": "Rohan Mehta",
          "category": "Cab Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "cancellationNo": "CBC-2026-0003",
          "reason": "BluePeak Solutions Cab Booking Cancellation 3",
          "refundAmount": 3750,
          "title": "Cab Booking Equipment Booking"
        },
        {
          "cancellationCode": "CBC-2026-0004",
          "name": "Ananya Rao",
          "category": "Cab Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "cancellationNo": "CBC-2026-0004",
          "reason": "MetroCare Group Cab Booking Cancellation 4",
          "refundAmount": 5000,
          "title": "Cab Booking Room Booking Slot"
        },
        {
          "cancellationCode": "CBC-2026-0005",
          "name": "Kabir Singh",
          "category": "Cab Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "cancellationNo": "CBC-2026-0005",
          "reason": "Sunrise Associates Cab Booking Cancellation 5",
          "refundAmount": 6250,
          "title": "Cab Booking Event Ticket Request"
        },
        {
          "cancellationCode": "CBC-2026-0006",
          "name": "Isha Nair",
          "category": "Cab Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "cancellationNo": "CBC-2026-0006",
          "reason": "Vertex Admin Office Cab Booking Cancellation 6",
          "refundAmount": 7500,
          "title": "Cab Booking Cab Reservation"
        }
      ]
    }
  ],
  "workflows": [
    {
      "name": "CreateBooking",
      "label": "Create Booking",
      "description": "Create Booking for cab booking with clear steps, ownership, and audit-ready status updates.",
      "route": "/cab-booking-workflows/create-booking",
      "steps": [
        "Select Customer",
        "Choose Slot",
        "Capture Payment",
        "Confirm Booking"
      ],
      "actions": [
        "Select Customer",
        "Choose Slot",
        "Capture Payment",
        "Confirm Booking"
      ],
      "serviceMethod": "createBooking",
      "pluginHook": "generateWorkflowActions"
    },
    {
      "name": "RescheduleBooking",
      "label": "Reschedule Booking",
      "description": "Reschedule Booking for cab booking with clear steps, ownership, and audit-ready status updates.",
      "route": "/cab-booking-workflows/reschedule-booking",
      "steps": [
        "Open Booking",
        "Check New Slot",
        "Update Schedule",
        "Notify Customer"
      ],
      "actions": [
        "Open Booking",
        "Check New Slot",
        "Update Schedule",
        "Notify Customer"
      ],
      "serviceMethod": "rescheduleBooking",
      "pluginHook": "generateWorkflowActions"
    },
    {
      "name": "ProcessCancellation",
      "label": "Process Cancellation",
      "description": "Process Cancellation for cab booking with clear steps, ownership, and audit-ready status updates.",
      "route": "/cab-booking-workflows/process-cancellation",
      "steps": [
        "Verify Booking",
        "Capture Reason",
        "Calculate Refund",
        "Close Booking"
      ],
      "actions": [
        "Verify Booking",
        "Capture Reason",
        "Calculate Refund",
        "Close Booking"
      ],
      "serviceMethod": "processCancellation",
      "pluginHook": "generateWorkflowActions"
    }
  ],
  "pluginHooks": [
    "beforeCreateEntity",
    "afterCreateEntity",
    "calculateDerivedFields",
    "generateWorkflowActions",
    "seedDomainData"
  ],
  "theme": {
    "accent": "booking-cab-booking",
    "sidebarTitle": "Cab Booking for booking & reservation workflows, dashboard tracking, domain records, reports, and audit history."
  },
  "themeConfig": {
    "projectName": "cab-booking",
    "displayName": "Cab Booking",
    "domain": "booking",
    "designTemplateId": "booking-split-console",
    "designTemplateName": "Cab Booking Split Console",
    "style": "booking-major-project",
    "styleDescription": "Cab Booking layout with booking-workflow visuals and domain-specific controls.",
    "colors": {
      "primary": "#be123c",
      "accent": "#0ea5e9",
      "background": "#fff1f2",
      "surface": "#ffffff",
      "muted": "#ffe4e6",
      "text": "#111827"
    },
    "radius": "10px",
    "density": "comfortable",
    "vector": "booking-workflow",
    "vectorFamily": "booking-cab-booking",
    "illustration": {
      "title": "Cab Booking visual",
      "motifs": [
        "Cab Booking Customers",
        "Cab Booking Slots",
        "Cab Bookings",
        "Cab Booking Payments"
      ]
    },
    "sidebarVariant": "split-console",
    "cardStyle": "insight-panel",
    "layout": {
      "variant": "split-console"
    }
  },
  "dashboardTitle": "Cab Booking Command Center",
  "dashboardIntro": "Cab Booking shows cab booking customers, cab booking slots, cab bookings, cab booking payments, workflows, alerts, and reports.",
  "workflowPanelTitle": "Cab Booking Workflow Board",
  "tableSearchPlaceholder": "Search cab booking customers, cab booking slots, cab bookings...",
  "emptyState": "No cab booking customers found for this filter.",
  "navigationLabels": [
    {
      "to": "/dashboard",
      "label": "Dashboard",
      "icon": "CalendarDays",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-customers",
      "label": "Cab Booking Customers",
      "icon": "Users",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-slots",
      "label": "Cab Booking Slots",
      "icon": "Clock",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-bookings",
      "label": "Cab Bookings",
      "icon": "CalendarCheck",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-payments",
      "label": "Cab Booking Payments",
      "icon": "CreditCard",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-cancellations",
      "label": "Cab Booking Cancellations",
      "icon": "CalendarX",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-workflows/create-booking",
      "label": "Create Booking",
      "icon": "CalendarCheck",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-workflows/reschedule-booking",
      "label": "Reschedule Booking",
      "icon": "CalendarCheck",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/cab-booking-workflows/process-cancellation",
      "label": "Process Cancellation",
      "icon": "CalendarCheck",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/reports",
      "label": "Reports",
      "icon": "ClipboardClock",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/audit-logs",
      "label": "Audit Trail",
      "icon": "History",
      "group": "Reservation Operations",
      "roles": [
        "admin",
        "operator"
      ]
    }
  ],
  "dashboardCards": [
    {
      "key": "domain:CabBookingCustomer",
      "title": "Total Bookings",
      "helper": "count metric from CabBookingCustomer",
      "sourceEntity": "CabBookingCustomer",
      "metric": "count",
      "value": "44"
    },
    {
      "key": "domain:CabBookingSlot",
      "title": "Available Slots",
      "helper": "pendingCount metric from CabBookingSlot",
      "sourceEntity": "CabBookingSlot",
      "metric": "pendingCount",
      "value": "9"
    },
    {
      "key": "domain:CabBookingBooking",
      "title": "Pending Payments",
      "helper": "sumValue metric from CabBookingBooking",
      "sourceEntity": "CabBookingBooking",
      "metric": "sumValue",
      "value": "22"
    },
    {
      "key": "domain:CabBookingPayment",
      "title": "Cancellations",
      "helper": "todayCount metric from CabBookingPayment",
      "sourceEntity": "CabBookingPayment",
      "metric": "todayCount",
      "value": "29"
    }
  ],
  "domainModules": [
    {
      "title": "Cab Booking Customers",
      "description": "Cab Booking Customers module with Cab Booking Customer Code, Cab Booking Customer Name, Cab Booking Category, Booking & Reservation Management Owner.",
      "metric": "37",
      "tone": "blue"
    },
    {
      "title": "Cab Booking Slots",
      "description": "Cab Booking Slots module with Cab Booking Slot Code, Cab Booking Slot Name, Cab Booking Category, Booking & Reservation Management Owner.",
      "metric": "15",
      "tone": "emerald"
    },
    {
      "title": "Cab Bookings",
      "description": "Cab Bookings module with Cab Booking Booking Code, Cab Booking Booking Name, Cab Booking Category, Booking & Reservation Management Owner.",
      "metric": "10",
      "tone": "amber"
    },
    {
      "title": "Cab Booking Payments",
      "description": "Cab Booking Payments module with Cab Booking Payment Code, Cab Booking Payment Name, Cab Booking Category, Booking & Reservation Management Owner.",
      "metric": "37",
      "tone": "rose"
    },
    {
      "title": "Cab Booking Cancellations",
      "description": "Cab Booking Cancellations module with Cab Booking Cancellation Code, Cab Booking Cancellation Name, Cab Booking Category, Booking & Reservation Management Owner.",
      "metric": "32",
      "tone": "violet"
    }
  ],
  "workflowSteps": [
    "Select Customer",
    "Choose Slot",
    "Capture Payment",
    "Confirm Booking"
  ],
  "quickActions": [
    "Create Booking",
    "Reschedule Booking",
    "Process Cancellation"
  ],
  "insightPanels": [
    {
      "title": "Create Booking",
      "value": "10",
      "description": "Create Booking for cab booking with clear steps, ownership, and audit-ready status updates."
    },
    {
      "title": "Reschedule Booking",
      "value": "13",
      "description": "Reschedule Booking for cab booking with clear steps, ownership, and audit-ready status updates."
    },
    {
      "title": "Process Cancellation",
      "value": "21",
      "description": "Process Cancellation for cab booking with clear steps, ownership, and audit-ready status updates."
    }
  ],
  "formSchema": [
    {
      "name": "customerCode",
      "label": "Cab Booking Customer Code",
      "type": "string",
      "required": true,
      "table": true,
      "form": true,
      "unique": true
    },
    {
      "name": "name",
      "label": "Cab Booking Customer Name",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "category",
      "label": "Cab Booking Category",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "ownerName",
      "label": "Booking & Reservation Management Owner",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "status",
      "label": "Cab Booking Customer Status",
      "type": "select",
      "required": true,
      "table": true,
      "form": true,
      "options": [
        "Active",
        "Pending Review",
        "Approved",
        "Closed"
      ]
    },
    {
      "name": "customerCode",
      "label": "Cab Booking Customer Code",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "phone",
      "label": "Cab Booking Phone Number",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "email",
      "label": "Cab Booking Email",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    }
  ],
  "recordPage": {
    "entityName": "CabBookingCustomer",
    "title": "Cab Booking Customers",
    "route": "/cab-booking-customers",
    "createAction": "Add Cab Booking Customer",
    "intro": "Cab Booking uses cab booking customers to handle cab booking operations with domain-specific tracking.",
    "searchPlaceholder": "Search cab booking customers by code, name, category, owner, or status...",
    "emptyState": "No cab booking customers have been added yet.",
    "fields": [
      {
        "name": "customerCode",
        "label": "Cab Booking Customer Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true,
        "unique": true
      },
      {
        "name": "name",
        "label": "Cab Booking Customer Name",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "category",
        "label": "Cab Booking Category",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "ownerName",
        "label": "Booking & Reservation Management Owner",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "status",
        "label": "Cab Booking Customer Status",
        "type": "select",
        "required": true,
        "table": true,
        "form": true,
        "options": [
          "Active",
          "Pending Review",
          "Approved",
          "Closed"
        ]
      },
      {
        "name": "customerCode",
        "label": "Cab Booking Customer Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "phone",
        "label": "Cab Booking Phone Number",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "email",
        "label": "Cab Booking Email",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      }
    ],
    "columns": [
      {
        "key": "customerCode",
        "label": "Cab Booking Customer Code"
      },
      {
        "key": "name",
        "label": "Cab Booking Customer Name"
      },
      {
        "key": "category",
        "label": "Cab Booking Category"
      },
      {
        "key": "ownerName",
        "label": "Booking & Reservation Management Owner"
      },
      {
        "key": "status",
        "label": "Cab Booking Customer Status"
      },
      {
        "key": "customerCode",
        "label": "Cab Booking Customer Code"
      },
      {
        "key": "phone",
        "label": "Cab Booking Phone Number"
      },
      {
        "key": "email",
        "label": "Cab Booking Email"
      }
    ]
  },
  "transactionPage": {
    "entityName": "CabBookingSlot",
    "title": "Cab Booking Slots",
    "route": "/cab-booking-slots",
    "createAction": "Manage Cab Booking Slot",
    "intro": "Cab Booking uses cab booking slots to handle cab booking operations with domain-specific tracking.",
    "searchPlaceholder": "Search cab booking slots by code, name, category, owner, or status...",
    "emptyState": "No cab booking slots have been added yet.",
    "fields": [
      {
        "name": "slotCode",
        "label": "Cab Booking Slot Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true,
        "unique": true
      },
      {
        "name": "name",
        "label": "Cab Booking Slot Name",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "category",
        "label": "Cab Booking Category",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "ownerName",
        "label": "Booking & Reservation Management Owner",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "status",
        "label": "Cab Booking Slot Status",
        "type": "select",
        "required": true,
        "table": true,
        "form": true,
        "options": [
          "Active",
          "Pending Review",
          "Approved",
          "Closed"
        ]
      },
      {
        "name": "slotCode",
        "label": "Cab Booking Slot Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "slotDate",
        "label": "Cab Booking Slot Date",
        "type": "date",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "capacity",
        "label": "Cab Booking Capacity",
        "type": "number",
        "required": true,
        "table": true,
        "form": true
      }
    ],
    "columns": [
      {
        "key": "slotCode",
        "label": "Cab Booking Slot Code"
      },
      {
        "key": "name",
        "label": "Cab Booking Slot Name"
      },
      {
        "key": "category",
        "label": "Cab Booking Category"
      },
      {
        "key": "ownerName",
        "label": "Booking & Reservation Management Owner"
      },
      {
        "key": "status",
        "label": "Cab Booking Slot Status"
      },
      {
        "key": "slotCode",
        "label": "Cab Booking Slot Code"
      },
      {
        "key": "slotDate",
        "label": "Cab Booking Slot Date"
      },
      {
        "key": "capacity",
        "label": "Cab Booking Capacity"
      }
    ]
  },
  "entityPages": {
    "CabBookingCustomer": {
      "entityName": "CabBookingCustomer",
      "title": "Cab Booking Customers",
      "route": "/cab-booking-customers",
      "createAction": "Add Cab Booking Customer",
      "intro": "Cab Booking uses cab booking customers to handle cab booking operations with domain-specific tracking.",
      "searchPlaceholder": "Search cab booking customers by code, name, category, owner, or status...",
      "emptyState": "No cab booking customers have been added yet.",
      "fields": [
        {
          "name": "customerCode",
          "label": "Cab Booking Customer Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Customer Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Customer Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "customerCode",
          "label": "Cab Booking Customer Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "phone",
          "label": "Cab Booking Phone Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "email",
          "label": "Cab Booking Email",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "columns": [
        {
          "key": "customerCode",
          "label": "Cab Booking Customer Code"
        },
        {
          "key": "name",
          "label": "Cab Booking Customer Name"
        },
        {
          "key": "category",
          "label": "Cab Booking Category"
        },
        {
          "key": "ownerName",
          "label": "Booking & Reservation Management Owner"
        },
        {
          "key": "status",
          "label": "Cab Booking Customer Status"
        },
        {
          "key": "customerCode",
          "label": "Cab Booking Customer Code"
        },
        {
          "key": "phone",
          "label": "Cab Booking Phone Number"
        },
        {
          "key": "email",
          "label": "Cab Booking Email"
        }
      ]
    },
    "CabBookingSlot": {
      "entityName": "CabBookingSlot",
      "title": "Cab Booking Slots",
      "route": "/cab-booking-slots",
      "createAction": "Manage Cab Booking Slot",
      "intro": "Cab Booking uses cab booking slots to handle cab booking operations with domain-specific tracking.",
      "searchPlaceholder": "Search cab booking slots by code, name, category, owner, or status...",
      "emptyState": "No cab booking slots have been added yet.",
      "fields": [
        {
          "name": "slotCode",
          "label": "Cab Booking Slot Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Slot Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Slot Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "slotCode",
          "label": "Cab Booking Slot Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "slotDate",
          "label": "Cab Booking Slot Date",
          "type": "date",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "capacity",
          "label": "Cab Booking Capacity",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "columns": [
        {
          "key": "slotCode",
          "label": "Cab Booking Slot Code"
        },
        {
          "key": "name",
          "label": "Cab Booking Slot Name"
        },
        {
          "key": "category",
          "label": "Cab Booking Category"
        },
        {
          "key": "ownerName",
          "label": "Booking & Reservation Management Owner"
        },
        {
          "key": "status",
          "label": "Cab Booking Slot Status"
        },
        {
          "key": "slotCode",
          "label": "Cab Booking Slot Code"
        },
        {
          "key": "slotDate",
          "label": "Cab Booking Slot Date"
        },
        {
          "key": "capacity",
          "label": "Cab Booking Capacity"
        }
      ]
    },
    "CabBookingBooking": {
      "entityName": "CabBookingBooking",
      "title": "Cab Bookings",
      "route": "/cab-booking-bookings",
      "createAction": "Manage Cab Booking Booking",
      "intro": "Cab Booking uses cab bookings to handle cab booking operations with domain-specific tracking.",
      "searchPlaceholder": "Search cab bookings by code, name, category, owner, or status...",
      "emptyState": "No cab bookings have been added yet.",
      "fields": [
        {
          "name": "bookingCode",
          "label": "Cab Booking Booking Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Booking Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Booking Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "bookingNo",
          "label": "Cab Booking Booking Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "bookingDate",
          "label": "Cab Booking Booking Date",
          "type": "date",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "bookingStatus",
          "label": "Cab Booking Booking Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "columns": [
        {
          "key": "bookingCode",
          "label": "Cab Booking Booking Code"
        },
        {
          "key": "name",
          "label": "Cab Booking Booking Name"
        },
        {
          "key": "category",
          "label": "Cab Booking Category"
        },
        {
          "key": "ownerName",
          "label": "Booking & Reservation Management Owner"
        },
        {
          "key": "status",
          "label": "Cab Booking Booking Status"
        },
        {
          "key": "bookingNo",
          "label": "Cab Booking Booking Number"
        },
        {
          "key": "bookingDate",
          "label": "Cab Booking Booking Date"
        },
        {
          "key": "bookingStatus",
          "label": "Cab Booking Booking Status"
        }
      ]
    },
    "CabBookingPayment": {
      "entityName": "CabBookingPayment",
      "title": "Cab Booking Payments",
      "route": "/cab-booking-payments",
      "createAction": "Manage Cab Booking Payment",
      "intro": "Cab Booking uses cab booking payments to handle cab booking operations with domain-specific tracking.",
      "searchPlaceholder": "Search cab booking payments by code, name, category, owner, or status...",
      "emptyState": "No cab booking payments have been added yet.",
      "fields": [
        {
          "name": "paymentCode",
          "label": "Cab Booking Payment Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Payment Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Payment Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "paymentNo",
          "label": "Cab Booking Payment Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "amount",
          "label": "Cab Booking Amount",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "paymentStatus",
          "label": "Cab Booking Payment Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "columns": [
        {
          "key": "paymentCode",
          "label": "Cab Booking Payment Code"
        },
        {
          "key": "name",
          "label": "Cab Booking Payment Name"
        },
        {
          "key": "category",
          "label": "Cab Booking Category"
        },
        {
          "key": "ownerName",
          "label": "Booking & Reservation Management Owner"
        },
        {
          "key": "status",
          "label": "Cab Booking Payment Status"
        },
        {
          "key": "paymentNo",
          "label": "Cab Booking Payment Number"
        },
        {
          "key": "amount",
          "label": "Cab Booking Amount"
        },
        {
          "key": "paymentStatus",
          "label": "Cab Booking Payment Status"
        }
      ]
    },
    "CabBookingCancellation": {
      "entityName": "CabBookingCancellation",
      "title": "Cab Booking Cancellations",
      "route": "/cab-booking-cancellations",
      "createAction": "Manage Cab Booking Cancellation",
      "intro": "Cab Booking uses cab booking cancellations to handle cab booking operations with domain-specific tracking.",
      "searchPlaceholder": "Search cab booking cancellations by code, name, category, owner, or status...",
      "emptyState": "No cab booking cancellations have been added yet.",
      "fields": [
        {
          "name": "cancellationCode",
          "label": "Cab Booking Cancellation Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Cab Booking Cancellation Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Cab Booking Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Booking & Reservation Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Cab Booking Cancellation Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "cancellationNo",
          "label": "Cab Booking Cancellation Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "reason",
          "label": "Cab Booking Cancellation Reason",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "refundAmount",
          "label": "Cab Booking Refund Amount",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "columns": [
        {
          "key": "cancellationCode",
          "label": "Cab Booking Cancellation Code"
        },
        {
          "key": "name",
          "label": "Cab Booking Cancellation Name"
        },
        {
          "key": "category",
          "label": "Cab Booking Category"
        },
        {
          "key": "ownerName",
          "label": "Booking & Reservation Management Owner"
        },
        {
          "key": "status",
          "label": "Cab Booking Cancellation Status"
        },
        {
          "key": "cancellationNo",
          "label": "Cab Booking Cancellation Number"
        },
        {
          "key": "reason",
          "label": "Cab Booking Cancellation Reason"
        },
        {
          "key": "refundAmount",
          "label": "Cab Booking Refund Amount"
        }
      ]
    }
  },
  "reportSections": [
    {
      "heading": "Project Overview",
      "description": "A student-ready cab booking generated from the management template with domain modules, seed data, reports, Swagger docs, Docker support, screenshots, viva questions, PPT content, and submission documentation."
    },
    {
      "heading": "Demo Use Cases",
      "description": "Manage cab booking customers for Cab Booking, Track cab booking slots and operational ownership, Run create booking workflow, Generate cab booking reports and audit history"
    },
    {
      "heading": "Learning Outcomes",
      "description": "Cab Booking domain modelling, Booking & Reservation Management CRUD and dashboard design, Cab Booking workflow automation, Student-ready documentation, screenshots, and Docker deployment"
    }
  ],
  "docs": {
    "problemStatement": "Cab Booking needs a focused system for cab booking customers, cab booking slots, cab bookings, cab booking payments, workflows, reports, and audit visibility instead of manual spreadsheets.",
    "learningOutcomes": [
      "Cab Booking domain modelling",
      "Booking & Reservation Management CRUD and dashboard design",
      "Cab Booking workflow automation",
      "Student-ready documentation, screenshots, and Docker deployment"
    ]
  }
};
