import { useDispatch } from 'react-redux'
import { addTodo as addTodoSlide } from '../../slices/todoSlide'
import { useState } from 'react'

const TodoCreator = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const addTodo = () => {
    if (text === '') return
    dispatch(addTodoSlide(text))
    setText('')
  }

  return (
    <div className="create-todo">
      <div className="create-todo-btn" onClick={addTodo}></div>
      <input
        className="create-todo-input"
        type="text"
        placeholder="Create a new todo"
        value={text}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default TodoCreator
