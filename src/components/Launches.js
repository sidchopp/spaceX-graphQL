import { useLazyQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../queries/queries";
import Button from "@mui/material/Button";

//Components
import Loader from "./Loader";
import LaunchesCard from "./LaunchesCard";

const Launches = () => {
  const [getLaunches, { loading, error, data }] = useLazyQuery(GET_LAUNCHES);
  if (error) return <p>`Error :( ${error.message}`</p>;
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Past Launches</h1>
      <Button
        onClick={() => {
          getLaunches();
        }}
        variant="contained"
      >
        {" "}
        Click Me
      </Button>
      {data ? <LaunchesCard data={data} loading={loading} /> : <></>}
    </div>
  );
};

export default Launches;
