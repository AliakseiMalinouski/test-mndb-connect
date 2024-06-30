import express from 'express';
import cors from 'cors';
import connectToMongoDB from './dbConnect.js';

const app = express();

let client; // Define client variable outside try block

app.get(cors())

app.get('/', async (req, res) => {

    try {
        client = await connectToMongoDB(); // Assign client after successful connection
        const database = client.db("test-cli");
        const collection = database.collection("rwst");
        const result = await collection.find({}).toArray();
        res.json(result);
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

app.get('/req', (req, res) => {
    res.json({
        data: []
    })
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});

