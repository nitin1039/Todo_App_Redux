import { combineReducers } from "redux"

const todoinitial={
    data: [],
    searchQuery:''
}



const todolistReducer = (state = todoinitial, action) => {


    switch (action.type) {
        case 'TODO_HANDLER':
            return {
                ...state,
                data: [...state.data,{ id: Date.now(), value: action.payload }]
            }
            case 'DELETE_TODO_HANDLER':
                return{
                    ...state,
                    data: state.data.filter((item)=>item.id!==action.payload)
                }
                case 'SEARCH_TODO_QUERY':
                    return{
                        ...state,
                        searchQuery: action.payload
                    }
                    case 'EDIT_TODOS':
                        return{
                            ...state,
                            data: state.data.map((todo) =>
                            todo.id === action.editTextId ? { ...todo, value: action.editText } : todo
                          ),
                        }
        default:
            return state
    }

}

export default combineReducers({
  
    todolistReducer
})