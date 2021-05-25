import { Fragment, useState } from "react";

import CatchList from "./CatchList";
import NewCatch from "./NewCatch";

const Cacthes = () => {
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
      <button onClick={toggleFormHandler}>Add New Catch</button>
      {showForm && <NewCatch />}
      <CatchList />
    </Fragment>
  );
};

export default Cacthes;
