// import { useSession } from "next-auth/react";
import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { modalState } from "../atoms/modalAtom";
// import { handlePostState } from "../atoms/postAtom";

function Form() {
  /* setting whatever the user is typing to the state to store what they are typing
   * by default it is empty */
  const [input, setInput] = useState("");
  //   console.log(input);
  const [photoUrl, setPhotoUrl] = useState("");

  const uploadPost = async (e) => {
    // this prevents the page from refreshing when a user posts somwthing
    e.preventDefault();
  };

  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        rows="4"
        placeholder="What do you want to talk about?"
        className="bg-transparent focus:outline-none dark:placeholder-white/75"
        // this stores the input
        value={input}
        /* and take an event back from the event the user is typing something and store it inside 
        of the state */
        onChange={(e) => setInput(e.target.value)}
      />

      {/* photo url */}
      <input
        type="text"
        placeholder="Add a photo URL (optional)"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      <button
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        // allows to press enter to submit
        type="submit"
        // uploads the post to the database
        onClick={uploadPost}
        /* this makes sure that the post btn is disabled when there is no text
         * If there is no input (including chars (whitespaces), nums, symbols, image) disable it */
        disabled={!input.trim() && !photoUrl.trim()}
      >
        Post
      </button>
    </form>
  );
}

export default Form;
