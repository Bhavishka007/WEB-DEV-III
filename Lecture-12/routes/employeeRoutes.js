const express=require("express");
const {
    getEmployees,
    getEmployeesById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}=require("../controller/empolyeeController.js");
const router=express.Router()


//Read Operation
router.get("/",getEmployees)
//employee get by their id
router.get("/:id",getEmployeesById)
//Create
router.post("/",addEmployee)
//update
router.put("/:id",updateEmployee)
//delete
router.delete("/:id",deleteEmployee)

module.exports=router