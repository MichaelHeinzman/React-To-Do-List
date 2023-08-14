import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListItemForm from "./ListItemForm";
import "@testing-library/jest-dom/extend-expect";
import { useTodoContext } from "../../context/todo.context";

// Mock the context and provide a mock implementation for addItem and disableForm
jest.mock("../../context/todo.context");

describe("ListItemForm Component", () => {
  it("renders the form correctly", () => {
    const mockAddItem = jest.fn();
    useTodoContext.mockReturnValue({ addItem: mockAddItem });
    render(<ListItemForm />); // Remove the disableForm prop for this test

    // Check if form elements are rendered
    expect(screen.getByText("To-Do Item Form")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls addItem when Submit button is clicked", () => {
    const mockAddItem = jest.fn();
    useTodoContext.mockReturnValue({ addItem: mockAddItem });

    render(<ListItemForm disableForm={() => {}} />); // Remove the disableForm prop for this test

    // Simulate user input
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Test Description" },
    });

    // Click the Submit button
    fireEvent.click(screen.getByText("Submit"));

    // Check if addItem was called with the correct arguments
    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith({
      title: "Test Title",
      description: "Test Description",
    });
  });
});
