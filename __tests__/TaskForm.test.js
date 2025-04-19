import TaskForm from "../src/app/pages/TaskForm";
const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

it("should render the Add Task Button", () => {
  render(<TaskForm />);

  const addTaskButton = screen.getByRole("button", { name: "Add Task" });

  expect(addTaskButton).toBeInTheDocument();
});
