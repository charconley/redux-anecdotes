import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getOne = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = {content, id: getId(), votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateVote = async (id) => {
    const anecdote = await getOne(id)
    const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const request = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
    return request
}

export default { getAll, createNew, updateVote }