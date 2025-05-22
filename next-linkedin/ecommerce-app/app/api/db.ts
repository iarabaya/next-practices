import { MongoClient, Db, ServerApiVersion } from "mongodb";

//DATABASE  CONNECTION LOGIC

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.DATABASE_URL || "";

  //Create a MongoClient with a MongoClientOptions object to  set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db("ecommerce-app");

  return { client, db: client.db() };

  // try {
  //   //Connect the client to the server (optional starting v4.7)
  //   await client.connect();
  //   //Send ping to confirm a successful connection
  //   await client.db("admin").command({ ping: 1 });
  //   console.log(
  //     "Pinged your deployment. You successfully connected to MongoDB!"
  //   );
  // } finally {
  //   //Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}
