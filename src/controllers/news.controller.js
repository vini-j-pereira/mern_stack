import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {

    try {
        const { title, text, banner } = req.body;

        if(!title || !text || !banner) {
            res.status(400).send({ msg: `Submit all fields  for registration`,});
        }

        await createService({
            title,
            text,
            banner,
            user: { _id: "66e10cddb46f7e4f01ec85f0"},
        });

    res.send(201);

    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
    
};

const findAll = async (req, res) => {
    const news = await findAllService();

    if(news.length === 0) {
        return res.status(400).send({ msg: `There are no registered news`, });
    }

    res.send(news);
};

export { create, findAll };