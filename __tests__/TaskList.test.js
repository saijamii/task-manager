import React, { useState } from "react";
const { render, screen, fireEvent, within } = require("@testing-library/react");
import TaskList from "../src/app/pages/TaskList";

it("Should render Todo Items", () => {
  render(<TaskList />);
  const head = screen.getByText("Todo Items");
  expect(head).toBeInTheDocument();
});

it("Should change completed and pending buttons", () => {
  const Wrapper = () => {
    const initialTasks = [
      {
        id: 1,
        title: "Sample Task 1",
        description: "This is a sample task.",
        priority: "High",
        completed: false,
      },
      {
        id: 2,
        title: "Sample Task 2",
        description: "This is another sample task.",
        priority: "Medium",
        completed: false,
      },
      {
        id: 3,
        title: "Sample Task 3",
        description: "This is another sample task.",
        priority: "Medium",
        completed: false,
      },
    ];

    const [tasks, setTasks] = useState(initialTasks);

    const toggleTaskCompletion = (taskId) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    };

    return (
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    );
  };

  render(<Wrapper />);

  const task1 = screen.getByText("Sample Task 1").closest("div");
  const completeButton = within(task1).getByRole("button", { name: "✔️" });

  fireEvent.click(completeButton);

  const status = within(task1).getByText("Status: Completed");

  expect(status).toBeInTheDocument();
});
