import remove from "assets/icns/remove.png";
export default function InputSerie({ state, setForm }) {
  //methods
  function onChangeLink(value, index) {
    // const newSeason = [...state.links];
    //newSeason[index] = value;
    //setForm({ ...state, links: newLinks });
  }

  function addLink() {
    const newSeason = [...state.seasons];
    newSeason.push({ episodes: [{}] });
    setForm({ ...state, seasons: newSeason });
  }

  function clearField(idx) {
    const newSeason = [...state.seasons];
    newSeason.splice(idx, 1);
    setForm({ ...state, seasons: newSeason });
  }

  console.log(state.seasons);
  //Component
  const Seasons = state.seasons.map((item, index) => (
    <div className="links-item" key={index}>
      <p>Season {index + 1}</p>
      {state.seasons.length > 1 && (
        <button
          className="btn btn-clear-field"
          onClick={() => clearField(index)}
          type="button"
        >
          <img src={remove} alt="-" />
        </button>
      )}
    </div>
  ));

  return (
    <div className="seasons">
      <h4>Seasons : </h4>
      {Seasons}
      {state.seasons.length < 20 && (
        <button className="btn btn-add-field" onClick={addLink} type="button">
          <h4> Add a season </h4>
        </button>
      )}
    </div>
  );
}
