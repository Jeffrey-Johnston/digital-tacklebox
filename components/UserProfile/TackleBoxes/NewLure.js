import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const NewLure = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onClick={submitFormHandler}>
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand"></input>
      <label htmlFor="model">Model</label>
      <input type="text" id="model" name="model"></input>
      <label htmlFor="type">Type</label>
      <select id="type" name="type">
        <option value="" disabled>
          Lure Type
        </option>
      </select>
      <label htmlFor="pattern">Pattern</label>
      <input type="text" id="pattern" name="pattern"></input>
      <label htmlFor="length">Length</label>
      <input
        type="number"
        id="length"
        name="length"
        placeholder="inches"
      ></input>
      <label htmlFor="length">Weight</label>
      <input type="text" id="weight" name="weight" placeholder="Ounces"></input>
      <label htmlFor="image">Open Camera</label>
      <input type="file" name="image" accept="image/*" capture="environment" />

      <label htmlFor="myFile">Choose Image</label>
      <input type="file" id="myFile" name="filename" />
      <button type="submit">Add to Tackle Box</button>
    </form>
  );
};

export default NewLure;
