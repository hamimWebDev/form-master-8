import React from "react";

const ReusableFrom = ({ fromTitle, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h2>{fromTitle}</h2>
      {children}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default ReusableFrom;
