import React, { useState, useContext, useEffect } from "react";
const AppContext = React.createContext();

const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    mission_name
    id
  }
}`;

const AppProvider = ({ children }) => {
  //States
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState({});

  const fetchData = async function () {
    setLoading(true);
    try {
      const response = await fetch("https://api.spacex.land/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: LAUNCHES_QUERY }),
      });
      const DATA = await response.json();
      setLoading(false);
      setLaunches(DATA.data.launchesPast);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        launches,
        setLaunches,
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
