import React from 'react'

const TodoForm = (props) => {
    return (
        <form onSubmit={props.handleTodoSubmit}>
            <input
                type="text"
                autoFocus
                className="new-todo"
                placeholder="what needs to be done?"
                value={props.currentTodo}
                onChange={props.handleNewTodoChange}
            />
        </form>
    )
}
export default TodoForm