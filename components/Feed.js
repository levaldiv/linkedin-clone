import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Input from "./Input";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";

function Feed() {
  const [realtimePosts, setRealtimePosts] = useState([]);
  // Want thess as a global state to be stored asd global state so i cn have access to these vars
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  // Use Server Side Rendered (SSR)
  const [useSSRPost, setUseSSRPosts] = useRecoilState(useSSRPostsState);

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
      /* When we are fetching stuff from the db, we dont want to show the server side rendered post
       * instead, show the real time post instead (dont want to refresh the page over and over again)
       * want to persist the state but also show real tempo so it updates in real tinme */
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    // invoking the function
    fetchPosts();

    /* Only have a dependency if that dep changes then only its going to run the use effect again
     * handlePost changes ONLY IF handlePost becomes true or false, then itll run the useEffect */
  }, [handlePost]);

  return (
    <div className="space-x-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
    </div>
  );
}

export default Feed;
