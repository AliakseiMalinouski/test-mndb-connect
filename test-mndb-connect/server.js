import express from 'express';
import cors from 'cors';
import connectToMongoDB from './dbConnect.js';

const app = express();

let client;
let database;
let collection;

app.use(cors())

app.get('/', async (req, res) => {

    try {
        client = await connectToMongoDB();
        database = client.db("test");
        collection = database.collection("rwst");
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

app.get('/req', async (req, res) => {
    res.json({
        data: 'REQ'
    })
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});

