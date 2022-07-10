import { useGlobalContext } from "./Context";

const Launches = () => {
  const { launches } = useGlobalContext();
  return (
    <div>
      <h1>Space X Launches</h1>
      <ul>
        {launches.map((launch) => {
          return <li key={launch.id}>{launch.mission_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Launches;
