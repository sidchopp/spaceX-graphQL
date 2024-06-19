import { setupServer } from "msw/node";
import { graphql, HttpResponse } from "msw";
import { render, screen } from "@testing-library/react";
import { AboutCompany } from "./AboutCompany";

const handlers = [
  graphql.query("GetCompany", ({ query, variables }) => {
    return HttpResponse.json({
      data: {
        company: {
          ceo: "Elon Musk",
          employees: 8000,
          founder: "Elon Musk",
          headquarters: {
            state: "California",
          },
          name: "SpaceX",
          summary:
            "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
          valuation: 74000000000,
          links: {
            website: "https://www.spacex.com",
          },
        },
      },
    });
  }),
];

const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe("About Company Component", () => {
  test("render title", async () => {
    render(<AboutCompany />);

    const ceoNameText = screen.getByText(/elon musk/i);

    expect(ceoNameText).toBeInTheDocument();
  });
});
