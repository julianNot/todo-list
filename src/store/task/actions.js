export const addTodoAction = ( { commit }, todo ) => {
    commit('addTodo', todo)
}

export const deleteTodo = ( { commit }, id ) => {
    commit('deleteTodo', id)
}

export const updateTodo = ( { commit },todo ) => {
    commit('updateTodo', todo)
}

export const markCompleted = ( { commit }, todo ) => {
    commit('setCompleted', todo) 
}