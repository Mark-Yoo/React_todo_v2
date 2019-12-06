import React, {useState, useCallback} from 'react';
import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import TodoNav from './Components/TodoNav';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: false,
    },
    {
      id: 2,
      text: "리액트의 기초 알아보기2",
      checked: true,
    },
    {
      id: 3,
      text: "리액트의 기초 알아보기3",
      checked: false,
    },
  ])

  const generateId = (todos ? todos.length + 1 : 1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: generateId,
        text,
        checked: false,
      }
      setTodos([...todos, todo]);
    }, [generateId, todos],
  )

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
    }, [todos],
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
      <TodoNav/>
    </TodoTemplate>
  );
}

export default App;
