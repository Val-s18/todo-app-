import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { FaPlus, FaRegTrashCan } from 'react-icons/fa6'
import { FaPen } from 'react-icons/fa'
import { useTodos } from '../hooks/todosHook'
function Todo ({ openEditModal, todo }) {
  const { title, description, _id, important, status } = todo
  const { deleteTodo } = useTodos()
  const importante = important
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
          <div className='flex flex-col flex-grow lg: w-40'>
            <p className='text-md font-semibold text-secondary '>{title}</p>
            <p className='text-small text-default-500'>{description}</p>
            <p>{status}</p>
            {
              importante
                ? (
                  <p>{important} <FaPlus /> </p>
                  )
                : (<p>{important}  </p>)
            }
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
