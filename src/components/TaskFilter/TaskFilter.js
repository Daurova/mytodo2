import './TaskFilter.css';


const TaskFilter = ()=>{
    return(
<ul className="filters">
            <li>
              <button className="selected">All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button className='completed'>Completed</button>
            </li>
          </ul>
    )
}

export default TaskFilter;