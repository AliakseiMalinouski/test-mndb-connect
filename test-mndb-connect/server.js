import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToMongoDB from './dbConnect.js';

const app = express();

let client;
let database;
let collection;

app.use(cors());
app.use(bodyParser.json());

const initClient = async () => {
    client = await connectToMongoDB();
    database = client.db("small_db");
    collection = database.collection("small");
}

initClient();

app.get('/', async (req, res) => {
    try {
        const result = await collection.find({}).toArray();
        return res.json(result);
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    finally {
        if (client) {
            await client.close();
        }
    }
});

app.post('/add', async (req, res) => {
    try {
        const newData = req.body;
        const preparedData = JSON.parse(newData)
        const result = await collection.insertOne(preparedData);
        return res.json(result);
    }
    catch {
        console.log('error adding item')
    }
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});

