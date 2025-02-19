# E-Commerce Application: Backend Web Development Project

### **Milestone 1: Project Overview**

**Brief Overview:**
This project involves developing a fully functional e-commerce platform utilizing the MERN stack — MongoDB, Express, React, and Node.js. The application will be built using React's Create React App (CRA) for the front-end, MongoDB as the database solution, and Node.js with Express to handle the back-end server operations.

The project will be split into two main areas: **Frontend** (client-side) and **Backend** (server-side) development. 

- **Frontend:** We will be creating various pages for user interaction, including:
  - **Login Page**
  - **Sign Up Page**
  - **Forgot Password Page**
  - **Home Page**
  - **Product Display Page**
  - **Cart Page**
  - **Address Page**
  - **Payment Page**
  - **Order Confirmation Page**
  - **Order History Page**
  - **Help Page**
  - **Error Page**
  - Detailed Product Pages

- **Backend:** The server will interact with MongoDB, a NoSQL database, to handle data management. We will be using the Mongoose library to interact with the database and define schemas for data consistency. To manage communication between the front-end and the back-end, we will implement APIs that allow for CRUD operations (Create, Read, Update, Delete) using HTTP methods like `POST`, `GET`, `PUT`, `PATCH`, and `DELETE`.

We’ll integrate **bcrypt** for password hashing to ensure user data security, and the entire project will follow best practices for backend structure, focusing on scalability and maintainability.

---

### **Milestone 2: Frontend Development (Login Page)**

For this milestone, we successfully created the **Login Page** using React's Create React App (CRA). To improve the user interface and design, we will be updating the layout with **Tailwind CSS** for styling and incorporate **React-Icons** for intuitive icons. Tailwind CSS will help us streamline the design process with its utility-first classes, making the UI responsive and visually appealing.

The Login Page will include fields for the user's email and password, and will handle form validation, state management, and error handling for incorrect login attempts. React Icons will be utilized for visual appeal and ease of use, enhancing the overall experience.

---

### **Milestone 3: Backend Structure and Initial Setup**

At this stage, we’ve laid the foundation for the backend by setting up the directory structure for the project. The backend is structured as follows:

- **`src/` Directory:** Contains all source code files for the server.
  - **`config/`**: Stores environment configuration files like `.env` for MongoDB URL and the server port.
  - **`controllers/`**: Defines functions to handle incoming requests for various routes.
  - **`database/`**: Contains the MongoDB connection logic in `db.js`.
  - **`middleware/`**: Houses custom middleware functions such as `error.js` for centralized error handling.
  - **`model/`**: Contains Mongoose models for the database schema.
  - **`routers/`**: Defines route handlers for different API endpoints.
  - **`utils/`**: Stores utility functions, including the `ErrorHandler.js` to manage application-level errors.

In the **`index.js`** file, we imported Express, initialized the app, and set up basic routing and server listening. We can now handle HTTP requests through `app.get` and set the server to listen for incoming requests on the specified port.

### **Milestone 4: Backend Structure and Initial Setup**
creating user model, user controller and Multer support


Milestone 6
: Backend Structure and Initial Setup** Password Encryption and User Data Storage

Password Hashing:

Implement bcrypt to hash the user's password during the signup process. Ensure that the hashed password is stored in the database instead of the plaintext version to enhance security. User Data Storage:

Save all relevant user information (e.g., name, email, etc.) in the database. Maintain the integrity and confidentiality of the password by ensuring it remains encrypted throughout the process.

Milestone 7
Create Login Endpoint:

Accept user credentials (email/username and password). Retrieve the corresponding user from the database. Validate Password:

Use bcrypt to hash the entered password. Compare it with the stored hashed password for authentication.

Milestone 8
In this milestone we created two components called Home.jsx and productcard.jsx. product card.jsx is the template used in home.jsx to map out all the products and display them. We also added routes to the home.jsx to display it when the page loads. Based on the number of products the products are mapped and displayed.



## Milestone 9: Create Product Form

### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to create a form that collects all the details of a product.
- Understand how to take multiple images as input and handle them properly.

### Why Create a Product Form?

In this milestone, we will create a form that allows users to input all necessary product details. These details will be stored in a database and displayed on the product homepage created in the previous milestone.

### Steps for Milestone 9 📝

1. **Create the Product Form**: 
   - Design and implement a form that collects all product-related information.
   - Ensure the form is user-friendly and validates the input fields.

2. **Handle Multiple Product Images**:
   - Enable the form to accept multiple images as input.
   - Implement proper handling and storage of these images.

This milestone is a crucial step in building a functional product listing feature. Good luck! 🚀

---

## Milestone 10: Product Schema & API Endpoint

### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write a product schema.
- Learn how to create an endpoint to validate and store product details in MongoDB.

### Product Schema

- Define the structure of product data (e.g., name, description, price, image URL) using Mongoose.
- Ensure each field has proper validation (e.g., required fields, correct data types).

### Endpoint Creation

- Build a **POST** endpoint to receive product data.
- Validate and save the product details to MongoDB.

### Why Validation?

Validation ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

This milestone is essential for backend development and securing data consistency in your project. Keep going! 🚀

# Milestone 11: Fetch & Display Product Data

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint that extracts and sends data from MongoDB.
- Understand how to receive data on the frontend.
- Dynamically display data using the product card created earlier.

## Steps for Milestone 11 📝

1. **Write an API Endpoint**:
   - Create an endpoint that retrieves all product data from MongoDB and sends it to the frontend.

2. **Fetch Data in Frontend**:
   - Write a function in the frontend to fetch all product data from the backend.

3. **Display Data Dynamically**:
   - Pass the fetched data to the product card component to display it dynamically.


# E-commerce Project - Milestones 12-16

This document outlines the progress and key learnings achieved during milestones 12-16 of the E-commerce project.

## Milestone 12: Data Fetching and Display

* **Learning Goals:**
    * Implement an endpoint to filter and retrieve product data from MongoDB based on user email.
    * Develop frontend logic to receive and dynamically display fetched product data using the previously created product card component.

* **Key Achievements:**
    * Successfully implemented an endpoint in the backend to filter products based on user email.
    * Integrated the endpoint with the frontend, enabling the dynamic display of filtered products.
    * Enhanced the product card component for better user experience.

* **Challenges:**
    * [Describe any challenges encountered during implementation, e.g., data formatting issues, performance bottlenecks]
    * [Explain how these challenges were addressed]

## Milestone 13: Data Updating

* **Learning Goals:**
    * Implement an endpoint to update existing product data in MongoDB.
    * Develop frontend functionality to auto-fill forms with existing data and provide options for editing.

* **Key Achievements:**
    * Created an endpoint to handle product updates in the backend.
    * Implemented frontend logic to pre-populate forms with existing product data.
    * Enabled users to edit product information and submit updates.

* **Challenges:**
    * [Describe any challenges encountered during implementation, e.g., handling data validation, preventing overwriting]
    * [Explain how these challenges were addressed]

## Milestone 14: Data Deletion

* **Learning Goals:**
    * Implement an endpoint to delete a specific product from MongoDB based on its ID.
    * Integrate frontend logic to trigger product deletion requests.

* **Key Achievements:**
    * Created an endpoint to delete products from the database.
    * Implemented frontend functionality to initiate product deletion requests.
    * Added appropriate safeguards and confirmations before deleting products.

* **Challenges:**
    * [Describe any challenges encountered during implementation, e.g., handling accidental deletions, maintaining data integrity]
    * [Explain how these challenges were addressed]

## Milestone 15: Navigation Component

* **Learning Goals:**
    * Create a reusable navigation component for consistent user experience across multiple pages.

* **Key Achievements:**
    * Developed a reusable navigation component.
    * Successfully integrated the navigation component into multiple pages within the application.

* **Challenges:**
    * [Describe any challenges encountered during implementation, e.g., handling responsive design, ensuring cross-browser compatibility]
    * [Explain how these challenges were addressed]

## Milestone 16: Product Detail Page

* **Learning Goals:**
    * Create a dedicated page to display individual product details.
    * Implement functionality to add products to the cart with quantity selection.

* **Key Achievements:**
    * Developed a product detail page with comprehensive information.
    * Implemented features for selecting product quantity and adding items to the cart.

* **Challenges:**
    * [Describe any challenges encountered during implementation, e.g., handling inventory updates, ensuring smooth cart interactions]
    * [Explain how these challenges were addressed]

**Overall:**

* [Summarize the overall progress and key learnings across all milestones. 
   Mention any significant achievements or unexpected outcomes.]

**Future Plans:**

* [Outline the next steps for the E-commerce project, such as:
    * Implementing cart functionality
    * Integrating payment gateways
    * Enhancing user authentication and authorization]

**Note:**

* This is a basic template. Please replace the bracketed sections with your specific details and accomplishments.
* Use Markdown syntax to format the README.md file for better readability..




