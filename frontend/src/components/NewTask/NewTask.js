import { useState } from 'react';

import './NewTask.css';
import { createTask } from '../../services/backend.service';

export const NewTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            title: title,
            description: description,
            due_date: dueDate,
            priority: priority,
        }
        
        try {
            createTask(task);
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="NewTaskWrapper">
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <label>
                    Due Date:
                    <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                </label>
                <label>
                    Priority:
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option value="L">Low</option>
                        <option value="M">Medium</option>
                        <option value="H">High</option>
                    </select>
                </label>
                <button type="submit">Create Task</button>
            </form>
        </div>
    )
}

export default NewTask;