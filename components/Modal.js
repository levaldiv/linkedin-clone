import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import Form from "./Form";
import { useRecoilValue } from "recoil";
import { getPostState } from "../atoms/postAtom";
import Post from "./Post";

/********** Creating the animation **********/
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};
/********************************************/

const Modal = ({ handleClose, type }) => {
  const { data: session } = useSession();
  const post = useRecoilValue(getPostState);

  return (
    <Backdrop onClick={handleClose}>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-xl flex flex-col justify-center bg-white dark:bg-[#1D2226] w-full max-w-lg md:-mt-96 mx-6"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        ></motion.div>
      )}
    </Backdrop>
  );
};
