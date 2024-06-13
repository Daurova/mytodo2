import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

import Footer from '../Footer'
import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../../components/NewTaskForm'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'task 1',
      created: new Date(),
      createdDate: new Date(),
      completed: false,
    },
    {
      id: 2,
      description: 'task 2',
      created: new Date(),
      createdDate: new Date(),
      completed: false,
    },
    {
      id: 3,
      description: 'task 4',
      created: new Date(),
      createdDate: new Date(),
      completed: false,
    },
    {
      id: 5,
      description: 'task 5',
      created: new Date(),
      createdDate: new Date(),
      completed: false,
    },
    {
      id: 8,
      description: 'task 10',
      created: new Date(),
      createdDate: new Date(),
      completed: false,
    },
  ])
  const [description, setDescription] = useState('')
  const [typeTasks, setTypeTasks] = useState('all')

  const onEditTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isEditing: true,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  const onCompletedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  const onDeleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const completed = (id) => {
    console.log(id)
  }

  const onInputChange = (event) => {
    setDescription(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onItemAdded(description)
    setDescription('')
  }

  const getTasksToDoCount = () => {
    return tasks.filter(task => !task.completed).length
  }

  const onItemAdded = (description) => {
    const newItem = {
      id: tasks.length + 1,
      description: description,
      created: 'created 5 minutes ago',
      createdDate: new Date(),
      completed: false
    }

    setTasks([...tasks, newItem])
    console.log(formatDistanceToNow(new Date()))
  }

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed)
    setTasks(updatedTasks)
  }

  const onAll = () => {
    setTypeTasks('all')
  }

  const onActive = () => {
    setTypeTasks('active')
  }

  const onDone = () => {
    setTypeTasks('done')
  }

  return (
    <div className='todoapp'>
      <NewTaskForm
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        value={description}
      />
      <TaskList
        tasks={tasks}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
        completed={completed}
        onCompletedTask={onCompletedTask}
        typeTasks={typeTasks}
      />
      <Footer
        tasksToDoCount={getTasksToDoCount}
        onAll={onAll}
        onActive={onActive}
        onDone={onDone}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  )
}

export default App




