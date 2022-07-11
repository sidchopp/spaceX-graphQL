import { useGlobalContext } from "./Context";
import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../queries/queries";

//Components
import Loader from "./Loader";
import RocketsCard from "./RocketsCard";

const Rockets = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  console.log(data);
  if (error) return <p>`Error :( ${error.message}`</p>;
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>List of Rockets</h1>
      <RocketsCard />
    </div>
  );
};

export default Rockets;
