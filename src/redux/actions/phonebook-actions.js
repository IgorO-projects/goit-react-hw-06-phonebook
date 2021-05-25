import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

export const handleContactAdd = contact => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name: contact.name,
        number: contact.number,
    }
})

export const deletedContact = id => ({
    type: types.DELETE,
    payload: id,
})

export const filteredContact = event => ({
    type: types.FILTER,
    payload: event.currentTarget.value,
})