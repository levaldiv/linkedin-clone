import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

// request and a response
export default async function handler(req, res) {
  const {
    method,
    // retreive the id from the post comp to see what post to delete
    query: { id },
  } = req;

  // connecting to the data base
  const { db } = await connectToDatabase();

  if (method === "DELETE") {
    try {
      // go into posts collection, send in an id and makre sure its being mapped throug this new object id
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      //   success
      res.status(200).json({ message: "The post has been deleted" });
    } catch (error) {
      // failed
      res.status(500).json(error);
    }
  }
}
