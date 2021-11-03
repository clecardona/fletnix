//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-edit.json";
import InputField from "components/shared/InputField";
import InputSerie from "./forms/InputSerie";
import { updateDocument } from "scripts/fireStore";
import { getCategory } from "scripts/methods";

export default function EditForm({ data }) {
  //Local states
  const [form, setForm] = useState(data);

  const [item, setItem] = useState({ category: "" });
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const items = getCategory(data, item.category);

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(e) {
    if (window.confirm("Do you confirm the changes ?")) {
      e.preventDefault();
      setErrorMessage("");
      //await updateDocument("courses", data.id, { ...data, ...form });
      //alert("Title successfully edited");
      // history.push("/admin");
    }
  }

  function handleClick(item) {
    setForm(item);
    setShowForm(true);
  }
  //Components

  console.log(items);
  const Items = items.map((item, index) => (
    <li key={index} className="list-item">
      <button
        className="btn btn-orange"
        type="button"
        onClick={() => handleClick(item)}
      >
        Select
      </button>
      {item.title}
    </li>
  ));

  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit} className="form-admin">
      <label className="selector">
        Select a category : {item.category}
        <select
          onChange={(e) => {
            setItem({ ...item, category: e.target.value });
            setShowForm(false);
          }}
        >
          <option value="serie">Serie</option>
          <option value="film">Film</option>
          <option value="documentary">Documentary</option>
          <option value="all">Show All</option>
        </select>
      </label>
      {form.category !== "" && <ul>{Items}</ul>}

      {showForm && (
        <>
          <div className="main-bloc">{Fields}</div>
          <p>{errorMessage}</p>
          <button className="btn btn-submit btn-orange">
            <h4>Submit</h4>
          </button>{" "}
        </>
      )}
      {/* */}
    </form>
  );
}
