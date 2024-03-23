import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa6'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div
        className='fixed bottom-0 flex justify-center  w-full h-16 bg-slate/40 backdrop-blur-md z-10'

      >
        <Button
          className='fixed bottom-0 justify-center  w-16 h-16 m-4 z-10'
          color='secondary'
          radius='full'
          isIconOnly
          onClick={onOpen}
        >
          <FaPlus
            color='white'
            size={35}
          />
        </Button>
        <AddTodoModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          onAddTodo={onAddTodo}
        />
      </div>
    </>
  )
}

export default AddTodo
