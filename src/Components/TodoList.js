import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return(
    <div className="TodoList">
      {todos.map(todo => <TodoListItem onRemove={onRemove} onToggle={onToggle} todo={todo} key={todo.id}/>)}
    </div>
  )
}

export default TodoList;