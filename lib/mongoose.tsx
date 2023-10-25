import _mongoose from "mongoose";

const { MONGO_USER, MONGO_PASSWORD, MONGODB_DB } = process.env;

// const MONGODB_URI = process.env.MONGODB_URI;
//const MONGODB_URL = process.env.MONGODB_URL;

const MONGODB_URI: string = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.dz7my.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;

if (!MONGODB_URI)
  throw new Error("Please define the MONGO_URI enviroment variable");

let isConnected = false

export const connectToDB = async () => {
    const options = { bufferCommands: false }
    _mongoose.set('strictQuery', true)
    //console.log('MONGODB_URL:', MONGODB_URL);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return
    }
    try {
        await _mongoose
                .connect(MONGODB_URI || "http://localhost:8000", options)
                .then((mongoose) => mongoose)
        
        isConnected = true
        console.log('MongoDB connected');       

    } catch (error) {
        console.log('Error_connectMongoDB: ', error );
        process.exit();
    }
}
