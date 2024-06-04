import './Task.css'
import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const Task = ({ description, completed, createdDate, typeTasks, onDelete, onCompleted, onSubmitEdit}) => {
  const [isEditing, setIsEditing] = useState(false)
  let [editedDescription, setEditedDescription] = useState(description)
  const [final, setFinal] = useState(true)
  const [distance, setDistance] = useState(formatDistanceToNow(createdDate))
  const [time, setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
      let interval

      if(isRunning) {
        interval = setInterval(()=> {
          setTime(prevTime => prevTime + 1)
        },1000)
      } else {

        if(!isRunning && time !== 0) {
          clearInterval(interval)
        }
      }
    console.log(isRunning)
      return () => clearInterval(interval)
  },[isRunning,time])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDistance = formatDistanceToNow(createdDate)
      setDistance(newDistance)
    }, 60000)

    return () => clearInterval(intervalId)
  }, [createdDate])

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

  const timerStart = () => {
    setIsRunning(true)
  }

  const timerPause = () => {
    setIsRunning(false)
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) /60)
    const seconds = time % 60

    return `${hours}ч : ${minutes}м : ${seconds}с`
  }

  const handleChange = () => {
    onCompleted()
    setIsRunning(false)
  }

  useEffect(()=> {
    if (typeTasks === 'all') {
      setIsVisible(true)
      

    } else {
      if (typeTasks === 'done') {
        if(completed) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }else {
        if (typeTasks === 'active') {
          if(completed) {
            setIsVisible(false)
          } else {
            setIsVisible(true)
          }
        }
      }
    }
console.log(typeTasks)
  },[typeTasks])

  return (
    <li className={completed ? 'completed' : ''}>
      <div className={isVisible ? 'view' : 'hidden'}>
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
              <input className='toggle-none' type='checkbox' checked={completed} onChange={handleChange} />

              {/* <button className='icon icon-edit' onClick={handleEdit}></button> */}
              {/* <button className='icon icon-destroy' onClick={onDelete}></button> */}
            </form>
          </>
        )}

        {final && (
          <>
            <form className='task-editing'>
              <input className='toggle' type='checkbox' checked={completed} onChange={handleChange} />
              <label>
                <span className='description'>{editedDescription}</span>
                <span className='timer'>{formatTime(time)}</span>
                <span className='created'>{distance}</span>
              </label>

              <button className='icon icon-edit' onClick={handleEdit}></button>
              <button className='icon icon-destroy' onClick={onDelete}></button>

            </form>
            <button className='icon icon-play' onClick={timerStart}></button>
            <button className='icon icon-pause' onClick={timerPause}></button>
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





// import './Task.css'
// import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
// import { formatDistanceToNow } from 'date-fns'

// const Task = ({ description, completed, createdDate, onDelete, onCompleted, onSubmitEdit}) => {
//   const [isEditing, setIsEditing] = useState(false)
//   let [editedDescription, setEditedDescription] = useState(description)
//   const [final, setFinal] = useState(true)
//   const [distance, setDistance] = useState(formatDistanceToNow(createdDate))
//   const taskCreationTime = useRef(new Date());
//   const [timeElapsed, setTimeElapsed] = useState(new Date(0)); // State to store elapsed time
//   const localStorageKey = `timeElapsed-${Math.random()}`;
//   const storedTime = localStorage.getItem(localStorageKey);


//  useLayoutEffect((localStorageKey) => {
//     const timerId = setInterval(() => {
//       const elapsedTime = 
//       new Date() - taskCreationTime.current; 
//       setTimeElapsed(elapsedTime);  
//     }, 1000); // Update every second
//     return () => clearInterval(timerId)
//   }, []);


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newDistance = formatDistanceToNow(createdDate)
//       setDistance(newDistance)
//     }, 60000)

//     return () => clearInterval(intervalId)
//   }, [createdDate])

//   const handleEdit = () => {
//     setIsEditing(true)
//     setFinal(false)
//   }

//   const handleDescriptionChange = (e) => {
//     setEditedDescription(e.target.value)
//     console.log(e.target.value)
//     editedDescription = e.target.value
//     console.log(editedDescription)
//     return editedDescription
//   }
//   onSubmitEdit = (event, tasks) => {
//     event.preventDefault()
//     console.log('submitEdit', editedDescription)
//     let eid = 1000
//     const editedItem = {
//       id: eid++,
//       description: editedDescription,
//       created: 'created 5 minutes ago',
//       createdDate: new Date(),
//       completed: false,
//     }
//     //
//     console.log(editedItem, tasks)
//     setFinal(true)
//     setIsEditing(false)
//   }

//   return (
//     <li className={completed ? 'completed' : ''}>
//       <div className='view'>
//         {isEditing && (
//           <>
//             <form className='task-editing' onSubmit={onSubmitEdit}>
//               <input
//                 type='text'
//                 value={editedDescription}
//                 onChange={handleDescriptionChange}
//                 onBlur={() => setIsEditing(false)}
//                 autoFocus
//                 className='editing'
//               />
//               <input className='toggle-none' type='checkbox' checked={completed} onChange={onCompleted} />

//               {/* <button className='icon icon-edit' onClick={handleEdit}></button> */}
//               {/* <button className='icon icon-destroy' onClick={onDelete}></button> */}
//             </form>
//           </>
//         )}

//         {final && (
//           <>
//             <form className='task-editing'>
//              <input className='toggle' type='checkbox' checked={completed} onChange={onCompleted} />
//               <label>
//                 <span className='description'>{editedDescription}</span>
//                 <h2>It is {new Date(timeElapsed).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' })}.</h2>
//                <span className='created'>{distance}</span>
//               </label>
//               <button className='icon icon-edit' onClick={handleEdit}></button>
//               <button className='icon icon-destroy' onClick={onDelete}></button>
//             </form>
//           </>
//         )}
//       </div>
//     </li>
//   )
// }

// Task.defaultProps = {
//   description: 'no data',
//   completed: false,
//   created: 'no data',
//   createdDate: new Date(),
//   onEdit: () => {},
//   onDelete: () => {},
//   onCompleted: () => {},
//   tasks: [],
//   onEditedTask: () => {},
//   onSubmitEdit: () => {},
//   onSubmit: () => {},
//   editedTasks: [],
//   initialTasks: [],
// }

// export default Task
