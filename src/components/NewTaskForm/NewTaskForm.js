import './NewTaskForm.css'

const NewTaskForm = ({ onInputChange, onSubmit, value }) => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          onChange={onInputChange}
          // onItemAdded={onItemAdded}
          value={value}
        ></input>
      </form>
    </header>
  )
}

NewTaskForm.defaultProps = {
  onInputChange: () => {},
  onSubmit: () => {},
  onItemAdded: () => {},
  value: '',
}
export default NewTaskForm
