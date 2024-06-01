import React from 'react';
import './Task.css'



class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(), 1000) 
   }
  
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  
  tick(){
    this.setState({date: new Date()})
  }
  



  render() {
    const { description, completed, created, onEdit, onDelete } = this.props;



    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            readOnly
          />
          <label>
            <span className="description">{description}</span>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      </li>
    );
  }
}



export default Task;