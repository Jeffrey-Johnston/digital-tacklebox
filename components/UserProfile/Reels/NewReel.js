const NewReel = () => {
  return (
    <form>
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand"></input>
      <label htmlFor="model">Model</label>
      <input type="text" id="model" name="model"></input>
      <label htmlFor="power">Type</label>
      <select id="type" name="type">
        <option value="spinning">Spinning</option>
        <option value="lowProfile">Baitcasting (low profile)</option>
        <option value="conventional">Baitcasting (conventional)</option>
        <option value="bfs">Baitcasting (bfs)</option>
        <option value="fly">Fly</option>
        <option value="spincast">Spincast</option>
        <option value="iceSpinning">Ice Spinning</option>
        <option value="iceFreefall">Ice Freefall</option>
      </select>
      <label htmlFor="hand">Hand</label>
      <select id="hand" name="hand">
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <div>
        <label htmlFor="gearRatio">Gear Ratio</label>
        <select id="gearRatio" name="gearRatio">
          <option value="">0</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
        </select>

        <span>.</span>

        <select id="gearRatio" name="gearRatio">
          <option value="">0</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
        </select>

        <span>to</span>

        <select id="gearRatio" name="gearRatio">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>

      <div>
        <label htmlFor="lineType">Line Type</label>
        <select id="lineType" name="lineType">
          <option value="mono">Monofilament</option>
          <option value="">Flourocarbon</option>
          <option value="">Braid</option>
        </select>
        <label htmlFor="lineStrength">Line Strength</label>
        <input
          type="number"
          id="lineStrength"
          name="lineStrength"
          placeholder="pound test"
        />
      </div>
    </form>
  );
};

export default NewReel;
