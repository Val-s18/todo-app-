import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlusCircle } from 'react-icons/fa'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        className=' w-16 h-16 mx-auto'
        color='secondary'
        radius='full'
        variant='shadow'
        isIconOnly
        onClick={onOpen}
      >
        <FaPlusCircle
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
    </>
  )
}

export default AddTodo
