Student Portal Backend

This is a backend project for student portal. It supports user authentication, course management, and discussion threads.

#Folder Structure
- Controllers (Logic for authentication, courses, threads)
  authController.js
  courseController.js
  threadController.js
  
- models (Mongoose models)
  Course.js
  Thread.js
  User.js
  
- routes (Express routes)
  authRoutes.js
  courseRoutes.js
  threadRoutes.js

  
- .env  (Environment variables)
- server.js (Entry point)
- package.json
- package-lock.json
  
#Features

- User registration and login (student, teacher, admin)  
- Course creation and student assignment  
- Thread creation and replies for course discussions  


#Setup Instructions

1. Clone the Repository
   bash- git clone https://github.com/teehhee1/studentbackend-portal.git

2. Navigate into the project folder
   cd studentbackend-portal

3. Install Dependencies
   npm install

4. Set up Environment Variables
  Create a .env file in the root folder

Add the following variables:
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key

5. Run the server
  node server.js

6. Test the API
Once running, open your browser or API client (like Postman).
Visit http://localhost:5000 to check if the server is live
