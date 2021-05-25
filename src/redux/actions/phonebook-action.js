import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

export const handlePhoneAdd = contact => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name: contact.name,
        number: contact.number,
    }
})

export const deletedContactbyId = id => ({
    type: types.DELETE,
    payload: id,
})