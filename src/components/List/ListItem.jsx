import React, { useState } from "react";
import { useTodoContext } from "../../context/todo.context";

const ListItem = ({ item }) => {
  // Contexts
  const { deleteItem } = useTodoContext();

  // State
  const { title, description } = item;

  // Methods
  const [clicked, setClicked] = useState(false);
  const [xClicked, setXClicked] = useState(false);
  const onXClicked = () => setXClicked(true);
  const onDeleteClicked = () => deleteItem(item);
  const onCancelClicked = () => setXClicked(false);

  return (
    <div className="flex h-full w-full gap-1 " data-testid="list-item">
      {/* Content */}
      <button
        onClick={() => setClicked((prev) => !prev)}
        className={`min-h-16 flex ${
          clicked ? "w-4/5" : "w-full"
        } flex-col justify-start rounded-sm bg-[#ffffff] p-1 text-left text-[#000000] shadow-md shadow-[#2c2c2c45]`}
      >
        <span className="text-md font-semibold">{title}</span>
        <p className="text-sm font-normal">{description}</p>
      </button>

      {/* Delete */}
      {clicked && (
        <div className="flex w-1/5 flex-col justify-start gap-3">
          <button
            className="flex h-16 w-full justify-center rounded-sm bg-[#ffffff] p-2 text-[#ff7474] shadow-md shadow-[#2c2c2c45] hover:bg-[#ff7474] hover:text-[#ffffff]"
            onClick={xClicked ? onDeleteClicked : onXClicked}
          >
            <span className="m-auto text-lg font-semibold">
              {xClicked ? "Delete" : "X"}
            </span>
          </button>

          {/* Cancel Delete */}
          {xClicked && (
            <button
              className="flex h-16 w-full justify-center rounded-sm bg-[#ffffff] p-2 text-[#42b961] shadow-md shadow-[#2c2c2c45] hover:bg-[#42b961] hover:text-[#ffffff]"
              onClick={onCancelClicked}
            >
              <span className="m-auto text-lg font-semibold">Cancel</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ListItem;
