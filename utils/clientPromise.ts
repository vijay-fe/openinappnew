import { MongoClient, MongoClientOptions, Db } from 'mongodb';


const options: MongoClientOptions = {};

let client: MongoClient;

export const connectDatabase = async (): Promise<Db> => {
    if (!client) {
        client = new MongoClient(process.env.MONGO_URI as string, options);
        await client.connect();
    }

    return client.db(process.env.MONGO_DB_NAME as string);
};

export const disconnectDatabase = async () => {
    if (client) {
        await client.close();
    }
};
