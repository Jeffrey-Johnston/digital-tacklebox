import { useRouter } from "next/router";
import "../../UI/Card.module.css";

const TackleBoxItem = (props) => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/tackle-boxes/tackle-boxId/lureId");
  };

  return <li onClick={viewItemDetailsHandler}>{props.tackleBox}</li>;
};

export default TackleBoxItem;
