import { useGlobalContext } from "./components/Context";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Components
import Launches from "./components/Launches";
import Header from "./components/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const { client } = useGlobalContext();
  return (
    <ThemeProvider theme={darkTheme}>
      <ApolloProvider client={client}>
        <Header />
        <Launches />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
