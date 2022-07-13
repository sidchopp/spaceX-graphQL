import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../queries/queries";

//Components
import Loader from "./Loader";
import RocketsCard from "./RocketsCard";

const Rockets = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  // console.log(data);
  if (error) return <p>`Error :( ${error.message}`</p>;
  if (loading) {
    return (
      <div>
        <h1>List of Rockets</h1>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <h1>List of Rockets</h1>
      <RocketsCard data={data} loading={loading} />
    </div>
  );
};

export default Rockets;
