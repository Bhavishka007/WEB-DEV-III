const express = require('express');
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

const employees = [
  { id: 1, name: 'John Doe', salary:1000000, position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', salary:800000, position: 'Product Manager' },
  { id: 3, name: 'Mike Johnson', salary:700000, position: 'UX Designer' },
  { id: 4, name: 'Emily Davis', salary:900000, position: 'Data Scientist' },
  { id: 5, name: 'David Wilson', salary:750000, position: 'DevOps Engineer' }
];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const id=req.params.id;
  const employee=employees.find(emp=>emp.id==id);
  if(!employee){
    res.status(404).json({message:"Employee not found"});
  }
  res.json(employee);
});

app.post("/employees",(req,res)=>{
    const employee=req.body;
    employee.push({empId:employees.length+1,...employee}
    );
    res.json({success:true,employee});
})

//update
app.put("/employees/:id",(req,res)=>{
    const id=res.params.id;
    const employee=res.body;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false,message:"employee not found"});
    }
    result.name=employee.name;
    result.salary=employee.salary;
    result.department=employee.department;
    res.json({success:true,employee});

})

//delete
app.put("/employees/:id",(req,res)=>{
    const id=res.params.id;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false,message:"employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,employee});
})

app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})