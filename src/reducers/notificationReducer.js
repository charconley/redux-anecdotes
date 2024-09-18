import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        newMessage(state, action) {
            return action.payload
        },
        hideMessage(state, action) {
            return ''
        }
    }
})

export const { newMessage, hideMessage } = notificationSlice.actions

export const setNotification = (text, timeout) => {
    return dispatch => {
        dispatch(newMessage(text))
        setTimeout(() => {
            dispatch(hideMessage())
        }, timeout * 1000) 
    }
}

export default notificationSlice.reducer