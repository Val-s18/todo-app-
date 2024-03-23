import { Progress } from '@nextui-org/react'
import { GiPodiumWinner } from 'react-icons/gi'
import TitleHello from './TitleHello'
function CardGame () {
  return (
    <>
      <div className='lg:flex-grow'>
        <TitleHello />
        <div className='bg-violet-300 rounded-md mr-4 ml-4 m-5 '>
          <div className='flex items-center'>
            <div
              className='bg-violet-300  rounded-md p-4'
            >
              <GiPodiumWinner
                className='text-white bg-violet-400 p-2 rounded-md '
                size={100}
              />
            </div>
            <div>
              <h2 className='font-semibold '>Niveau 1</h2>
              <h2 className='font-semibold '>Progression 50%</h2>
            </div>
          </div>

          <div>
            <Progress color='secondary' value={50} />
          </div>
        </div>

      </div>

    </>

  )
}

export default CardGame
