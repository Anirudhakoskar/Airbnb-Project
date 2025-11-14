# WanderLust Web Application

A full‑stack Airbnb‑style rental platform built using **Node.js**, **Express**, **MongoDB**, and **EJS**, supporting secure authentication, CRUD operations, image uploads, interactive maps, and responsive UI. This project demonstrates modern web development practices and scalable backend architecture with clean code structure.

---


📸 Project Screenshots

Create a folder named /screenshots in your repo and add the images with the names below.

🏠 Home Page
<p align="center"> <img src="./screenshots/homepage.png" width="800"> </p>
📝 Sign Up Page
<p align="center"> <img src="./screenshots/signup.png" width="800"> </p>
🔐 Login Page
<p align="center"> <img src="./screenshots/login.png" width="800"> </p>
➕ Create Listing Page
<p align="center"> <img src="./screenshots/create-listing.png" width="800"> </p>

## 🚀 Tech Stack

### **Frontend**

* HTML
* CSS
* Bootstrap
* EJS (Templating)

### **Backend**

* Node.js
* Express.js
* EJS‑mate
* Method‑override

### **Database**

* MongoDB
* Mongoose (ODM)

### **Version Control**

* Git & GitHub

### **Cloud / External Services**

* Cloudinary (Image storage)
* Render (Deployment)

---

## 📦 Packages Used

* **Express.js** – Web framework for routing & middleware
* **Mongoose** – MongoDB object modeling
* **Passport.js, Passport Local, Passport Local Mongoose** – Authentication
* **JWT (optional)** – Token‑based authentication
* **Multer** – File uploads (images)
* **Cloudinary SDK** – Cloud image storage
* **Dotenv** – Environment variable management
* **Connect‑Flash** – Flash messages
* **Connect‑Mongo** – Session storage
* **Cookie‑Parser** – Cookie handling
* **Express‑Session** – User session management
* **Joi** – Data validation
* **EJS‑Mate** – Layout support for EJS
* **Nodemon** – Dev server auto‑reload

---

## ✅ What’s Built So Far

* Full **CRUD operations** for rental property listings
* **MongoDB integration** using Mongoose
* **RESTful Express router** structure
* Dynamic **EJS views** for all pages
* **Image URL handling** with fallback defaults
* **Responsive UI** using Bootstrap
* **User authentication** (Register, Login, Logout)
* **Session management** with Mongo store
* **Flash message support**
* **Single image upload** with Multer + Cloudinary
* **Review system** (add/delete reviews)
* **Detailed hotels  pages**


---

## ⭐ Key Features

### 🔐 **User Features**

* User registration & login
* Profile management
* Session‑based authentication

### 🏡 **Property Features**

* Add new rental property listings
* Edit existing listings
* Delete listings
* View all listings in grid UI
* Detailed listing page with images, price, description

### 📝 **Review System**

* Add reviews (authenticated users only)
* Delete reviews
* Ratings & comments



### 🖼️ **Image Management**

* Upload image via Multer
* Store on Cloudinary
* Default fallback images

---

## 📈 Upcoming Improvements

* **Multiple image uploads** for listings
* **Better error handling** (client + server side)
* **More robust authentication flows**
* **Improved UI effects and animations**
* **Owner‑based authorization** (only owner can edit/delete)
* **Advanced search & filtering** (price, location, category)

---

## 🛠️ Setup Instructions

### **1️⃣ Clone the repo**

```bash
git clone <your-repo-url>
cd your-project-folder
```

### **2️⃣ Install dependencies**

```bash
npm install
```

### **3️⃣ Create a `.env` file**

Add the following variables:

```
MONGO_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
MAPBOX_TOKEN=your_mapbox_token
```



## 📚 Project Structure

```plaintext
📦 Project Root
├── models/               # Mongoose models
├── public/               # Static assets
├── routes/               # Express routing
├── views/                # EJS templates
├── controllers/          # Route logic
├── middleware/           # Custom middleware
├── utils/                # Helpers
├── .env.example          # Sample env variables
├── app.js                # Main server file
└── package.json
```

---

## ⚡ Challenges & Solutions

### 🔸 **Handling image uploads and Cloudinary integration**

✔ Solved with Multer + Cloudinary storage engine

### 🔸 **Managing user sessions across deployments**

✔ Implemented Connect‑Mongo for persistent storage

### 🔸 **Data validation issues**

✔ Added Joi schemas for safe input processing



## 👨‍💻 Author

**Anirudh Akoskar**

Feel free to contribute or raise issues! 🚀

---

## ⭐ If you like this project, consider giving the repo a star!
