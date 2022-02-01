import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
  // destructuring my request and accessing method/body from the request
  const { method, body } = req;

  //accessing db instance
  const { db } = await connectToDatabase();
}
