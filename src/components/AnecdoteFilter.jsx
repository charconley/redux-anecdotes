import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const AnecdoteFilter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(filterChange(event.target.value))
    }

    return (
        <div>Filter <input onChange={handleChange}></input></div>
    )
}

export default AnecdoteFilter