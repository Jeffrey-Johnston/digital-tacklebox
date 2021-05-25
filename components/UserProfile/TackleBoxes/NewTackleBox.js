import { useRef } from "react";

const NewTackleBox = (props) => {
  const nameInputRef = useRef();

  const submitFormHandler = (e) => {
    const name = nameInputRef.current.value;

    e.preventDefault();
    props.submitNewTacklebox(name);
    console.log(name);
  };

  return (
    <form onClick={submitFormHandler}>
      <label htmlFor="name">Tackle Box Name</label>
      <input type="text" id="name" ref={nameInputRef}></input>
      <button type="submit">Create New Tackle Box!</button>
    </form>
  );
};

export default NewTackleBox;
