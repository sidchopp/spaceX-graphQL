import { useGlobalContext } from "./components/Context";
import Launches from "./components/Launches";
import Loader from "./components/Loader";

function App() {
  const { loading, launches } = useGlobalContext();
  // console.log(launches);
  // if data is not fetched,show loader
  if (loading) {
    return <Loader />;
  }

  return <Launches />;
}

export default App;
