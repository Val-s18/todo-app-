import { useEffect, useState } from 'react'

function Clock (props) {
  // initailise l'étant local de l'horloge

  const [date, setDate] = useState(new Date())

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
    <h1>{date.toLocaleTimeString()}:{date.getMilliseconds()}</h1>

  )
}

export default Clock
