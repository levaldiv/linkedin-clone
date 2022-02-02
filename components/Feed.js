import { useEffect } from "react";
import Input from "./Input";

function Feed() {
  // fetching posts from database
  useEffect(() => {
    const fetchPost = async () => {
      // send our options
      const response = await fetch("/api/posts/", {
        // retrieve back the posts
        method: "GET",
        // retrieve the posts in json format
        headers: { "Content-Type": "application/json" },
      });

      /* Recieve back the data
       * Sending a response back from the backend (sneding a
       * response back to the client from the backend)
       * */
      const responseData = await response.json();
    };
  }, []);

  return (
    <div className="space-x-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
    </div>
  );
}

export default Feed;
