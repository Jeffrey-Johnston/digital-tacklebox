import { useRouter } from "next/router";

const ItemDetails = () => {
  const router = useRouter();

  const closeModalHandler = () => {
    router.push("/user-profile/combos");
  };

  return (
    <div>
      <p>Item Details Works!</p>
      <button onClick={closeModalHandler}>Back</button>
    </div>
  );
};

export default ItemDetails;
