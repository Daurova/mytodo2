import React, { Component } from 'react';
import '../../index'
import Footer from '../Footer';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../../components/NewTaskForm';
import {formatDistanceToNow} from 'date-fns';


class App extends Component {
  maxId=100;
    editedTasks=[]
    doneTasks=[];
    

    initialTasks = [
      {
        id: 1,
        description: "task 1",
        created: new Date(),
        createdDate: new Date(),
        completed: false
      },
      {
        id: 2,
        description: "task 2",
        created: new Date(),
        createdDate: new Date(),
        completed: false
      },
      {
        id: 3,
        description: "task 4",
        created: new Date(),
        createdDate: new Date(),
        completed: false
      },
      {
        id: 5,
        description: "task 5",
        created: new Date(),
        createdDate: new Date(),
        completed: false
      },
      {
        id: 8,
        description: "task 10",
        created: new Date(),
        createdDate: new Date(),
        completed: false
      }
    ]
  

  state = {//changed
    tasks: [...this.initialTasks],
    filteredTasks:[...this.initialTasks],
    isFilterActive: false

  };


  onEditTask = (id) => {
    console.log("edit ", id);
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
          return {
              ...task,
              isEditing: true // добавляем флаг для редактирования
          };
      }
      return task;
  });

  this.setState({ tasks: updatedTasks });
   
    }

  
  onCompletedTask=(id) => {
    console.log('complete', id);
    this.setState (({tasks})=>{
      const updatedTasks = tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      });
  
      return { tasks: updatedTasks};

    })
  } 

  onDeleteTask = (id) => {
    console.log("delete ", id);
    this.setState(({tasks})=>{
      const idx = tasks.findIndex((el)=>el.id===id);
      const newTasks = [
        ...tasks.slice(0,idx),
        ...tasks.slice(idx+1)
      ];
      return {tasks: newTasks};
    });
  }

  completed = (id)=>{
console.log(id)  }
  
  onInputChange=(event)=>{
    console.log(event.target.value);
    this.setState({
      description: event.target.value
    });
  }
   
  onSubmit = (event)=>{
    console.log('submit')
    event.preventDefault();
    this.onItemAdded(this.state.description);
    this.setState({
      description:''
    });
  };


  getTasksToDoCount = () => {
    return this.state.tasks.filter(task => !task.completed).length;
  };
  onItemAdded=(description)=>{
    console.log('item added');
    const newItem ={
      id: this.maxId++,
      description: description,
      created: "created 5 minutes ago",
      createdDate: new Date(),
      completed: false
    }

    this.setState(({tasks})=>{
      const newArr=[
        ...tasks,
        newItem
      ];
      return {
        tasks: newArr
      }
    }
  )
  }
  


  clearCompletedTasks = () => {
    const updatedTasks = this.state.tasks.filter(task => !task.completed);
    this.setState({ tasks: updatedTasks })}

onAll=()=>{
  console.log('onAll')
    this.setState(({tasks})=>{
    const allTasks = this.initialTasks;
    this.setState({ filteredTasks: allTasks, isFilterActive: false })
  });
}
 onActive=({filteredTasks})=>{
  console.log("onActive")
  const activeTasks = this.state.tasks.filter(task => !task.completed);
  this.setState({ filteredTasks: activeTasks, isFilterActive: true});
}
  onDone=({filteredTasks})=>{
    console.log('onDone')
    const doneTasks = this.state.tasks.filter(task => task.completed);
    this.setState({ filteredTasks: doneTasks, isFilterActive: true });

  }
  


  render() {

    return (
      <div className="todoapp">
        <NewTaskForm
        onInputChange={this.onInputChange}
        onSubmit = {this.onSubmit}
        value={this.state.description}
        />
        <TaskList 
          tasks={this.state.isFilterActive ? 
            this.state.filteredTasks : this.state.tasks}
          onEditTask={this.onEditTask} 
          onDeleteTask={this.onDeleteTask}
          completed = {this.completed} 
          onCompletedTask={this.onCompletedTask}
          onDone = {this.onDone}
          onActive={this.onActive}
          onAll={this.onAll}
        />
        <Footer
          tasksToDoCount = {this.getTasksToDoCount}
          onAll={this.onAll}
          onActive={this.onActive}
          onDone={this.onDone}
          clearCompletedTasks={this.clearCompletedTasks}

        />
        </div>
    );
  }
}

export default App;
