import React, { useState } from "react";
import { useTodoContext } from "../../context/todo.context";

const ListItem = ({ item }) => {
  // Contexts
  const {deleteItem} = useTodoContext();

  // State
  const {title, description} = item

  // Methods
  const [xClicked, setXClicked] = useState(false);
  const onXClicked = () => setXClicked(true);
  const onDeleteClicked = () => deleteItem(item);
  const onCancelClicked = () => setXClicked(false);

  return (
    <div className="flex w-full h-full gap-1 shadow-md shadow-[#2c2c2c45]">
      {/* Content */}
      <div className="w-4/5 flex flex-col justify-start h-full text-[#000000] bg-[#ffffff] rounded-sm p-1">
        <span className="font-semibold text-md">{title}</span>
        <p className="font-normal text-sm">{description}</p>
      </div>

      {/* Delete */}
      <button
        className="w-1/5 flex justify-center bg-[#ffffff] rounded-sm text-[#ff7474] hover:text-[#ffffff] hover:bg-[#ff7474] p-2"
        onClick={xClicked ? onDeleteClicked : onXClicked}
      >
        <span className="m-auto font-semibold text-lg">
          {xClicked ? "Delete" : "X"}
        </span>
      </button>

      {/* Cancel Delete */}
      {xClicked && (
        <button
          className="w-1/5 flex justify-center bg-[#ffffff] rounded-sm text-[#42b961] hover:text-[#ffffff] hover:bg-[#42b961] p-2"
          onClick={onCancelClicked}
        >
          <span className="m-auto font-semibold text-lg">Cancel</span>
        </button>
      )}
    </div>
  );
};

export default ListItem;
