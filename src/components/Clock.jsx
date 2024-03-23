import { useEffect, useState } from 'react'
import { BsCalendar2Date } from 'react-icons/bs'

function Clock (props) {
  // initailise l'étant local de l'horloge

  const [date, setDate] = useState(new Date())

  // je fait un +1 car le tableau commence a 0 donc je n'ai pas le bon mois

  const Month = date.getMonth() + 1

  /**
 * Fonction pour mettre à jour la date de l'horloge
 */
  const tick = () => {
    setDate(new Date())
  }

  /**
   * Méthodes fournie par React s'éxécute à l'apparition du composant
   * la fonction retournée est automatique appelé à la disparition
   */

  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, props.interval)

    return () => {
      clearInterval(interval)
    }
  }, [props.interval])

  // On retourne l'affichage du composant

  return (
    <div
      className='bg-slate-100  p-1 flex items-center gap-2 justify-content justify-center rounded-xl pr-2 pl-2 m-4 max-w-40 lg:m-4'
    >
      <BsCalendar2Date
        className='text-violet-400'
      />
      <h1 className='text-violet-400'>{date.getDate()}/0{Month}/{date.getFullYear()}</h1>
    </div>

  )
}

export default Clock
