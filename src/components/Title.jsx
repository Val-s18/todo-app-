export default function title ({ todos }) {
  const count = todos.length

  return (

    <>
      <div className='flex items-center '>
        <h2
          className='my-4 mx-4 text-3xl font-semibold '
        >
          Mes tâches à faire
        </h2>
        <div className='bg-violet-500 flex items-center w-10 justify-center text-white rounded-md'>
          <h2>{count}</h2>

        </div>

      </div>

      {/* <Progress color='secondary' value={50} /> */}

    </>

  )
}
