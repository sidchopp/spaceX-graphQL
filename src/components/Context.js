import React, { useState, useContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //States
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState({});
  const [showMore, setShowMore] = useState(false);
  //Initialize Apollo Client
  const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/", // uri specifies the URL of our GraphQL server
    cache: new InMemoryCache(), //cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them
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

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
