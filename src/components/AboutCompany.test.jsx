import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { AboutCompany } from "./AboutCompany";
import { GET_COMPANY } from "../queries/queries";

const mocks = [
  {
    delay: 30, // to prevent React from batching the loading state away
    request: {
      query: GET_COMPANY,
    },
    result: {
      data: {
        company: {
          ceo: "Elon Musk",
          employees: 9500,
          founder: "Elon Musk",
          headquarters: {
            state: "California",
          },
          name: "SpaceX",
          summary:
            "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
          valuation: 74000000000,
          links: {
            website: "https://www.spacex.com",
          },
        },
      },
    },
  },
];

describe("About Company Component", () => {
  test("renders company data", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <AboutCompany />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(await screen.findByRole("progressbar")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
    );

    const ceoNameText = await screen.findByText(/musk/i);
    const companySummaryText = await screen.findByText(/founded in 2002/i);
    const employeesText = await screen.findByText(/9500/i);
    const aboutLink = await screen.findByRole("link", { name: "SpaceX" });

    expect(ceoNameText).toBeInTheDocument();
    expect(companySummaryText).toBeInTheDocument();
    expect(employeesText).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "https://www.spacex.com");
  });
});
