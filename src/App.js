import { useGlobalContext } from "./components/Context";
import { ApolloProvider } from "@apollo/client";

//Components
import Launches from "./components/Launches";

function App() {
  const { client } = useGlobalContext();
  return (
    // Similar to React's Context.Provider, ApolloProvider wraps your React app and places Apollo Client on the context, enabling you to access it from anywhere in your component tree.
    <ApolloProvider client={client}>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
