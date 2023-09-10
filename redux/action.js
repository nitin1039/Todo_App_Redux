
export const addTodo=()=>{
    return{
        type: 'TODO_HANDLER'
    }
}

export const deleteTodo=(id)=>{
    return{
        type: 'DELETE_TODO_HANDLER',
        payload: id
    }
}

export const SearchTodo=()=>{
    return{
        type: 'SEARCH_TODO_QUERY'
    }
}

export const editTodo=(editTextId, editText)=>{
    console.log(editText,editTextId)
    return{
        type: 'EDIT_TODOS',
        editTextId,
        editText,
    }
}