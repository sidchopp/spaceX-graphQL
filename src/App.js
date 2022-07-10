import { useGlobalContext } from "./components/Context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

//Components
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
