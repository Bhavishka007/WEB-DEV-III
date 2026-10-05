use("HospitalDB")

//db.Doctors.find()

//create operation
//1. insert method   2. insertOne    3. insertMany
//1.
// db.Doctors.insert({
//     Name:"Dr. Ram",
//     Specialist: "eyes",
//     Age:"45",
//     Experience:"9 years",
//     Salary:"3-4 lakh",
// })

// 2.
// db.Doctors.insertOne({
//     Name:"Dr. Sita",
// })


// 3.
db.Doctors.insertMany([
    {
        Name: "Dr. Rathi",
        Specialist: "bones",
        Age: "45",
        Experience: "9 years",
        Salary: "3-4 lakh",
    },
    {
        Name: "Dr. Astha",
        Specialist: "brain",
        Age: "51",
        Experience: "15 years",
        Salary: "5-6 lakh",
    },

])