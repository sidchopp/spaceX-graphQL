import { gql } from "@apollo/client";

//To define the query we want to execute, we wrap it in the gql template literal

//To get past launches
const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast {
      mission_name
      id
      launch_site {
        site_name_long
      }
      launch_date_local
    }
  }
`;

export { GET_LAUNCHES };
