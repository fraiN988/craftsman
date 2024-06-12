Craftsman Directory
Craftsman Directory is a web application that allows users to browse a list of craftsmen, register as a new user, and log in to access additional features.

Features
Browse Craftsmen: Users can view a list of craftsmen with details such as name, specialization, service, city, and rating.

Register: New users can register by providing a username and password.

Login: Registered users can log in using their username and password to access additional features.

Admin Dashboard: Admin users have access to an admin dashboard where they can manage craftsmen, including adding, updating, and removing craftsmen from the directory.

Technologies Used
Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB with Mongoose ODM
Authentication: JSON Web Tokens (JWT)
Styling: CSS

Getting Started

Prerequisites
Node.js installed on your local machine
MongoDB installed locally or access to a MongoDB Atlas cluster
An internet browser

Installation

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd craftsman
Install dependencies for both the client and server:

cd client
npm install

cd ../server
npm install

Set up environment variables:

Create a .env file in the server directory.
Define the following variables in the .env file:
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

Start the server:

cd server
npm start

Start the client:

cd client
npm start

Usage
Browse craftsmen by navigating to the homepage.
Register as a new user to access additional features.
Log in with your registered username and password.
Admin users can access the admin dashboard by navigating to /admin.
From the admin dashboard, admin users can manage craftsmen by adding, updating, and removing them.

P.s I had some hardware issues so i had to redo most of this, so i haven't tested it too thoroughly.
