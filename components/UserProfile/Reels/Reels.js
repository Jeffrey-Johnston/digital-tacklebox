import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newItemFormActions } from "../../../store/newItemFormSlice";

import ReelList from "./ReelList";
import NewReel from "./NewReel";

const Reels = () => {
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
      <button onClick={toggleFormHandler}>Add New Reel</button>
      {showForm && <NewReel />}
      <ReelList />
    </Fragment>
  );
};

export default Reels;
