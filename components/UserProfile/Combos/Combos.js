import { Fragment, useState } from "react";

import NewCombo from "./NewCombo";
import ComboList from "./ComboList";

const Combos = () => {
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
      <button onClick={toggleFormHandler}>Add New Combo</button>
      {showForm && <NewCombo />}
      <ComboList />
    </Fragment>
  );
};

export default Combos;
