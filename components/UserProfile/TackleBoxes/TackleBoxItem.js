import { useRouter } from "next/router";
import "../../UI/Card.module.css";

const TackleBoxItem = () => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/tackle-boxes/tackle-boxId/lureId");
  };

  return <li onClick={viewItemDetailsHandler}></li>;
};

export default TackleBoxItem;
