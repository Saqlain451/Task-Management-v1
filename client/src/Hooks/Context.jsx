import React, { useContext } from "react";

//create context
const appContext = React.createContext(undefined);

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const name = "saqlain";

  return (
    // eslint-disable-next-line react/no-children-prop
    <appContext.Provider value={{ name }}>{children}</appContext.Provider>
  );
};

const useGlobalHook = () => useContext(appContext);

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalHook };
