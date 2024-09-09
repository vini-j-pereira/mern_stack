import userService from "../services/user.service.js";

const create = async (req, res) => {
    try{
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
        })

    } catch (err) {
        res.status(500).send({ mgs: err.message});
    }
    
};

const findAll = async (req, res) => {
    try{
        const users = await userService.findAllService();

        if(users.length === 0) {
            return res.status(400).send({ msg: `There are no registered users`});
        }

        res.send(users);
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

const findByid = async (req, res) => {
    try{
        const user = req.user; // User esta sendo chamado no global.middlewares
        return res.send(user);
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

const update = async (req, res) => {
    try{
        const {name, username, email, password, avatar, background} = req.body;

        if(!name && !username && !email && !password && !avatar && !background) {
            return res.status(400).send({msg: "Submit at least one field for update" });
        }

        const { id, user } = req; // Parametros estão sendo chamado no global.middlewares

        await userService.updateSercive(
            id,
            name, 
            username, 
            email, 
            password, 
            avatar, 
            background
        );
        res.send({ msg: `User successfully updated!`});

    } catch (err) {
        return res.status(500).send({ msg: err.message});
    }

};

export default { create, findAll, findByid, update };