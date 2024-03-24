import { SlSocialFacebook, SlSocialGoogle, SlSocialInstagram } from 'react-icons/sl'
function CardReseaux
() {
  return (
    <>
      <div className='flex m-5 justify-center gap-4'>
        <div className='w-12 h-12 bg-secondary-500 rounded-md flex justify-center items-center'>
          <SlSocialGoogle
            size={30}
            color='white'
          />
        </div>
        <div className='w-12 h-12 bg-secondary-500 rounded-md flex justify-center items-center'>
          <SlSocialInstagram
            size={30}
            color='white'
          />
        </div>
        <div className='w-12 h-12 bg-secondary-500 rounded-md flex justify-center items-center'>
          <SlSocialFacebook
            size={30}
            color='white'
          />
        </div>
      </div>
    </>

  )
}

export default CardReseaux
