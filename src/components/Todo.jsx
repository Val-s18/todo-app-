import { Card, CardHeader, Image } from '@nextui-org/react'

function Todo ({ title, description }) {
  return (
    <Card className='rounded-md'>
      <CardHeader className='flex gap-3 m-2'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex flex-col'>
          <p className='text-md font-semibold text-secondary '>{title}</p>
          <p className='text-small text-default-500'>{description}</p>

        </div>
      </CardHeader>
    </Card>
  )
}

export default Todo
