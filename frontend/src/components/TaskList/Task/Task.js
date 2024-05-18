import { useState } from 'react';

import './Task.css';
import { checkOffTask } from '../../../services/backend.service';

const Task = (props) => {
    const handleClick = () => {
        props.selector(props.id);
    }

    const handleCheckboxChanged = async () => {
        await checkOffTask(props.id, !props.complete);
        window.location.reload();
    }

    return (
        // <div className={`TaskWrapper ${props.id === props.selected ? 'Selected' : ''}`} onClick={handleClick}>
        //     <h2>{props.title}</h2>
        //     <p>{props.description}</p>
        //     {props.dueDate && <p>Due date: {props.dueDate}</p>}
        //     <input type="checkbox" checked={props.complete} onChange={handleCheckboxChanged}/>
        //     <p>Priority: {props.priority}</p>
        // </div>
        <table className={`TaskWrapper ${props.id === props.selected ? 'Selected' : ''}`} onClick={handleClick}>
            <tr>
                <th></th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Complete</th>
                <th>Priority</th>
            </tr>
            <tr>
                <td>
                    <h3>{props.title}</h3>
                </td>
                <td>{props.description}</td>
                <td>
                    {props.dueDate && <p>{props.dueDate}</p>}
                </td>
                <td>
                    <input type="checkbox" checked={props.complete} onChange={handleCheckboxChanged}/> 
                </td>
                <td>{props.priority}</td>
            </tr>
        </table>
    )
}

export default Task;