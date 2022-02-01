import { Timestamp } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
  // destructuring my request and accessing method/body from the request
  const { method, body } = req;

  //accessing db instance
  const { db } = await connectToDatabase();

  //   Use a GET request to fetch the data from the database
  if (method === "GET") {
    try {
      //   fetching all our posts
      const posts = await db.collection;
    } catch (error) {}
  }

  //   To send a post to the database, we would use a POST request
  if (method === "POST") {
    try {
      /* fetching all our posts
       * Access the collection, create a collection called "posts"
       * Insert one document (passing in body with spread operator to combine whatever the body contains)
       * Combine body + timestamp (not actually sending the timestamp so use new ts) */
      const post = await db
        .collection("posts")
        .insertOne({ ...body, timestamp: new Timestamp() });
    } catch (error) {}
  }
}
