// import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


export const handleContactAdd = createAction("phonebook/add", contact => {
    return {
        payload: {
            id: uuidv4(),
            name: contact.name,
            number: contact.number,
        }
    }
})

export const deletedContact = createAction("phonebook/delete")

export const filteredContact = createAction("phonebook/filter", event => {
    return {
        payload: event.currentTarget.value
    }
})

// export const handleContactAdd = contact => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name: contact.name,
//         number: contact.number,
//     }
// })

// export const deletedContact = id => ({
//     type: types.DELETE,
//     payload: id,
// })

// export const filteredContact = event => ({
//     type: types.FILTER,
//     payload: event.currentTarget.value,
// })