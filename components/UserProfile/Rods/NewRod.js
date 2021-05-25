const NewRod = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onClick={submitFormHandler}>
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand"></input>
      <label htmlFor="model">Model</label>
      <input type="text" id="model" name="model"></input>
      <label htmlFor="power">Type</label>
      <select id="type" name="type">
        <option value="spinning">Spinning</option>
        <option value="baitcasting">Baitcasting</option>
        <option value="fly">Fly</option>
        <option value="telescopic">Telescopic</option>
        <option value="spincast">Spincast</option>
        <option value="iceFishing">Ice Fishing</option>
      </select>
      <label htmlFor="power">Power</label>
      <select id="power" name="power">
        <option value="ultraLight">Ultra Light</option>
        <option value="light">Light</option>
        <option value="mediumLight">Medium Light</option>
        <option value="medium">Medium</option>
        <option value="mediumHeavy">Medium Heavy</option>
        <option value="heavy">Heavy</option>
        <option value="extraHeavy">Extra Heavy</option>
        <option value="extraExtraHeavy">Extra Extra Heavy</option>
      </select>
      <label htmlFor="action">Action</label>
      <select id="action" name="action">
        <option value="extraFast">Extra Fast</option>
        <option value="fast">Fast</option>
        <option value="moderateFast">Moderate Fast</option>
        <option value="moderate">Moderate</option>
        <option value="moderateSlow">Moderate Slow</option>
        <option value="slow">Slow</option>
      </select>
      <div>
        <label htmlFor="power">Length</label>
        <input
          type="number"
          id="length"
          name="length"
          placeholder="feet"
        ></input>
        <span>ft</span>
        <input
          type="number"
          id="length"
          name="length"
          placeholder="inches"
        ></input>
        <span>in</span>
      </div>

      <div>
        <label htmlFor="lureWeight">Lure Weight Range</label>
        <select id="lureWeight" name="lureWeight">
          <option value="" disabled>
            (ounces)
          </option>
          <option value="1-64">1/64</option>
          <option value="1-32">1/32</option>
          <option value="1-16">1/16</option>
          <option value="1/8">1/8</option>
          <option value="3-8">3/8</option>
          <option value="1-2">1/2</option>
          <option value="5-8">5/8</option>
          <option value="3-4">3/4</option>
          <option value="7-8">7/8</option>
          <option value="1">1</option>
          <option value="1-1-4">1 - 1/4</option>
          <option value="1-3-8">1 - 3/8</option>
          <option value="1-1-2">1 - 1/2</option>
          <option value="1-5-8">1 - 5/8 </option>
          <option value="1-3-4">1 - 3/4 </option>
          <option value="1-7-8">1 - 7/8 </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span>oz</span>
        <span>to</span>
        <select id="lureWeight" name="lureWeight">
          <option value="" disabled>
            (ounces)
          </option>
          <option value="1-32">1/32</option>
          <option value="1-16">1/16</option>
          <option value="1/8">1/8</option>
          <option value="3-8">3/8</option>
          <option value="1-2">1/2</option>
          <option value="5-8">5/8</option>
          <option value="3-4">3/4</option>
          <option value="7-8">7/8</option>
          <option value="1">1</option>
          <option value="1-1-4">1 - 1/4</option>
          <option value="1-3-8">1 - 3/8</option>
          <option value="1-1-2">1 - 1/2</option>
          <option value="1-5-8">1 - 5/8 </option>
          <option value="1-3-4">1 - 3/4 </option>
          <option value="1-7-8">1 - 7/8 </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span>oz</span>
      </div>

      <label htmlFor="image">Open Camera</label>
      <input type="file" name="image" accept="image/*" capture="environment" />

      <label htmlFor="myFile">Choose Image</label>
      <input type="file" id="myFile" name="filename" />
      <button type="submit">Add to Tackle Box</button>
    </form>
  );
};

export default NewRod;
