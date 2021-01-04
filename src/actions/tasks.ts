export const add = (title: string) => {
    return {
        type: 'ADD',
        payload: title,
    };
};

export const remove = (index: number) => {
    return {
        type: 'REMOVE',
        payload: index,
    };
};

export const isDone = (index: number) => {
    return {
        type: 'IS_DONE',
        payload: index,
    };
};

/* export const edit = (index: number, title: string) => {
    return {
        type: 'EDIT',
        payload: { index, title },
    };
}; */
