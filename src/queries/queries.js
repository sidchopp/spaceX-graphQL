import { gql } from "@apollo/client";

//To define the query we want to execute, we wrap it in the gql template literal

//To get company details
const GET_COMPANY = gql`
  query GetCompany {
    company {
      ceo
      employees
      founder
      headquarters {
        state
      }
      name
      summary
      valuation
      links {
        website
      }
    }
  }
`;
//To get past launches
const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast {
      mission_name
      id
      launch_year
      details
      links {
        article_link
        video_link
        wikipedia
      }
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
    }
  }
`;

// To get Rockets
const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      height {
        feet
      }
      country
      description
      diameter {
        feet
      }
      mass {
        kg
      }
      name
      wikipedia
      cost_per_launch
    }
  }
`;
export { GET_COMPANY, GET_LAUNCHES, GET_ROCKETS };
