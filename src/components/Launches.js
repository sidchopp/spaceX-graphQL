import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";
import Button from "@mui/material/Button";

//Components
import Loader from "./Loader";
import LaunchesCard from "./LaunchesCard";

const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (error) return <p>`Error :( ${error.message}`</p>;
  // console.log(data);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Past Launches</h1>

      {data ? <LaunchesCard data={data} loading={loading} /> : <></>}
    </div>
  );
};

export default Launches;
