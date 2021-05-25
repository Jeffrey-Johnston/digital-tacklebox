import { Fragment, useState } from "react";

import RodList from "./RodList";
import NewRod from "./NewRod";

const Rods = () => {
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
      <button onClick={toggleFormHandler}>Add New Rod</button>
      {showForm && <NewRod />}
      <RodList />
    </Fragment>
  );
};

export default Rods;
