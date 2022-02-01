import { useState } from "react";

function Form() {
  /* setting whatever the user is typing to the state to store what they are typing
   * by default it is empty */
  const [input, setInput] = useState("");
  
  return (
    <form>
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
    </form>
  );
}

export default Form;
