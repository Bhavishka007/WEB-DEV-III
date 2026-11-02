const express = require('express');

const doctorRoutes=require('./routes/doctors.routes.js');
const app = express();
const connectDB=require('./config/db.js')
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json())
app.use('/', doctorRoutes)

connectDB()

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})