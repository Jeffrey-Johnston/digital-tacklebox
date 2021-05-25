import { useRouter } from "next/router";
import Card from "../../UI/Card";
import "../../UI/Card.module.css";

const ReelItem = () => {
  const router = useRouter();

  const viewItemDetailsHandler = () => {
    //!filepath will be dynamic
    router.push("/user-profile/reels/reelID");
  };

  return (
    <Card>
      <li onClick={viewItemDetailsHandler}>Reel Item Works!</li>
    </Card>
  );
};

export default ReelItem;
