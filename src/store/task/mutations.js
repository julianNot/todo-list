export const setUserLog = (state, user) => {
    state.userLog = user
    state.todos = user.todos
}

export const addTodo = ( state, todo ) => {
    state.todos.push(todo)
}

export const deleteTodo = ( state, todo ) => {
    state.todos = state.todos.filter( todoList => todoList.title != todo.title && todoList.descript != todo.descript)
}

export const updateTodo = ( state, todo ) => {
    let index = state.todos.findIndex( t => t.id == todo.id )
    if(index != -1){
        console.log(todo);
    }
}

export const setCompleted = ( state, todo ) => {
    let index = state.todos.findIndex( todoList => todoList.title == todo.title && todoList.descript == todo.descript)
    state.todos[index].isCompleted = true
}

