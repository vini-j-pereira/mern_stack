const create = (req, res) =>{
    const {name, username, email, password, avatar, background} = req.body;

    if(!name || !username || !email || !password || !avatar || !background) {
        
        return res.status(400).send({msg: "Submit all fields for registration!"});
    }

    

    return res.status(201).send({
        msg: "User created successfully",
        user: {
           name,
           username,
           email,
           avatar,
           background,
        },
    });
};

module.exports = { create };