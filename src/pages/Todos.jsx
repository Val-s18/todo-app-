import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHook'
import Title from '../components/Title'
import Clock from '../components/Clock'
import CardAjout from '../components/CardAjout'
import CardGame from '../components/CardGame'

function Todos () {
  const { todos } = useTodos()
  return (
    <>
      <div className='lg:flex justify-center'>
        <Clock />

      </div>
      <div className=''>
        <div className='lg: '>
          <CardGame className=' w-1/2 ' />
          <CardAjout className=' w-1/2 ' />
        </div>

      </div>
      <Title todos={todos} />
      <div className=' lg:flex flex-wrap  justify-center '>
        <TodoList
          className=''
          todos={todos}
        />
      </div>

      <AddTodo />
    </>
  )
}
export default Todos
