import { useRouter } from "next/router";

const ItemDetails = () => {
  const router = useRouter();

  const closeModalHandler = () => {
    router.push("/user-profile/rods");
  };

  return (
    <div>
      <p>Item Details Works!</p>
      <button onClick={closeModalHandler}>Back</button>
    </div>
  );
};

export default ItemDetails;
