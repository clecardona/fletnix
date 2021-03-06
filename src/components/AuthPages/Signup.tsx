//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

//Local imports
import fields from "./assets/fields-signup.json";
import InputField from "../shared/InputField";
import { createAccount } from "scripts/auth";
import { useAuth } from "state/AuthProvider";
import { createDocumentWithId } from "scripts/fireStore";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";

export default function Signup() {
  //Local states
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { setLoggedIn, setUser } = useAuth();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await createAccount(form.email, form.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = {
      username: form.username,
      role: "client",
    };
    await createDocumentWithId("users", uid, newUser);
    setLoggedIn(true);
    setUser({ ...newUser, id: uid });

    history.push("/");
  }

  function onFailure(code) {
    setMessage(code);
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <div className="signup-container">
      <Header />
      <Link to="/" className="signin">
        <strong>Sign In</strong>
      </Link>

      <main className="page-signup ">
        <div className="bloc">
          <form onSubmit={onSubmit}>
            <h1 className="title">Sign Up</h1>
            <h2>Just a few more steps and you're finished!</h2>
            {Fields}
            <p>{message}</p>
            <button className="btn btn-signup">Sign Up</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
