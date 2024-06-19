import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  test("render title", () => {
    render(<Footer />);

    const titleText = screen.getByText(/spacex graphql api/i);

    expect(titleText).toBeInTheDocument();
  });
});
