import { Fragment, useState } from "react";
import NewLure from "./NewLure";
import TackleBoxItemList from "./TackleBoxItemList";

const TackleBox = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormHandler = (state) => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <Fragment>
      <button onClick={toggleFormHandler}>Add New Lure</button>
      {showForm && <NewLure />}
      <TackleBoxItemList />
    </Fragment>
  );
};

export default TackleBox;
