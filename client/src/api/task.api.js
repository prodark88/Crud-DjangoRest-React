/* Consumir apis del backend */

import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})
export const getAllTask = () =>taskApi.get('/');

export const getTask = (id) => taskApi.get(`/${id}/`)


export const createTask = (task) => {
    return taskApi.post('/', task);
}

export const deleteTask = (id) => {
    return taskApi.delete(`/${id}/`);
}

export const updateTask = (id, task )=> taskApi.put(`/${id}/`,task);