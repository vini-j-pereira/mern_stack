import mongoose from 'mongoose';

const  connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose.connect(`mongodb+srv://viniciusjosepereira:YeX3VwJMujesfVev@cluster0.8ipiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((error) => console.log(error));
};

export default connectDatabase;