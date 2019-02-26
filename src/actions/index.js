import type from './type';

let id = 0;

export const create = (text) => {
    console.log(text);
    return {
        type: type.CREATE,
        todo: {
            id: id++,
            text,
            checked: false,
        }
    }
};

export const remove = (removeId) => ({
    type: type.REMOVE,
    id: removeId,
});

export const toggle = (toggleId) => ({
    type: type.TOGGLE,
    id: toggleId
});