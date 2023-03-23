import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const regexSpace = new RegExp('^[^-\s][a-zA-Z0-9_\s-]+$')
    const [todos, setTodods] = useState([])
    const addTodo = todo => {
        const newTodos = [todo, ...todos]
        setTodods(newTodos)
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodods(removeArr)
    }
    const updateTodo = (todoId, newValue) => {
        setTodods(prev => prev.map((item) => item.id === todoId ? newValue : item))
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodods(updatedTodos)
    }
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}
export default TodoList