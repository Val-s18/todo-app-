import { TbDiscountCheck } from 'react-icons/tb'
import { LuBadgeAlert } from 'react-icons/lu'
function cardAjot () {
  return (
    <>
      <div>
        <h2 className=' mx-4 text-3xl font-semibold flex'>Actions rapides</h2>
        <div className='flex  lg:flex    '>

          <div className='bg-violet-200 w-56 p-5 m-6 lg:w-1/2 flex justify-center items-center gap-4 border-4 border-violet-300 rounded-2xl lg:'>
            <TbDiscountCheck
              size={28}
              className='text-violet-700 '
            />
            <h2
              className='font-semibold '
            >
              Ajouter une tâche
            </h2>
          </div>

          <div className='bg-violet-200  lg:w-1/2 h-24 p-5 m-6 flex justify-center items-center gap-4 border-4 border-violet-300 rounded-2xl'>
            <LuBadgeAlert
              size={28}
              className='text-violet-700 '
            />
            <h2
              className='font-semibold '
            >
              Nombre de points
            </h2>
          </div>

        </div>

      </div>

    </>

  )
}

export default cardAjot
