import { useRouter } from "next/router";
import Card from "../../UI/Card";
import "../../UI/Card.module.css";

const ComboItem = () => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/combos/comboID");
  };

  return (
    <Card>
      <li onClick={viewItemDetailsHandler}>Combo Item Works!</li>
    </Card>
  );
};

export default ComboItem;
