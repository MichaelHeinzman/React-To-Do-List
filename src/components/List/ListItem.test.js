import { fireEvent, render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import "@testing-library/jest-dom/extend-expect";
import { useTodoContext } from "../../context/todo.context";

// Mock the context and provide a mock implementation for deleteItem
jest.mock("../../context/todo.context");

describe("ListItem Component", () => {
  it("renders title and description", () => {
    const mockDeleteItem = jest.fn(); // Create a mock deleteItem function
    useTodoContext.mockReturnValue({ deleteItem: mockDeleteItem }); // Mock the useTodoContext to return the mock deleteItem

    render(<ListItem item={{ title: "Item 1", description: "Description" }} />);
    const title = screen.getByText("Item 1");
    const description = screen.getByText("Description");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("calls deleteItem when 'Delete' button is clicked and confirmed", () => {
    const mockDeleteItem = jest.fn(); // Create a mock deleteItem function
    useTodoContext.mockReturnValue({ deleteItem: mockDeleteItem }); // Mock the useTodoContext to return the mock deleteItem

    const mockItem = { id: 1, title: "Item 1", description: "Description" };

    // Render the component
    render(<ListItem item={mockItem} />);

    // Get the 'Delete' button element
    const deleteButton = screen.getByText("X");

    // Click the 'Delete' button
    fireEvent.click(deleteButton);

    // Get the 'Delete' button element (now changed to 'Delete')
    const confirmDeleteButton = screen.getByText("Delete");

    // Click the 'Delete' button again to confirm
    fireEvent.click(confirmDeleteButton);

    // Check if deleteItem function was called with the correct item
    expect(mockDeleteItem).toHaveBeenCalledWith(mockItem);
  });

  it("should reset xClicked state when cancel is clicked", () => {
    const mockDeleteItem = jest.fn(); // Create a mock deleteItem function
    useTodoContext.mockReturnValue({ deleteItem: mockDeleteItem }); // Mock the useTodoContext to return the mock deleteItem

    const mockItem = { id: 1, title: "Item 1", description: "Description" };

    render(<ListItem item={mockItem} />);
    const xButton = screen.getByText("X");
    fireEvent.click(xButton);
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(screen.getByText("X")).toBeInTheDocument();
  });
});
