import News from "../models/News";

const createService = (body) => News.create(body);

const findAllService = () => News.find();

export default{
    createService,
    findAllService
};