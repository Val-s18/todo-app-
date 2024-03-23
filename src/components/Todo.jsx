import { Accordion, AccordionItem, Button, Card, CardHeader } from '@nextui-org/react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { FaPen } from 'react-icons/fa'
import { GrStatusWarning } from 'react-icons/gr'
import { useTodos } from '../hooks/todosHook'
import { LuTrophy } from 'react-icons/lu'

function Todo ({ openEditModal, todo }) {
  const { title, description, _id, important, status } = todo
  const { deleteTodo } = useTodos()
  const importante = important

  return (
    <>

      <Card className='rounded-md gap-2 m-3 lg:w-2/5 flex flex-wrap'>
        <CardHeader className='flex  w-full gap-2'>
          <div
            className='bg-violet-400  rounded   text-white'
          >

            <LuTrophy
              className='w-12 h-12 p-1 '
              radius='sm'
            />

          </div>

          <div className='flex flex-col flex-grow lg:w-50 gap-1 '>
            <Accordion disabledKeys={['2']}>

              <AccordionItem
                key='1' aria-label='Accordion 1' subtitle={status} title={title}
              >

                {description}

              </AccordionItem>

            </Accordion>
            {/* <p className='text-md font-semibold text-secondary '>{title}</p>
            <p className='text-small text-default-500'>{description}</p> */}
          </div>

          <div
            className='flex'
          >

            {/* <p className='lowercase'>{status}</p> */}

          </div>
          <div
            className=' flex flex-col'
          >
            <Button
              className='w-8 h-8'
              isIconOnly
              variant='light'
              onPress={() => deleteTodo(_id)}
            >
              <FaRegTrashCan
                className='w-6 h-6'
                color='red'
              />
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
              <FaPen
                className='w-5 h-5  text-violet-600'
              />
            </Button>

          </div>

          {
              importante
                ? (
                  <div className=' w-12 h-10 absolute top-0 right-0  bg-violet-100 flex justify-center items-center rounded-bl-lg'>{important}
                    <GrStatusWarning
                      className='w-6 h-6 text-orange-400     '
                    />
                  </div>
                  )
                : (<p>{important}  </p>)
            }

        </CardHeader>
      </Card>

    </>
  )
}

export default Todo
