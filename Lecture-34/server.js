const jwt=require(`jsonwebtoken`);
const data={
    _id:"123456",
}
const token=jwt.sign(data,"assasdfghjklqwertyui",{expiresIn:"1h"});
console.log(token);


// const generatedToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTYiLCJpYXQiOjE3OTQ4MDY2ODgsImV4cCI6MTc5NDgxMDI4OH0.N7Ci3I9b9OouPzBqsL4BsyYfZrg7lvgNXni0ywPiCT0"

const result=jwt.verify(token,"assasdfghjklqwertyui");
console.log(result);