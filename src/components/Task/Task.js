import './Task.css'


const Task = ({ description, completed, created, onEdit, onDelete }) => {
    return(
        <li className={completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={completed}></input>
            <label>
              <span className="description">{description}</span>
              <span className="created">{created}</span>
            </label>
            <button className="icon icon-edit" onClick={onEdit}></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
          </div>
      </li>
    )
}

export default Task;