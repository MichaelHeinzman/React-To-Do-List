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
      className="flex w-max flex-col gap-y-4 self-center rounded-md bg-[#949f9b] p-3 shadow-md shadow-[#3f3f3f4e]"
      data-testid="list-item-form"
    >
      <h3 className="text-center text-lg font-bold text-white">
        To-Do Item Form
      </h3>

      {/* Title */}
      <div className="mb-6 flex-col gap-2">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-gray-200 md:mb-0"
            htmlFor="inline-full-name"
          >
            Title
          </label>
        </div>
        <div className="md:w-full">
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-[#5a7779] focus:bg-white focus:outline-none"
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
            className="mb-1 block pr-4 font-bold text-gray-200 md:mb-0 md:text-right"
            htmlFor="inline-password"
          >
            Description
          </label>
        </div>
        <div className="md:w-full">
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-[#5a7779] focus:bg-white focus:outline-none"
            id="inline-password"
            type="text"
            placeholder="******************"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
      </div>

      <div className="flex gap-3 self-center">
        <button
          className="self-center rounded-md bg-gray-200 p-2 text-sm font-semibold text-green-400 hover:bg-green-400 hover:text-gray-200"
          onClick={onFormSubmit}
        >
          Submit
        </button>
        <button
          className="self-center rounded-md bg-gray-200 p-2 text-sm font-semibold text-red-400 hover:bg-red-400 hover:text-gray-200"
          onClick={disableForm}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ListItemForm;