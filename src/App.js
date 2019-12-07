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
  ]);

  const [copyTodos, setCopyTodos] = useState(todos);

  const [navItems, setNavItems] = useState([
    {
      id: 'All',
      item: 'All',
      checked: true,
    },
    {
      id: 'Todo',
      item: 'Todo',
      checked: false,
    },
    {
      id: 'Done',
      item: 'Done',
      checked: false,
    },
  ]
  )

  const generateId = (todos ? todos.length + 1 : 1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: generateId,
        text,
        checked: false,
      }
      setTodos([...todos, todo]);
      setCopyTodos([...todos, todo]);
    }, [generateId, todos],
  )

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
      setCopyTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
    }, [todos],
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
      setCopyTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  )

  const onNav = useCallback(
    (id) => {
      if(id === "Done") {
        setCopyTodos(todos.filter(copyTodo => copyTodo.checked));
      } else if (id === "Todo") {
        setCopyTodos(todos.filter(copyTodo => !copyTodo.checked));
      } else {
        setCopyTodos(todos);
      }
      setNavItems(navItems.map(navItem => navItem.id === id ? {...navItem, checked: true} : {...navItem, checked: false}));
    }, [navItems, todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoNav navItems={navItems} onNav={onNav}/>
      <TodoList todos={copyTodos} onToggle={onToggle} onRemove={onRemove}/>
    </TodoTemplate>
  );
}

export default App;
