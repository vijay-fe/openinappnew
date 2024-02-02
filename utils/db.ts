import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: process.env.MONGO_DB_NAME as string,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.log(error.message);
        process.exit(1);
    }
}