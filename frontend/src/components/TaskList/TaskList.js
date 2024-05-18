import { useEffect, useState, useRef } from 'react';

import './TaskList.css';
import { getAllTasks, deleteTask } from '../../services/backend.service';
import Task from './Task/Task'

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const taskListRef = useRef(null);

    const fetchTasks = async () => {
        const fetchedTasks = await getAllTasks();
        setTasks(fetchedTasks);
    }

    const handleClick = () => {
        deleteTask(selectedTask);
        window.location.reload();
    }

    const handleClickOutside = (event) => {
        if (taskListRef.current && !taskListRef.current.contains(event.target)) {
            setSelectedTask(null);
        }
    }
    
    useEffect(() => {
        fetchTasks();
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <div ref={taskListRef}>
            {selectedTask ? <button className="DeleteButton" onClick={handleClick}>Delete</button> : <></>}
            {tasks.map((task) => {
                return (
                    <Task selected={selectedTask} selector={setSelectedTask} id={task.pk} title={task.title} description={task.description} dueDate={task.due_date} complete={task.complete} priority={task.priority}/>
                )
            })}
        </div>
    )
}

export default TaskList;