import { useGlobalContext } from "./components/Context";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Components
import Launches from "./components/Launches";
import Rockets from "./components/Rockets";
import AboutCompany from "./components/AboutCompany";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <AboutCompany />
        <Rockets />
        <Launches />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
