import { Button, Input, Select, SelectItem, Switch, Textarea } from '@nextui-org/react'
import { useState } from 'react'

function TodoForm ({ todoToEdit, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: todoToEdit?.title || '',
    description: todoToEdit?.description || '',
    status: todoToEdit?.status[0] || 'TODO',
    important: true

  })

  const handlechange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(formData, todoToEdit?._id)
    onClose()
  }

  return (

    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5'
    >
      <Input
        name='title'
        type='text'
        label='Title'
        labelPlacement='inside'
        variant='flat'
        value={formData.title}
        onChange={handlechange}
      />
      <Textarea
        name='description'
        type='text'
        label='Description'
        labelPlacement='inside'
        minRows={3}
        maxRows={10}
        variant='flat'
        value={formData.description}
        onChange={handlechange}
      />
      <Select
        name='status'
        label='Status'
        variant='flat'
        onChange={handlechange}
        value={formData.status}
        defaultSelectedKeys={[formData.status]}
      >
        <SelectItem key='Todo' value='Todo' textValue='Todo'>todo</SelectItem>
        <SelectItem key='In-Progress' value='In-Progress' textValue='In-Progress'>In-Progress</SelectItem>
        <SelectItem key='Done' value='Done' textValue='Done'>Done</SelectItem>
        <SelectItem key='Canceled' value='Canceled' textValue='Canceled'>Canceled</SelectItem>
        <SelectItem key='Archived' value='Archived' textValue='Archived'>Archived</SelectItem>
      </Select>
      <Switch
        label='Important'
        value={formData.important}
        isSelected={formData.important}
        onValueChange={
          (isChecked) => setFormData({ ...formData, important: isChecked })
        }

      >
        Important
      </Switch>
      <Button
        type='submit'
      >
        {todoToEdit ? 'Mettre a jour ' : 'Ajouter'}
      </Button>
    </form>
  )
}

export default TodoForm
