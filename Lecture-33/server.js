const bcrypt=require('bcrypt');

const password='Bhavishka@123';
const password2='Bhavishka@123';
const salt=bcrypt.genSaltSync(10);
console.log(salt);
const hash=bcrypt.hashSync(password,salt).then((hash)=>{
    console.log(hash);})
console.log(hash);