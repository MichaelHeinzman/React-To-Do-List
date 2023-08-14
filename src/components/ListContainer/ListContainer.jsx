import { useState } from "react";
import { useTodoContext } from "../../context/todo.context";
import ListItemForm from "./ListItemForm";

const ListContainer = ({children}) => {
  const { list } = useTodoContext();
  const [showForm, setShowForm] = useState(false);
  const onAddTodoClicked = () => setShowForm(true);
  
  return (
    <div className="bg-transparent w-full h-max flex flex-col justify-center gap-4">
      <h1 className="font-bold text-2xl text-[#ffffff] text-center">
        To-Do List
      </h1>
      {children(list)}
      {!showForm && <button
        className="w-1/5 sm:h-11 md:h-14 self-end shadow-[#2b2b2b0a] shadow-md font-semibold text-md text-[#000000] bg-[#ffffff] rounded-sm hover:bg-[#ffffff80]"
        onClick={onAddTodoClicked}
      >ADD ITEM</button>
      }
      {showForm && <ListItemForm disableForm={() => setShowForm(false)}/>}
    </div>
  );
};

export default ListContainer;
