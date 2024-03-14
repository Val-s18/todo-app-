import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { FaPen } from 'react-icons/fa'
import { useTodos } from '../hooks/todosHook'
function Todo ({ openEditModal, todo }) {
  const { title, description, _id } = todo
  const { deleteTodo } = useTodos()
  return (
    <>

      <Card className='rounded-md'>
        <CardHeader className='flex gap-3 m-2 '>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width={40}
          />
          <div className='flex flex-col flex-grow'>
            <p className='text-md font-semibold text-secondary '>{title}</p>
            <p className='text-small text-default-500'>{description}</p>
          </div>
          <div
            className=' flex flex-col'
          >
            <Button
              isIconOnly
              variant='light'
              onPress={() => deleteTodo(_id)}
            >
              <FaRegTrashCan color='red' />
            </Button>
          </div>
          <div
            className=' flex flex-col'
          >
            <Button
              isIconOnly
              variant='light'
              onPress={() => openEditModal(todo)}
            >
              <FaPen />
            </Button>
          </div>

        </CardHeader>
      </Card>
    </>
  )
}

export default Todo
