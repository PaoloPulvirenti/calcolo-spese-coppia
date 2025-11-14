import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
let client;

export default async function handler(req, res) {
  if (!client) client = new MongoClient(uri);
  await client.connect();
  const db = client.db("myproject_db");
  const notes = db.collection("notes");

  if (req.method === "GET") {
    const all = await notes.find().toArray();
    return res.status(200).json(all);
  }

  if (req.method === "POST") {
    const body = req.body;
    await notes.insertOne(body);
    return res.status(201).json(body);
  }

  res.status(405).json({error:"Method not allowed"});
}
