import { useGlobalContext } from "./Context";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";

//Components
import Loader from "./Loader";
import LaunchesCard from "./LaunchesCard";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  // console.log(data);
  if (error) return <p>`Error :( ${error.message}`</p>;
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Past Launches</h1>
      <LaunchesCard />
    </div>
  );
};

export default Launches;
