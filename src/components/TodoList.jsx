import { useState } from 'react'
import AddTodoModal from './AddTodoModal'
import Todo from './Todo'
import { useDisclosure } from '@nextui-org/react'

function TodoList ({ todos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, setTodoToEdit] = useState()

  const handleOpenEditModal = (todo) => {
    setTodoToEdit(todo)
    onOpen()
  }

  if (!todos || todos.length < 1) {
    return (
      <div className='w-full flex items-center justify-center  '>
        <h2 className='font-semibold text-xl'> Aucun Todo 🐙 </h2>
      </div>
    )
  }

  return (
    <>
      <div className=' lg:flex justify-center w-full '>
        <div className='flex flex-col w-full lg:flex-row gap-3 overflow-visibility  flex-wrap justify-center '>

          {todos.map((todo) => {
            return (

              <Todo
                key={todo._id}
                todo={todo}
                openEditModal={handleOpenEditModal}
              />

            )
          })}
        </div>

        <AddTodoModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          todoToEdit={todoToEdit}
        />

      </div>

    </>

  )
}

export default TodoList
