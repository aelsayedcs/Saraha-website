import userModel from '../../../../DB/model/User.model.js'
import jwt from "jsonwebtoken";
import { asyncHandler } from "../../../utils/errorHandling.js"

export const getUsers = asyncHandler(
    async (req, res, next) => {

        const users = await userModel.findById(req.user._id);

        return res.json({ message: "Done", user: users })
    }
)