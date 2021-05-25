import { useRouter } from "next/router";
import Card from "../../UI/Card";
import "../../UI/Card.module.css";

const CatchItem = () => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/catch-log/catchId");
  };

  return (
    <Card>
      <li onClick={viewItemDetailsHandler}>Catch Item Works!</li>
    </Card>
  );
};

export default CatchItem;
