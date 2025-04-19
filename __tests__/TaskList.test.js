const { render, screen, fireEvent, within } = require("@testing-library/react");
import TaskList from "../src/app/pages/TaskList";

it("Should render Todo Items", () => {
  render(<TaskList />);
  const head = screen.getByText("Todo Items");
  expect(head).toBeInTheDocument();
});
