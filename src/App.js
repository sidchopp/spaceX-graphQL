import { useGlobalContext } from "./components/Context";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, AboutCompany, Launches, Rockets, Footer } from "./components";

function App() {
  const { client } = useGlobalContext();
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutCompany />}></Route>
          <Route path="/rockets" element={<Rockets />}></Route>
          <Route path="/launches" element={<Launches />}></Route>
        </Routes>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
