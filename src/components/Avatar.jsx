import { Avatar } from '@nextui-org/react'
import NameUser from './NameUser'

export default function avatar () {
  return (
    <div className='flex items-center my-4 mx-4 font-regular text-white'>
      <NameUser />
      <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' size='lg' />
    </div>

  )
}
