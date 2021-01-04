import { Reducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const tasksListReducer: Reducer<any, any> = (state = [], { type, payload }) => {
    switch (type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: payload,
                    done: false,
                },
            ];

        case 'REMOVE':
            let removeState = [...state];
            removeState.splice(payload, 1);

            return removeState;

        case 'IS_DONE':
            let isDoneState = [...state];
            isDoneState[payload].done === false
                ? isDoneState.splice(payload, 1, { ...isDoneState[payload], done: true })
                : isDoneState.splice(payload, 1, { ...isDoneState[payload], done: false });

            return isDoneState;

        /* case 'EDIT':
            let editState = [...state];

            const { index, title } = payload;

            editState.splice(index, 1, { ...editState[index], title: title });

            return editState; */

        default:
            return state;
    }
};

export default tasksListReducer;
