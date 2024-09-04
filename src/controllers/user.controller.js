const userService = require('../services/user.service');

const create = async (req, res) =>{
    const {name, username, email, password, avatar, background} = req.body;

    if(!name || !username || !email || !password || !avatar || !background) {
        
        return res.status(400).send({msg: "Submit all fields for registration!"});
    }

    const user = await userService.create(req.body);

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

module.exports = { create };