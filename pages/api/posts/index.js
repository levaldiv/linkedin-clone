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
      /* go inside of the collection called "posts", find all the posts,
       * sort those posts in a desc way and convert them to an array (which will
       * return the whole array of posts) */
      const posts = await db
        .collection("posts")
        .find()
        .sort({ timestamp: -1 })
        .toArray();

      // status code
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /* To send a post to the database, we would use a POST request
   * This fcn will store the post inside of the database */
  if (method === "POST") {
    try {
      /* fetching all our posts
       * Access the collection, create a collection called "posts"
       * Insert one document with the following items (passing in body with spread operator to combine whatever the body contains)
       * Combine body + timestamp (not actually sending the timestamp so use new ts) */
      const post = await db
        .collection("posts")
        // using this so i can get the posts in a particular order (desc order)
        .insertOne({ ...body, timestamp: new Timestamp() });

      // status code
      /* Returning the json of the post with a status */
      res.status(201).json(post);

      // However, if there is ANY sort of error, do the follownig
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
