import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'

import Footer from '../Footer'
import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../../components/NewTaskForm'

import '../../index'

class App extends Component {
  maxId = 100
  editedTasks = []
  doneTasks = []
  typeTasks = 'all'
  initialTasks = [
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
  ]

  state = {//changed
    tasks: [...this.initialTasks],
    filteredTasks:[...this.initialTasks],
    isFilterActive: false,
    typeTasks: 'all'
  }

  onEditTask = (id) => {
    console.log('edit ', id)
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isEditing: true, // добавляем флаг для редактирования
        }
      }
      return task
    })

    this.setState({ tasks: updatedTasks })
   
  }

  
  onCompletedTask = (id) => {
    console.log('complete', id)
    this.setState (({ tasks })=>{
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
  
      return { tasks: updatedTasks}

    })
  } 

  onDeleteTask = (id) => {
    console.log('delete ', id)
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el)=> el.id ===id)
      const newTasks = [
        ...tasks.slice(0, idx),
        ...tasks.slice(idx + 1)
      ]
      return { tasks: newTasks }
    })
  }

  completed = (id) => {
    console.log(id)  }
  
  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      description: event.target.value
    })
  }
   
  onSubmit = (event) => {
    console.log('submit')
    event.preventDefault()
    this.onItemAdded(this.state.description)
    this.setState({
      description: ''
    })
  }


  getTasksToDoCount = () => {
    return this.state.tasks.filter(task => !task.completed).length
  }
  onItemAdded=(description)=>{
    console.log('item added')
    const newItem ={
      id: this.maxId++,
      description: description,
      created: 'created 5 minutes ago',
      createdDate: new Date(),
      completed: false
    }

    this.setState(({tasks})=>{
      const newArr=[
        ...tasks,
        newItem
      ]
      return {
        tasks: newArr
      }
    }
    )
    console.log(formatDistanceToNow(new Date()))
  }

  clearCompletedTasks = () => {
    const updatedTasks = this.state.tasks.filter(task => !task.completed)
    this.setState({ tasks: updatedTasks })}

  onAll=()=>{
    console.log('onAll')
    this.setState({ typeTasks: 'all' })
  }
  onActive=()=>{
    console.log('onActive')
    this.setState({ typeTasks: 'active' })
  }
  onDone=()=>{
    console.log('onDone')
    this.setState({ typeTasks: 'done' })
  }

render() {
    return (
      <div className='todoapp'>
        <NewTaskForm
          onInputChange={this.onInputChange}
          onSubmit = {this.onSubmit}
          value={this.state.description}
        />
        <TaskList 
          tasks={this.state.tasks}
          onEditTask={this.onEditTask} 
          onDeleteTask={this.onDeleteTask}
          completed = {this.completed} 
          onCompletedTask={this.onCompletedTask}
          typeTasks={this.state.typeTasks}
        />
        <Footer
          tasksToDoCount = {this.getTasksToDoCount}
          onAll={this.onAll}
          onActive={this.onActive}
          onDone={this.onDone}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </div>
    )
  }
}

App.defaultProps = {
  tasks: [], 
  filteredTasks: [], 
  onEditTask:() => {},
  onCompletedTask:() => {},
  onDeleteTask:() => {},
  onInputChange:() => {},
  onSubmit:() => {},
  getTasksToDoCount:() => {},
  onItemAdded:() => {},
  clearCompletedTasks:() => {},
  onAll:() => {},
  onActive:() => {},
  onDone:() => {}
}

export default App

