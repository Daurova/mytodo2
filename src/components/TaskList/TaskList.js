import Task from '../Task/Task'
import './TaskList.css'

const TaskList = ({ tasks, onDeleteTask,typeTasks, onCompletedTask, onEdit, onSubmitEdit }) => {
  return (
    <ul className='todo-list'>
      {tasks.map(({ id, description, completed, created, createdDate }) => {
        return (
          <Task
            key={id}
            description={description}
            completed={completed}
            created={created}
            createdDate={createdDate}
            typeTasks={typeTasks}
            onEdit={() => {
              onEdit(id)
            }}
            onDelete={() => {
              onDeleteTask(id)
            }}
            onCompleted={() => {
              onCompletedTask(id)
            }}
            onEdited={() => {
              onSubmitEdit(id)
            }}
          />
        )
      })}
    </ul>
  )
}

TaskList.defaultProps = {
  tasks: [],
  onEditTask: () => {},
  onDeleteTask: () => {},
  onCompletedTask: () => {},
  onDone: () => {},
  onEdit: () => {},
  onSubmitEdit: () => {},
}
export default TaskList
