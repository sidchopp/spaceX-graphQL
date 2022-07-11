import { useGlobalContext } from "./Context";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";

//Components
import Loader from "./Loader";
import LaunchesCard from "./LaunchesCard";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log(data);
  if (error) return <p>`Error :( ${error.message}`</p>;

  //To show last  launches
  const showPastLaunches = () => {
    // if data is not fetched,show loader
    if (loading) {
      return <Loader />;
    } else {
      return data.launchesPast.map((launch) => {
        return <li key={launch.id}>{launch.mission_name}</li>;
      });
    }
  };

  if (loading) {
    return <Loader />;
  }
  return <LaunchesCard />;
};

export default Launches;
