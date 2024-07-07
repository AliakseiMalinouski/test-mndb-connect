import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://aleksymalinowski21:iOmbP0KC1eQC1ASX@cluster121.s1vinte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster121";
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


// iOmbP0KC1eQC1ASX
//const uri = "mongodb+srv://aleksymalinowski21:iOmbP0KC1eQC1ASX@cluster121.s1vinte.mongodb.net/?appName=Cluster121";
