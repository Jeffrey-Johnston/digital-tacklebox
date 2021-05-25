const NewCatch = () => {
  return (
    <form>
      <label htmlFor="species">Species</label>
      <input type="text" id="species" name="species" />
      <label htmlFor="weight">Weight</label>
      <input type="number" id="weight" name="weight" />
      <span>lbs.</span>
      <input type="number" id="weight" name="weight" />
      <span>oz.</span>
      <label htmlFor="lure">Lure</label>
      <input
        type="search"
        id="lure"
        name="lure"
        placeholder="search your tackle boxes..."
      ></input>
      <button>Add New Catch</button>
    </form>
  );
};

export default NewCatch;
