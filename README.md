# 🏢 Online Booking System

A full-stack web application built with **ASP.NET Core 8 Web API** and **Angular 21** for managing room reservations efficiently, with conflict detection and a modern user interface.

---

## 📘 Project Overview

The **Online Booking System** is designed to simulate a real-world booking platform. It allows users to securely log in, view available rooms, create bookings, edit or delete reservations, and prevent overlapping bookings with conflict detection logic.

This project demonstrates full-stack development skills, including REST API design, secure authentication, database management, and frontend UI development.

---

## 🎯 Key Features

- **User Authentication:** JWT-based login and token management
- **Room Management:** View and manage available rooms
- **Booking Management:** Create, update, delete, and view bookings
- **Conflict Detection:** Prevent overlapping bookings
- **Responsive UI:** Built with Angular 21 and Angular Material
- **Form Validation:** Ensures correct input and prevents invalid bookings
- **Notifications:** Snackbar messages for success/error actions

---

## 🏗 Architecture

### Backend (ASP.NET Core 8)
- **Technologies:** ASP.NET Core 8, Entity Framework Core, SQL Server, JWT Authentication, Swagger
- **Responsibilities:**
  - RESTful API endpoints
  - Booking logic & validation
  - Conflict prevention
  - Database operations
  - Authentication & authorization

### Frontend (Angular 21)
- **Technologies:** Angular 21, Angular Material, TypeScript
- **Responsibilities:**
  - User interface & routing
  - Form validation
  - API communication
  - Booking dialog and calendar UI
  - Notifications and feedback

---

## 🔐 Security

- JWT token-based authentication
- Secure API endpoints
- Token storage in localStorage
- Authorization header for protected routes

---

## 🛠 Tech Stack

**Backend:**  
- ASP.NET Core 8  
- Entity Framework Core  
- SQL Server  
- JWT Authentication  
- Swagger / OpenAPI  

**Frontend:**  
- Angular 21  
- Angular Material  
- TypeScript / SCSS  

---

## 📅 Booking Features

- Add new bookings
- Edit and delete bookings
- Check for conflicts in time slots
- View all user bookings in a dashboard

---

## ⚙️ Setup Instructions

### Backend

1. Clone the repository:
```bash
git clone <repository-url>
cd BookingSystem.API
