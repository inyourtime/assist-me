import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGO_URL, {});
export const db = client.db(process.env.MONGO_DATABASE);
