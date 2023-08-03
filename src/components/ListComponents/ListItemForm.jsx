import React, { useState } from 'react'
import { useTodoContext } from '../../context/todo.context'

const ListItemForm = ({disableForm}) => {
  //Context
  const {addItem} = useTodoContext();

  // State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  // Methods
  const onFormSubmit = () => {
    disableForm()
    addItem({
        title: title,
        description: description,
      }) 
  }

  return (
    <form className="w-full flex flex-col bg-[#949f9b] p-3 rounded-md shadow-[#3f3f3f4e] shadow-md self-center">
        <h3 className="text-white font-bold text-center text-lg">To-Do Item Form</h3>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5a7779]" id="inline-full-name" type="text" placeholder='Clean Room' value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5a7779]" id="inline-password" type="text" placeholder="******************" onChange={(e) => setDescription(e.target.value)} value={description}/>
          </div>      
        </div>

        <div className="flex self-center gap-3">
          <button className="bg-gray-200 text-sm text-green-400 font-semibold p-2 rounded-md self-center hover:text-gray-200 hover:bg-green-400" onClick={onFormSubmit}>Submit</button>
          <button className="bg-gray-200 text-sm text-red-400 font-semibold p-2 rounded-md self-center hover:text-gray-200 hover:bg-red-400" onClick={disableForm}>Cancel</button>
        </div>
    </form>
  )
}

export default ListItemForm