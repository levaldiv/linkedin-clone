import { Avatar } from "@mui/material";
import TimeAgo from "timeago-react";

function Post({ post, modalPost }) {
  return (
    <div
      className={`bg-white dark:bg-[#1D2226] ${
        modalPost ? "rounded-r-lg" : "rounded-lg"
      } space-y-2 py-2.5 border border-gray-300 dark:border-none`}
    >
      <div className="flex items-center px-2.5 cursor-pointer">
        <Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer" />
        <div className="mr-auto ml-2 leading-none">
          <h6 className="font-medium hover:text-blue-500 hover:underline">
            {post.username}
          </h6>
          <p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
          <TimeAgo
            date={post.createdAt}
            className="text-xs dark:text-white/75 opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
