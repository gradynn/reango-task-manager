const URL = 'http://127.0.0.1:8000/tasks';

export const getAllTasks = async () => {
    try {
        const response = await fetch(
            `${URL}/all`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await fetch(
            `${URL}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const createTask = async (task) => {
    try {
        const response = await fetch(
            `${URL}/create`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const checkOffTask = async (id, checked) => {
    try {
        const response = await fetch(
            `${URL}/update/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({complete: checked}),
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}