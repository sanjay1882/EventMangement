1. Backend (Backend/package.json, Backend/server.js)
Technology Stack: The backend relies on Node.js with the Express.js framework.

Dependencies: Key dependencies include express, mongoose (for MongoDB object modeling), cors (for cross-origin requests), body-parser, dotenv, and importantly, qrcode for generating QR codes.

Database: It connects to a MongoDB database named events hosted locally at mongodb://localhost:27017.

Data Model: A Booking model is defined with a Mongoose schema containing the attendee's name, email, the booked event, and a unique bookingId.

API Endpoint: A central POST endpoint (/book-event) handles the booking process.

It dynamically generates a unique bookingId prefixed with "CROWD".

It generates a base64 encoded QR Code using the qrcode library, embedding the Booking ID, Event, and Name into the image data.

The complete booking details, including the generated qrCode image data, are saved to the MongoDB Booking collection.

Server Details: The server runs on port 5000.

2. Authentication (Login/firebaseauth.js)
Service: User authentication is implemented using Firebase Authentication.

Methods:

Email/Password: Supports standard sign-up (createUserWithEmailAndPassword) and sign-in (signInWithEmailAndPassword).

Google Sign-In: Integrates Google sign-in using signInWithPopup.

User Data: Upon successful sign-up, user profile data (e.g., email, firstName, lastName) is stored in a Firestore database under a users collection, indexed by the Firebase User ID (user.uid).

Flow: Successful authentication redirects the user to the main frontend page (../FrontEnd/index.html).

3. Frontend (FrontEnd/index.html)
Content: The main page is titled "CrowdCard-The Event Managing Platform".

Navigation: The header contains links for Home, Events, Locations, and a toggleable Login/Logout link, plus a button to "View Tickets".

Events Display: The page showcases upcoming events with details and "Book Now" links, passing the event title and date as URL parameters to a dedicated booking page (BookinPage.html?event=...&date=...).

Design Elements: Includes sections highlighting different event categories ("Marriage", "Festival", "Propsals") and a slider component for featured events.

Technology Stack Mentioned: The page explicitly lists the technologies used in development: HTML, JavaScript, Node.js, Firebase, and MongoDB.
