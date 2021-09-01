const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require("colors")

const multer  = require('multer')
const { exec }= require('child_process');
const upload = multer({ dest: 'uploads/' })
var formidable = require('formidable');
var util = require('util');


// importing routes
const codex = require("./codex")

// For Using Imp Environment Variables
dotenv.config({path: "./config/config.env"})

// Importing The Function To Connect The MongoDB database
const connectDB = require("./config/db_conn")
// Connecting To MongoDB
connectDB()

// Creating The Express App
const app = express();
app.use(cors());

// New Way of Body Parser Middleware
app.use(express.json());
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

// Endpoints

// Test End Point
app.get("/",(req,res,next)=>{
    console.log("Backend Api is Running")
})
app.use('/code',codex);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});