import mongoose from "mongoose";

 export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://pavan:pavan123@cluster0.pnbvvtr.mongodb.net/food-del')
    .then(()=>console.log('DB connected'));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.