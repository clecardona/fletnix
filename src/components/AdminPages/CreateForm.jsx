//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-create.json";
import InputField from "components/shared/InputField";
import InputSerie from "./forms/InputSerie";
import { createDoc } from "scripts/fireStore";

export default function CreateForm() {
  //Local states
  const [form, setForm] = useState({
    title: "",
    description: "",
    image_url: "",
    trailer: "",
    year: "",
    cast: "",
    tags: "",
    duration: "",
    seasons: [{ episodes: [{}] }],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    await createDoc("title_test", form);
    alert("Title created");
    history.push("/admin");
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      options={item}
      state={form[item.key]}
      onChange={onChange}
      key={item.key}
    />
  ));

  return (
    <form onSubmit={onSubmit} className="form-admin">
      <label className="selector">
        Select a category : {form.category}
        <select
          onChange={(e) => {
            setForm({ ...form, category: e.target.value });
          }}
        >
          <option value="serie">Serie</option>
          <option value="film">Film</option>
          <option value="documentary">Documentary</option>
        </select>
      </label>
      <div className="main-bloc">{Fields}</div>

      {form.category !== "film" && (
        <InputSerie state={form} setForm={setForm} />
      )}

      <p>{errorMessage}</p>
      <button className="btn btn-submit btn-orange">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
