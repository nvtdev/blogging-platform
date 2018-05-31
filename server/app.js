// server/app.js

/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
const dbConfig = require("./config/database");

// DB Connection
mongoose.connect(dbConfig);
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + dbConfig);
});
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

// Cloudinary Connection
cloudinary.config({
    cloud_name: 'nvtdev',
    api_key: '972926925846743',
    api_secret: 'qWeuDHbmKjmgw5NnHGvI-IDTmN4'
});

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});