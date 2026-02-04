🏡 Wanderlust – Airbnb Clone (Full Stack Web App)

A full-stack web application inspired by Airbnb, where users can explore, create, and manage property listings with authentication, authorization, and reviews.

🚀 Tech Stack
Frontend

HTML

CSS

Bootstrap

EJS (Embedded JavaScript Templates)

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

Authentication & Security

Passport.js

Express-session

Other Tools

Multer (image uploads)

Cloudinary (image storage)

Render (deployment)



⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/hafizur/wanderlust-airbnb.git
cd wanderlust-airbnb



2️⃣ Install Dependencies
npm install




3️⃣ Environment Variables

Create a .env file in the root directory and add:

PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
SESSION_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret




⚠️ Make sure MongoDB is running locally or update MONGO_URL with MongoDB Atlas.

4️⃣ Database Setup
Option 1: Local MongoDB
mongod

Option 2: MongoDB Atlas

Create a cluster

Get connection string

Replace MONGO_URL in .env




▶️ How to Run the Application

nodemon app.js


Then open:

http://localhost:8080


live preview: https://wanderlust-airbnb-tdmh.onrender.com/
github: https://github.com/hafizurrahaman31/wanderlust-airbnb
