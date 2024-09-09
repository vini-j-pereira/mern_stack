import mongoose from "mongoose";
import userService from "../services/user.service.js";

export const validId = (req, res, next) => {
    try{
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ msg: `Invalid ID` });
        }
        next();

    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

export const validUser = async (req, res, next) => {
    try{
        const id = req.params.id;

        const user = await userService.findByIdService(id);

        if(!user) {
            return res.status(400).send({ msg: `User not found`});
        }

        req.id = id;
        req.user = user;
        
        next();
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

