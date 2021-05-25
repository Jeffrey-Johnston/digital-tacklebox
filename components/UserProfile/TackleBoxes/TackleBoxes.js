import { Fragment, useState } from "react";

import TackleBoxList from "./TackleBoxList";
import NewTackleBox from "./NewTackleBox";

const TackleBoxes = () => {
  const [showForm, setShowForm] = useState(false);

  const createNewTackleBox = async (TackleBox) => {
    const response = await fetch(
      "https://tackle-junkie-default-rtdb.firebaseio.com/tackle-boxes.json",
      {
        method: "POST",
        body: JSON.stringify({
          TackleBox,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Sending tackle box data failed");
    }
  };

  const toggleFormHandler = (state) => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };
  return (
    <Fragment>
      <button onClick={toggleFormHandler}>Add New Tackle Box</button>
      {showForm && <NewTackleBox submitNewTacklebox={createNewTackleBox} />}
      <TackleBoxList />
    </Fragment>
  );
};

export default TackleBoxes;
