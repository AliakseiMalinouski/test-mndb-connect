import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb+srv://order-me:1hXbgCKgMHhMSF6f@order-me-cluster.u9x5x.mongodb.net/?retryWrites=true&w=majority&appName=order-me-cluster';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url);

app.get('/', async (req, res) => {
    try {
        const cl = await client.connect();
        const database = cl.db('order-me');
        const collection = database.collection('products');
        console.log(collection)
        console.log("Successfully connected to Atlas");
        const products = await collection.findOne({}).then((result) => result);
        return res.json(products);
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// app.post('/add', async (req, res) => {
//     try {
//         const newData = req.body;
//         const preparedData = JSON.parse(newData)
//         const result = await collection.insertOne(preparedData);
//         return res.json(result);
//     }
//     catch {
//         console.log('error adding item')
//     }
// });

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});

