import Todo from './Todo'

function TodoList ({ todos }) {
  return (
    <div className='flex flex-col lg:flex-row gap-4 py-2 px-4 '>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo._id}
            title={todo.title}
            description={todo.description}
          />
        )
      })}
    </div>
  )
}

export default TodoList
