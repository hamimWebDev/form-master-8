import React, { createContext } from "react";
export const AssetContext = createContext("gold");
const AssedContext = () => {
  return (
    <div>
      <AssetContext.Provider value="gold">
        <h1>This is Context Api</h1>
      </AssetContext.Provider>
    </div>
  );
};

export default AssedContext;
