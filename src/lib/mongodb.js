import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URL) {
  throw new Error("Please add MONGODB_URL to your .env file");
}

if (process.env.NODE_ENV === "development") {
  // Reuse the client during development to avoid multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
