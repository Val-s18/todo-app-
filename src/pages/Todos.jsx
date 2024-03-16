import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHook'
import Title from '../components/Title'
function Todos () {
  const { todos } = useTodos()
  return (
    <>

      <Title />
      <TodoList
        todos={todos}
      />
      <AddTodo />
    </>
  )
}
export default Todos
