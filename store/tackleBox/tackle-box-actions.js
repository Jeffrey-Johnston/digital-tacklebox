import { uiActions } from "../UI/ui-slice";
import { tackleBoxActions } from "./tackle-box-slice";

export const createNewTackleBox = async (tackleBox) => {
  const response = await fetch(
    "https://tackle-junkie-default-rtdb.firebaseio.com/tackle-box.json",
    {
      method: "POST",
      body: JSON.stringify({
        tackleBox,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  if (!response.ok) {
    throw new Error("Sending tackle box data failed");
  }
};

export const fetchTackleBoxData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-async-d5142-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart Tackle Box!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const TackleBoxData = await fetchData();
      dispatch(
        tackleBoxActions.replaceCart({
          items: TackleBoxData.items || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Tackle Box data failed!",
        })
      );
    }
  };
};

export const sendTackleBoxData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending trackle box data",
      })
    );

    const sendRequest = async (tackleBox) => {
      const response = await fetch(
        "https://tackle-junkie-default-rtdb.firebaseio.com/tackle-box.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: tackleBox.name,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending tackle box data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Your tackle box has been created!",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3000);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Tackle box data was received an error",
        })
      );
    }
  };
};
