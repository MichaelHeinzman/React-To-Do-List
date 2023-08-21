import React, { useState } from "react";
import { useTodoContext } from "../../context/todo.context";

const ListItemForm = ({ disableForm }) => {
  // Context
  const { addItem } = useTodoContext();

  // State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Methods
  const onFormSubmit = () => {
    disableForm();
    addItem({
      title: title,
      description: description,
    });
  };

  return (
    <div
      className="flex w-full flex-col gap-y-4 self-center rounded-md bg-[#ffffff] p-3 shadow-md shadow-[#3f3f3f4e]"
      data-testid="list-item-form"
    >
      {/* Title */}
      <div className="mb-6 flex-col gap-2">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-black md:mb-0"
            htmlFor="inline-full-name"
          >
            Title
          </label>
        </div>
        <div className="md:w-full">
          <input
            className="w-full appearance-none rounded border-2 border-[#797979] bg-gray-100 px-4 py-2 leading-tight text-gray-700 focus:border-[#000000] focus:bg-white focus:text-black focus:outline-none"
            id="inline-full-name"
            type="text"
            placeholder="Clean Room"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 flex-col gap-2">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-black md:mb-0 md:text-left"
            htmlFor="inline-description"
          >
            Description
          </label>
        </div>
        <div className="md:w-full">
          <input
            className="w-full appearance-none rounded border-2 border-[#797979] bg-gray-100 px-4 py-2 leading-tight text-gray-700 focus:border-[#000000] focus:bg-white focus:text-black focus:outline-none"
            id="inline-description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="flex w-full gap-3 self-center">
        <button
          className="w-1/2 self-center rounded-md bg-black p-2 text-sm font-semibold text-white hover:bg-green-400"
          onClick={onFormSubmit}
        >
          Submit
        </button>
        <button
          className="w-1/2 self-center rounded-md bg-black p-2 text-sm font-semibold text-white hover:bg-red-400"
          onClick={disableForm}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ListItemForm;
