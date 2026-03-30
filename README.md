# 🎬 Movie-GPT

A Netflix-inspired movie discovery web app built with **React + Vite**, featuring **Firebase Authentication** and a clean login / signup experience.

---

## 🚀 Current Progress

This project currently includes:

- 🔐 **Firebase Authentication**
  - Sign Up with Email & Password
  - Sign In with Email & Password
  - User profile name update after signup

- 🧾 **Form Validation**
  - Email format validation
  - Password length validation
  - Error handling for invalid inputs and Firebase auth errors

- 🎨 **Responsive Login UI**
  - Netflix-inspired dark theme
  - Background hero image
  - Opaque login / signup form
  - Toggle between Sign In and Sign Up

- ⚡ **Built with Vite**
  - Fast development environment
  - Optimized build setup

---

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **Tailwind CSS**
- **Firebase Authentication**
- **JavaScript (ES6+)**

---

## 📌 Features Implemented So Far

### Authentication
- User account creation using Firebase
- Existing user login using Firebase
- Firebase `updateProfile()` used to store display name

### Validation
- Custom email validation using regex
- Password validation before hitting Firebase
- Error messages displayed in UI

### UI
- Reusable Header component
- Login / Signup toggle flow
- Full-screen background with dark overlay
- Centered auth form

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Login.jsx
│   ├── Browse.jsx
│   └── Body.jsx
│
├── utils/
│   ├── firebase.js
│   └── validate.js
│
├── App.jsx
├── main.jsx
└── index.css