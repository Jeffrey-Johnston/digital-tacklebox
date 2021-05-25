import { useRouter } from "next/router";
import Card from "../../UI/Card";
import "../../UI/Card.module.css";

const EquiptmentItem = () => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/equiptment/equiptmentID");
  };

  return (
    <Card>
      <li onClick={viewItemDetailsHandler}>Equiptment Item Works!</li>
    </Card>
  );
};

export default EquiptmentItem;
