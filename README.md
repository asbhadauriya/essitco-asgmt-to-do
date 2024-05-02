
Esscito-assgmt-to-do

This project consists of a client-side application developed using Next.js and a server-side application developed using Node.js.

Setup
Clone the repository:
bash
git clone https://github.com/asbhadauriya/essitco-asgmt-to-do.git

Navigate to the client and server directories and install dependencies:
bash
cd client
npm install

cd ../server
npm install
Configuration
Client
Create a .env file in the client directory with the following environment variables:
NEXT_PUBLIC_LIVE_API_URL='http://localhost:3008'
Server
Create a .env file in the server directory with the following environment variables:

makefile
PORT=3000
VERIFYKEY=verifykeydummy
OTPKEY=otpkeydummy
JWTKEY=secretkey
MONGOURI=mongodb+srv://akshay:akshay@cluster0.ye6gzxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
Running the Applications
Client (Next.js)
To start the client application, run the following command in the client directory:

bash
npm run dev
The client application will start and be accessible at http://localhost:3000.

Server (Node.js)
To start the server application, run the following command in the server directory:

bash
npm start
The server application will start and be accessible at http://localhost:3008. or port you define in .env

Contributing
Contributions are welcome! Please create a pull request or open an issue if you encounter any problems or have suggestions for improvement.
