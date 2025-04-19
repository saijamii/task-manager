import Header from "../src/app/pages/Header";
const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

it("Should render Task Manager", () => {
  render(<Header />);

  const head = screen.getByText("Task Manager");

  expect(head).toBeInTheDocument()
});
