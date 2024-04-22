import React, { Component } from 'react';
import '../../index'
import Footer from '../Footer';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../../components/NewTaskForm';
import {formatDistanceToNow} from 'date-fns';
const distance = formatDistanceToNow(new Date())



class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: "task 1",
        created: distance,
        createdDate: new Date(),
        completed: true
      },
      {
        id: 2,
        description: "task 2",
        created: "created 5 minutes ago",
        createdDate: new Date(),
        completed: false
      },
      {
        id: 3,
        description: "task 4",
        created: "created 5 minutes ago",
        createdDate: new Date(),
        completed: false
      },
      {
        id: 5,
        description: "task 5",
        created: "created 5 minutes ago",
        createdDate: new Date(),
        completed: false
      },
      {
        id: 8,
        description: "task 10",
        created: "created 5 minutes ago",
        createdDate: new Date(),
        completed: false
      }
    ]
  }

  onEditTask = (id) => {
    console.log("edit ", id);
   
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
  
      return { tasks: updatedTasks };

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
  

  render() {
    return (
      <div className="todoapp">
        <NewTaskForm />
        <TaskList 
          tasks={this.state.tasks} 
          onEditTask={this.onEditTask} 
          onDeleteTask={this.onDeleteTask}
          completed = {this.completed} 
          onCompletedTask={this.onCompletedTask}
        />
        <Footer />
        </div>
    );
  }
}

export default App;
