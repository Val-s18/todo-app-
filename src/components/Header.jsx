import { Image } from '@nextui-org/react'
import Avatar from './Avatar'

function header () {
  return (
    <div className='flex justify-between bg-secondary items-center'>
      <div className='flex gap-4 items-center'>
        <Image
          className='mx-4'
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <p className='mx-4 text-xl font-semibold text-white'>Todo</p>
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  )
}

export default header
