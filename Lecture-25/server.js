const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./model/doctors.model.js');
const app = express();
const port = 3000;

app.use(express.json())
//read
app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();    
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

//get doctors by id


//create operation



//update  


mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})