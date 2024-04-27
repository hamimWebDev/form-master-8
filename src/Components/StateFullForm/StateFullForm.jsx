import React, { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };
  const handleChange = (e) => {
    const Name = e.target.value;
    setName(Name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default StateFullForm;
