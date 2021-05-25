import { useRouter } from "next/router";
import Card from "../../UI/Card";
import "../../UI/Card.module.css";

const RodItem = () => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/rods/rodID");
  };

  return (
    <Card>
      <li onClick={viewItemDetailsHandler}>Rod Item Works!</li>
    </Card>
  );
};

export default RodItem;
