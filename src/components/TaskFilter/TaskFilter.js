import './TaskFilter.css'

const TaskFilter = ({ onAll, onActive, onDone }) => {
  return (
    <ul className='filters'>
      <li>
        <button className='selected' onClick={onAll}>
          All
        </button>
      </li>
      <li>
        <button onClick={onActive}>Active</button>
      </li>
      <li>
        <button className='completed' onClick={onDone}>
          Completed
        </button>
      </li>
    </ul>
  )
}

TaskFilter.defaultProps = {
  onAll: () => {},
  onActive: () => {},
  onDone: () => {},
}

export default TaskFilter
