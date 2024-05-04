import React, { useState } from "react";
import "./App.css";

const SearchParams = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Formani yuborish (submit) ravishida qayta yuklashni oldini oladi
    console.log(`Name: ${name}`);
    console.log(`Login: ${login}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <h2 style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>Login</h2>
        <label htmlFor="name">
          Name
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            value={name}
            placeholder="Name"
          />
        </label>
        <label htmlFor="login">
          Login
          <input
            onChange={(e) => setLogin(e.target.value)}
            id="login"
            value={login}
            placeholder="Login"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
