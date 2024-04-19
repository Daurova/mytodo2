import Task from '../Task/Task'
import './TaskList.css'

const TaskList = ({ tasks = [], onEditTask, onDeleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(({ id, description, completed, created }) => {
        return (
          <Task
            key={id}
            description={description}
            completed={completed}
            created={created}
            onEdit={() => {
              onEditTask(id)
            }}
            onDelete={() => {
              onDeleteTask(id)
            }}
          />
        )
      })}
    </ul>
  )
}

export default TaskList;