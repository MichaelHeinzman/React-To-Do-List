import { useState } from "react";
import { useTodoContext } from "../../context/todo.context";
import ListItemForm from "./ListItemForm";

const ListContainer = ({ children }) => {
  const { list } = useTodoContext();
  const [showForm, setShowForm] = useState(false);
  const onAddTodoClicked = () => setShowForm(true);

  return (
    <div className="flex h-max w-full flex-col justify-center gap-4 bg-transparent">
      <h1 className="text-center text-2xl font-bold text-[#ffffff]">
        To-Do List
      </h1>
      {children(list)}
      {!showForm && (
        <button
          className="text-md w-1/5 self-end rounded-sm bg-[#ffffff] font-semibold text-[#000000] shadow-md shadow-[#2b2b2b0a] hover:bg-[#ffffff80] sm:h-11 md:h-14"
          onClick={onAddTodoClicked}
        >
          ADD ITEM
        </button>
      )}
      {showForm && <ListItemForm disableForm={() => setShowForm(false)} />}
    </div>
  );
};

export default ListContainer;
