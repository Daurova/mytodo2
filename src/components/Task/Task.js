import './Task.css'
import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const Task = ({ description, completed, createdDate, onDelete, onCompleted, onSubmitEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  let [editedDescription, setEditedDescription] = useState(description)
  const [final, setFinal] = useState(true)
  const [distance] = useState(formatDistanceToNow(createdDate))
  //  const [createdAgo, setCreatedAgo]=useState(createdDate)

  //  useEffect(() => {
  // console.log({created})}, [])
  useEffect(() => {}, [])

  const handleEdit = () => {
    setIsEditing(true)
    setFinal(false)
  }

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value)
    console.log(e.target.value)
    editedDescription = e.target.value
    console.log(editedDescription)
    return editedDescription
  }
  onSubmitEdit = (event, tasks) => {
    event.preventDefault()
    console.log('submitEdit', editedDescription)
    let eid = 1000
    const editedItem = {
      id: eid++,
      description: editedDescription,
      created: 'created 5 minutes ago',
      createdDate: new Date(),
      completed: false,
    }
    //
    console.log(editedItem, tasks)
    setFinal(true)
    setIsEditing(false)
  }

  return (
    <li className={completed ? 'completed' : ''}>
      <div className='view'>
        {isEditing && (
          <>
            <form className='task-editing' onSubmit={onSubmitEdit}>
              <input
                type='text'
                value={editedDescription}
                onChange={handleDescriptionChange}
                onBlur={() => setIsEditing(false)}
                autoFocus
                className='editing'
              />
              <input className='toggle-none' type='checkbox' checked={completed} onChange={onCompleted} />

              {/* <button className='icon icon-edit' onClick={handleEdit}></button> */}
              {/* <button className='icon icon-destroy' onClick={onDelete}></button> */}
            </form>
          </>
        )}

        {final && (
          <>
            <form className='task-editing'>
              <input className='toggle' type='checkbox' checked={completed} onChange={onCompleted} />
              <label>
                <span className='description'>{editedDescription}</span>
                <span className='created'>{distance}</span>
              </label>
              <button className='icon icon-edit' onClick={handleEdit}></button>
              <button className='icon icon-destroy' onClick={onDelete}></button>
            </form>
          </>
        )}
      </div>
    </li>
  )
}

Task.defaultProps = {
  description: 'no data',
  completed: false,
  created: 'no data',
  createdDate: new Date(),
  onEdit: () => {},
  onDelete: () => {},
  onCompleted: () => {},
  tasks: [],
  onEditedTask: () => {},
  onSubmitEdit: () => {},
  onSubmit: () => {},
  editedTasks: [],
  initialTasks: [],
}

export default Task
