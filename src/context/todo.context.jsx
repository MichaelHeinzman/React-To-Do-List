import { createContext, useContext, useMemo, useState } from "react";
import {v4 as uuid} from 'uuid';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext)
const TodoContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item.id = uuid();
    setList((prevList) => {
        return [...prevList, item]
    })
  }

  const deleteItem = (itemToDelete) => {
    setList((prevList) => prevList.filter((item) => item.id !== itemToDelete.id))
  }

  const value = useMemo(() => {
    return {list, addItem, deleteItem}
  },[list])

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;