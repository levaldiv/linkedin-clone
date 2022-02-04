import { Avatar, IconButton } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
// import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import { useRecoilState } from "recoil";
// import { handlePostState, getPostState } from "../atoms/postAtom";
import { useState } from "react";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
// import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
// import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { modalState, modalTypeState } from "../atoms/modalAtom";
// import TimeAgo from "timeago-react";
// import { useSession } from "next-auth/react";

function Post({ post, modalPost }) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [showInput, setShowInput] = useState(false);

  // creating the truncate function
  // accepting a string (which is the text) & a number
  const truncate = (string, n) =>
    // checking if the strings length is greater than the number, then only it will truncate
    string?.length > n ? string.substr(0, n - 1) + "...see more" : string;

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
          {/* <TimeAgo
            date={post.createdAt}
            className="text-xs dark:text-white/75 opacity-80"
          /> */}
        </div>

        {modalPost ? (
          // Show this if its a modal post
          <IconButton onClick={() => setModalOpen(false)}>
            <CloseRoundedIcon className="dark:text-white/75 h-7 w-7" />
          </IconButton>
        ) : (
          <IconButton>
            <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
          </IconButton>
        )}
      </div>

      {/* This will check to see if the post has any sort of input (text) */}
      {post.input && (
        <div className="px-2.5 break-all md:break-normal">
          {/* showInput caps the text to a certain point and will have a see more to see the whole text */}
          {modalPost || showInput ? (
            <p onClick={() => setShowInput(false)}>{post.input}</p>
          ) : (
            <p onClick={() => setShowInput(true)}>
              {/* accepts 2 params, the input text & how many chars i wanna truncate */}
              {truncate(post.input, 150)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Post;
