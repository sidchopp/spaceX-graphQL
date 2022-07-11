import { gql } from "@apollo/client";

//To define the query we want to execute, we wrap it in the gql template literal

//To get past launches
const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast {
      mission_name
      id
      launch_year
      links {
        article_link
        video_link
        wikipedia
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export { GET_LAUNCHES };
