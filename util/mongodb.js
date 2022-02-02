import { MongoClient } from "mongodb";

// storing uri into a variable
let uri = process.env.MONGODB_URI;
// storing databasename in its own variable
let dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

/**** These are to protect ourselves, if there is no  uri send an error ****/
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}
/**************************************************************************/

/* this is a utility function
 * This fcn will allow us to connect to our database and send/fetch request from the
 * db */
export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // connecting to Monogo client
  // passing the uri to connect to connect to that instance
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // access db through client
  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
