import { useGlobalContext } from "./components/Context";
import Loader from "./components/Loader";

function App() {
  const { loading, launches } = useGlobalContext();
  console.log(launches);
  // if data is not fetched,show loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Space X Launches</h1>
      <ul>
        {launches.map((launch) => {
          return <li>{launch.mission_name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
