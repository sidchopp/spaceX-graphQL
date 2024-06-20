import React, { useState, useContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState({});
  const [showMore, setShowMore] = useState(false);

  const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
  });

  return (
    <AppContext.Provider
      value={{
        client,
        loading,
        setLoading,
        launches,
        setLaunches,
        showMore,
        setShowMore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
