import React, {useState} from "react"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

function ToDoList() {


    const [task, setTask] = useState(["mag aral", "mag aral ulit", "Mag aral nanaman"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    
    function addTask() {
        if(newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            setNewTask("");
        }
    } 

    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        
        setTask(updatedTasks)
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];

            setTask(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if(index < task.length-1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];


            setTask(updatedTasks)
        }
    }

    return(
        <div className="container">
            <div className="to-do-list">
                <center>
                    <h1 className="title-to-do">To Do List App</h1>
                    <input type="text" className="input-add-todo" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} /> {/*matthew */}
                    <button className="add-button to-do-button" onClick={addTask}>add</button>
                </center>
                <ol className="to-do-ol">
                    {task.map((task, index) =>
                        <li className="todo-list-li" key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-task to-do-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-button to-do-button" onClick={() => moveTaskUp(index)}>UP!</button>
                            <button className="move-button to-do-button" onClick={() => moveTaskDown(index)}>Down!</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}


export default ToDoList