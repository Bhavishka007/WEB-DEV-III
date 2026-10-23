// use("HospitalDB")

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
// db.Doctors.insertMany([
//     {
//         Name: "Dr. Rathi",
//         Specialist: "bones",
//         Age: "45",
//         Experience: "9 years",
//         Salary: "3-4 lakh",
//     },
//     {
//         Name: "Dr. Astha",
//         Specialist: "brain",
//         Age: "51",
//         Experience: "15 years",
//         Salary: "5-6 lakh",
//     },

// ])



use("HospitalDB")
 
db.doctors.find()

// //create operation
// ///1. insert   2. insertOne  3. insertMany
// db.doctors.insert({
//     name:"Dr. Abhijeet",
//     specialization:"Cardiologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Cardiology",
// })

// db.doctors.insertOne({
//     name:"Dr. deepak",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology",
// })

// db.doctors.insertMany([
//     {
//         name:"Dr. Alex",
//         specialization:"Cardiologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Cardiology",
//     },
//     {
//         name:"Dr. John",
//         specialization:"Neurologist",
//         experience:10,
//         fees:500,
//         salary:1000000,
//         department:"Neurology",
//     }
// ])

//read opt
//1.find()  2. findOne()  
// db.doctors.find()
// db.doctors.findOne()
// db.doctors.find({specialization:"Cardiologist"})
// db.doctors.find({name:"Dr.Smith"})

//update operation
//1. updateOne()  2. updateMany()
// db.doctors.updateOne({name:"Dr. Abhijeet"},  query part
// {$set:{fees:600,experience:12 }})
// db.doctors.updateMany({specialization:"Cardiologist"},{$set:{fees:700}})

//delete operation
//1. deleteOne()  2. deleteMany()
// db.doctors.deleteOne({name:"Dr. Abhijeet"})
// db.doctors.deleteMany({specialization:"Cardiologist"})

// db.doctors.find(
//     {
//         department:{
//             $eq:"Cardiology"
//         }
//     }
// )

db.doctors.find().skip(2).limit(2)