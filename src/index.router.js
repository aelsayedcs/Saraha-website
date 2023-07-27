import connectDB from '../DB/connection.js'
import userRouter from './modules/user/user.router.js'
import authRouter from "./modules/auth/auth.router.js"
import { globalErrorHandling } from './utils/errorHandling.js'

const bootstrap = (express,app)=>{
    app.use(express.json())
    app.use("/auth",authRouter)
    app.use("/user",userRouter)
    app.use("*",(req,res)=>res.json({message:"Invalid Routing"}))
    app.use(globalErrorHandling)
    connectDB()
}

export default bootstrap;