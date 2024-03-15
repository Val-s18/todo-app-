import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { Navbar } from '@nextui-org/react'
import { useTodos } from '../hooks/todosHook'

function Todos () {
  const { todos } = useTodos()
  return (
    <>
      {/* <Clock interval='1000' /> */}

      <TodoList
        todos={todos}
      />
      <Navbar className='sticky bottom-0 flex p-3 '>
        <AddTodo />
      </Navbar>
    </>
  )
}
export default Todos
