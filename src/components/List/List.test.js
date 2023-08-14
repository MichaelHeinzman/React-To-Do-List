import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers
import List from "./List";
import { useTodoContext } from "../../context/todo.context"; // Import the actual context implementation

// Mock the useTodoContext hook
jest.mock("../../context/todo.context");

describe("List Component", () => {
  const message = "No items in list yet";
  const emptyTestCases = [
    { list: [], message: message },
    { list: null, message: message },
    { list: undefined, message: message },
  ];

  it.each(emptyTestCases)(
    "renders '%s' when list is empty, null, or undefined",
    ({ list, message }) => {
      render(<List list={list} />);
      const noItemsText = screen.getByText(message);
      expect(noItemsText).toBeInTheDocument();
    }
  );

  it("renders items when list isn't empty", () => {
    const customList = [
      { id: 1, title: "Item 1", description: "Description" },
      { id: 2, title: "Item 2", description: "Description" },
    ];

    // Mock the context function to return the mock deleteItem
    useTodoContext.mockReturnValue({ deleteItem: jest.fn() });

    render(<List list={customList} />);

    const item1 = screen.getByText("Item 1");
    const item2 = screen.getByText("Item 2");
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  // Add more test cases as needed
});
