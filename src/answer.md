Web Application Fundamentals
------------------------------------
Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with in their browser. Its main goal is to provide a smooth, responsive, and user-friendly experience.

1. User Interface

The frontend is responsible for designing and displaying the user interface.
This includes layouts, buttons, forms, text, images, and colors. A well-designed frontend makes the application visually appealing and easy to understand for users.

2. User Interaction

Frontend handles all user actions such as clicking buttons, submitting forms, scrolling pages, and navigating between screens.
It validates user inputs (like checking empty fields or email format) and gives instant feedback without waiting for the server.

3. Communication with Backend

Frontend communicates with the backend using HTTP requests (GET, POST, PUT, DELETE).
It sends user data to the backend and receives responses such as JSON data, error messages, or success confirmations, which are then displayed to the user

Q2. Role of Backend (BE)

The Backend (BE) works behind the scenes and manages the core functionality of a web application. It ensures that data is processed securely and correctly.

1. Server-Side Processing

Backend handles requests sent by the frontend and applies logic to process them.
For example, calculating totals, checking conditions, or performing operations before sending a response back to the client.

2. Database Handling

The backend connects to databases to store, retrieve, update, and delete data.
User details, orders, payments, and application records are managed securely on the server side.

3. Security and Authentication

Backend is responsible for user authentication and authorization.
It verifies login credentials, manages sessions or tokens, protects sensitive data, and prevents unauthorized access to resources.

Q3. Business Logic

Business Logic refers to the rules and conditions that define how a business operates within a software application.
It decides what should happen when a user performs a specific action.
Business logic is usually implemented in the backend but can also exist partially on the frontend for validation.

Real-World Examples

E-commerce Discount System
If a user’s cart value exceeds ₹5000, a 10% discount is applied.
This rule is business logic because it reflects a business decision.

Banking Application
A user cannot withdraw more money than their available balance.
This rule ensures financial correctness and safety.

Food Delivery App
Orders cannot be placed if the restaurant is closed or if delivery is not available in the user’s area.

Q4. Client–Server Model

The Client–Server Model is a communication model where tasks are divided between service providers (servers) and service requesters (clients).

Who is the Client?

The client is the user’s device or application, usually a web browser or mobile app.
It sends requests and displays responses.

Who is the Server?

The server is a system that receives client requests, processes them, and sends back responses.
It manages data, logic, and security.

How Communication Happens

The client sends an HTTP request to the server.
The server processes the request and returns a response, usually in JSON or HTML format.

Q5. Three-Tier Architecture

Three-Tier Architecture divides a web application into three separate layers.
Each layer has a specific responsibility, making the application easier to maintain and scale.
1. Presentation Layer

This is the frontend layer.
It includes UI elements and handles user interactions.

2. Application (Business) Layer

This layer contains business logic and server-side processing.
It acts as a bridge between frontend and database.

3. Data Layer

This layer manages data storage.
It includes databases and handles data queries and persistence.

Why This Architecture Is Used

Improves scalability

Makes maintenance easier

Enhances security

Allows independent development of each layer

Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its speed, flexibility, and strong ecosystem.
. Performance

JavaScript uses an event-driven, non-blocking model, which makes it efficient for handling multiple requests at the same time.
This improves performance for real-time applications.

2. Ecosystem

JavaScript has a massive ecosystem with thousands of open-source libraries and tools.
Developers can easily build scalable applications without reinventing the wheel.

3. Popular Backend Frameworks

Some widely used JavaScript backend frameworks are:

Express.js

NestJS

Fastify

Using JavaScript on both frontend and backend also allows developers to share knowledge and sometimes code, reducing development time.