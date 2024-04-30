import './Footer.css'
import TaskFilter from '../TaskFilter/TaskFilter'

const Footer = ({ tasksToDoCount, onAll, onActive, onDone, clearCompletedTasks }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{tasksToDoCount()} tasks to do</span>
      <TaskFilter onAll={onAll} onActive={onActive} onDone={onDone} />
      <button className='clear-completed' onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  tasksToDoCount: () => 0,
  onAll: () => {},
  onActive: () => {},
  onDone: () => {},
  clearCompletedTasks: () => {}
}
export default Footer
