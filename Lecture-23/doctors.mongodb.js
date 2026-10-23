use("HospitalDB")

// db.doctors.insertMany([{
//     name:"Dr. Abhijeet",
//     specialization:"Dermatologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Dermatology",
// },
// {
//     name:"Dr. deepak",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology"},
// {
//     name:"Dr. Alex",
//     specialization:"Cardiologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Cardiology",
// },
// {
//     name:"Dr. John",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology",
// },
// {
//     name:"Dr. Smith",
//     specialization:"Cardiologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Cardiology",
// },
// {
//     name:"Dr. David",
//     specialization:"ophthalmologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Ophthalmology",
// },
// {
//     name:"Dr. James",
//     specialization:"gynaecologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Gynaecology",
// },
// {
//     name:"Dr. Robert",
//     specialization:"Neurologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Neurology",
// },
// {
//     name:"Dr. Michael",
//     specialization:"Ophthalmologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Ophthalmology",
// },
// {
//     name:"Dr. William",
//     specialization:"Dermatologist",
//     experience:10,
//     fees:500,
//     salary:1000000,
//     department:"Dermatology",
// }])

db.doctors.aggregate([
    {
        $match:{
            department:"Ophthalmology"
        }
    },
    {
        $project:{
            name:1,
            fees:1,
            salary:1,
            experience:1,
            _id:0
        }
    }
])