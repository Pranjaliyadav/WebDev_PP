import React, { useState, useEffect } from "react";
let count = 0;
const Useeffect = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const handleAddTask = () => {
    let newTaskList = [...tasklist, { id: Date.now(), task: task }];
    setTasklist(newTaskList);
    setTask("");
  };

//   useEffect(()=>{
//       console.log("i will execute ");
//   });  //componentDidMount,ComponentDidUpdate,ComponentWillUnmount,state change

// useEffect(()=>{
//     console.log("i will execute after first task");
//     },[]); //when no condition passed only componentDidMount

    useEffect(()=>{
        console.log("i will execute after first task",count);
        count++;
        return function(){
            console.log("I am a cleanup function",count);
        }
        },[tasklist]); //when no condition passed only componentDidMount
    

  return (
    <div className="task-container">
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasklist.map((taskObj) => {
          return <div key={taskObj.id}>{taskObj.task}</div>;
        })}
      </div>
    </div>
  );
};

export default Useeffect;
