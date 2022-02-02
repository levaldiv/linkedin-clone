import { useEffect, useState } from "react";
import Input from "./Input";

function Feed() {
  const [realtimePosts, setRealtimePosts] = useState([]);

  // fetching posts from database
  useEffect(() => {
    const fetchPosts = async () => {
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
      /* set whatever I get back from the response data and set the realtimePost with that
      response data */
      setRealtimePosts(responseData);
    };

    // invoking the function
    fetchPosts();
  }, []);

  return (
    <div className="space-x-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
    </div>
  );
}

export default Feed;
