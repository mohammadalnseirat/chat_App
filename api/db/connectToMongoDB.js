import mongoose from "mongoose";


const connectToMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB:', connect.connection.host);
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        process.exit(1);
        
    }
}

export default connectToMongoDB