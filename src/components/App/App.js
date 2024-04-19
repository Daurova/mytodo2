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
        completed: false
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

  onDeleteTask = (id) => {
    console.log("delete ", id);
  }

  render() {
    return (
      <div className="todoapp">
        <NewTaskForm />
        <TaskList 
          tasks={this.state.tasks} 
          onEditTask={this.onEditTask} 
          onDeleteTask={this.onDeleteTask} 
        />
        <Footer />
        </div>
    );
  }
}

export default App;
