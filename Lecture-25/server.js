const express = require('express');
const doctorRoutes=require('./routes/doctors.routes.js');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB=require('./config/db.js')




app.use(express.json())
app.use('/', doctorRoutes)

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})