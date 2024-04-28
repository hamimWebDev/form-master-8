import React, { useContext } from "react";
import { AssetContext } from "../AssedContext/AssedContext";

const ReusableFrom = ({ fromTitle, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const Gift = useContext(AssetContext);
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
      <h3>{Gift}</h3>
    </div>
  );
};

export default ReusableFrom;
