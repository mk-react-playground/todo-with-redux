import type from '../actions/type';


const initialState = [];

const todos = (state = initialState, action) => {
    switch(action.type) {
        case type.CREATE:
            console.log(action.todo)
            return [
                ...state,
                action.todo
            ]
                
        case type.REMOVE:
            return state.filter(todo => todo.id !== action.id)
        
        case type.TOGGLE:
            return state.map(todo => {
                if ( todo.id === action.id ) {
                    todo.checked = !todo.checked;
                }
                return todo;
            })
        
            default: return state;
    }
}

export default todos;