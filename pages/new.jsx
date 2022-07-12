import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useTasks } from '../context/TaskContext'

const inititalState = {
    title: "",
    description: "",
};

const TaskFormPage = () => {
    const [task, setTask] = useState(inititalState);
    const { tasks, createTask, updateTask } = useTasks();
    const { push, query } = useRouter();

    const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(task);
        // createTask(task.title, task.description); 
        // push('/');

        if (!query.id) {
            createTask(task.title, task.description);
        } else {
            updateTask(query.id, task.title, task.description);
        }
        push('/');
    }

    useEffect(() => {
        if (query.id) {
            const taskFound = tasks.find((task) => task.id == query.id);
            if (taskFound) {
                setTask({ title: taskFound.title, description: taskFound.description });
            }
        }
    }, [query.id]);

    return (
        <Layout>
            <div className="flex justify-center items-center hfull">
                <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
                    <h1 className='text-3xl mb-7'>{query.id ? 'Update a task' : 'Task a Form'}</h1>
                    <input type="text" placeholder='write a title' name='title'
                        className='bg-gray-800 focus:outline-none w-full py-3 px-4 my-5' onChange={handleChange}
                        value={task.title} />
                    <textarea name="description" id="" cols="30" rows="2" placeholder='write a description'
                        className='bg-gray-800 focus:outline-none w-full py-3 px-4 mb-5' onChange={handleChange}
                        value={task.description} />
                    <button className='bg-green-500 hover:bg-green-400 px-4 py-2 disabled:opacity-30 rounded-sm' 
                        disabled={!task.title || !task.description}>
                        Save</button>
                </form>
            </div>
        </Layout>
    )
}

export default TaskFormPage;