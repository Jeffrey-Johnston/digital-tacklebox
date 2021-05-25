import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newItemFormActions } from "../../../store/newItemFormSlice";

import EquiptmentList from "./EquiptmentList";
import NewEquiptment from "./NewEquiptment";

const Equiptment = () => {
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
      <button onClick={toggleFormHandler}>Add New Piece Of Equiptment</button>
      {showForm && <NewEquiptment />}
      <EquiptmentList />
    </Fragment>
  );
};

export default Equiptment;
