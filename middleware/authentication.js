
import jwt from "jsonwebtoken"
import userModel from "../DB/model/User.model.js";
import { asyncHandler } from "../src/utils/errorHandling.js";

export const auth = asyncHandler(
    async (req, res, next) => {
        const { authorization } = req.headers;
        console.log({ authorization });
        if (!authorization?.startsWith(process.env.TOKEN_BEARER)) {
            return next(new Error('authorization is required or Invalidn Bearer Key', { cause: 400 }))
        }
        const token = authorization.split(process.env.TOKEN_BEARER)[1];
        console.log({ token });
        if(!token){
            return next(new Error("token is required", { cause: 400 }))
        }
        const decoded = jwt.verify(token, process.env.TOEKN_SIGNATURE)
        console.log({ decoded });
        if (!decoded?.id) {
            return next(new Error("Invalid token", { cause: 400 }))
        }
        const user = await userModel.findById(decoded.id);
        if (!user) {
            return next(new Error("Not register account", { cause: 401 }))
        }
        req.user = user;
        return next();
    }
)

