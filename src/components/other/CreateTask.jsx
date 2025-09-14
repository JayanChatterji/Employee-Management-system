import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submithandler = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });

    setUserData(data);
    console.log(data);

    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
    setTitle("");
  };
  return (
    <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400 text-white"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w text-white"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400 text-white"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400 text-white"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col itmes-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white"
            rows={10}
            cols={30}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
