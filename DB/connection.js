import mongoose from "mongoose";

const connectDB = async () => {
    return await mongoose.connect(process.env.DB_URL).then(res => {
        console.log("DB connected");
    }).catch(err => {
        console.log(`Fail to connect..... ${err}`);
    })
}


export default connectDB