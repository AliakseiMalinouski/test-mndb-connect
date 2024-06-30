import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://aleksymalinowski21:T7we1UpmuB6qjqWI@test-cl.ddppmqr.mongodb.net/?appName=test-cl";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    strict: true,
    deprecationErrors: true,
    version: ServerApiVersion.v1,
  },
});

async function connectToMongoDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return client
  }
  catch {
    console.log('e')
  }
}


export default connectToMongoDB;
