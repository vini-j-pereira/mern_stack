const userService = require('../services/user.service');
const  mongoose = require('mongoose');

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if(!name || !username || !email || !password || !avatar || !background) {
        
        return res.status(400).send({msg: "Submit all fields for registration!"});
    }

    const user = await userService.createService(req.body);

    if(!user) {
        return res.status(400).send({ msg: "Error creating User registration"});
    }

    return res.status(201).send({
        msg: "User created successfully",
        user: {
            id: user._id,
           name,
           username,
           email,
           avatar,
           background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if(users.length === 0) {
        return res.status(400).send({ msg: `There are no registered users`});
    }

    res.send(users);
};

const findByid = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ msg: `Invalid ID` });
    }

    const user = await userService.findByIdService(id);

    if(!user) {
        return res.status(400).send({ msg: `User not found`});
    }

    return res.send(user);
}

module.exports = { create, findAll, findByid };