const NewCombo = () => {
  return (
    <form>
      <label htmlFor="name">Combo Name</label>
      <input type=" text" id="name" name="name" />
      <label htmlFor="rod">Rod</label>
      <select id="rod" name="rod">
        <option value=""></option>
      </select>
      <label htmlFor="reel">Reel</label>
      <select id="reel" name="reel">
        <option value=""></option>
      </select>
      <label htmlFor="usage">Usage</label>
      <input
        type="text"
        id="usage"
        name="usage"
        placeholder="ie: Finess, Trolling, Surf, Jiggin..."
      />
    </form>
  );
};

export default NewCombo;
