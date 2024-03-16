import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa6'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        className=' fixed  bottom-0 right-0 w-16 h-16 m-4 '
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
    </>
  )
}

export default AddTodo
