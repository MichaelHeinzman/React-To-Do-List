import React, { useState } from "react";
import { useTodoContext } from "../../context/todo.context";

const ListItem = ({ item }) => {
  // Contexts
  const { deleteItem } = useTodoContext();

  // State
  const { title, description } = item;

  // Methods
  const [xClicked, setXClicked] = useState(false);
  const onXClicked = () => setXClicked(true);
  const onDeleteClicked = () => deleteItem(item);
  const onCancelClicked = () => setXClicked(false);

  return (
    <div
      className="flex h-full w-full gap-1 shadow-md shadow-[#2c2c2c45]"
      data-testid="list-item"
    >
      {/* Content */}
      <div className="flex h-full w-4/5 flex-col justify-start rounded-sm bg-[#ffffff] p-1 text-[#000000]">
        <span className="text-md font-semibold">{title}</span>
        <p className="text-sm font-normal">{description}</p>
      </div>

      {/* Delete */}
      <button
        className="flex w-1/5 justify-center rounded-sm bg-[#ffffff] p-2 text-[#ff7474] hover:bg-[#ff7474] hover:text-[#ffffff]"
        onClick={xClicked ? onDeleteClicked : onXClicked}
      >
        <span className="m-auto text-lg font-semibold">
          {xClicked ? "Delete" : "X"}
        </span>
      </button>

      {/* Cancel Delete */}
      {xClicked && (
        <button
          className="flex w-1/5 justify-center rounded-sm bg-[#ffffff] p-2 text-[#42b961] hover:bg-[#42b961] hover:text-[#ffffff]"
          onClick={onCancelClicked}
        >
          <span className="m-auto text-lg font-semibold">Cancel</span>
        </button>
      )}
    </div>
  );
};

export default ListItem;
