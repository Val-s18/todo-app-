import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlusCircle } from 'react-icons/fa'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        className='fixed bottom-0 right-0 w-16 h-16 z-10'
        color='primary'
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
