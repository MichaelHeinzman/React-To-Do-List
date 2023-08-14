import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListContainer from "./ListContainer";
import { useTodoContext } from "../../context/todo.context";

// Mock the useTodoContext hook
jest.mock("../../context/todo.context", () => ({
  useTodoContext: jest.fn(),
}));

describe("ListContainer Component", () => {
  it("renders header and children components", () => {
    const mockList = [
      { id: 1, title: "Item 1", description: "Description 1" },
      { id: 2, title: "Item 2", description: "Description 2" },
    ];

    // Mock the useTodoContext to return mockList
    useTodoContext.mockReturnValue({ list: mockList });

    // Define a simple children component for testing
    const ChildrenComponent = ({ list }) => (
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );

    // Render the ListContainer with the ChildrenComponent
    render(
      <ListContainer>
        {(list) => <ChildrenComponent list={list} />}
      </ListContainer>
    );

    // Assert header and children components are rendered
    expect(screen.getByText("To-Do List")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("shows and hides the form when 'ADD ITEM' button is clicked", () => {
    // Mock the useTodoContext hook
    useTodoContext.mockReturnValue({ list: [] });

    render(<ListContainer>{() => null}</ListContainer>);

    // Check that the form is not initially displayed
    expect(screen.getByText("ADD ITEM")).toBeInTheDocument();
    expect(screen.queryByTestId("list-item-form")).not.toBeInTheDocument();

    // Click the 'ADD ITEM' button
    fireEvent.click(screen.getByText("ADD ITEM"));

    // Check that the form is displayed
    expect(screen.queryByText("ADD ITEM")).not.toBeInTheDocument();
    expect(screen.getByTestId("list-item-form")).toBeInTheDocument();

    // Click the 'Cancel' button in the form
    fireEvent.click(screen.getByText("Cancel"));

    // Check that the form is hidden again
    expect(screen.getByText("ADD ITEM")).toBeInTheDocument();
    expect(screen.queryByTestId("list-item-form")).not.toBeInTheDocument();
  });
});
