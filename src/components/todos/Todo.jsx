import { useState } from 'react'
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import ComplButton from './ComplButton'
import { useDispatch } from 'react-redux'
import { deleteTodo, setTodoText } from '../../slices/todoSlide'
import delTodoIcon from '../../images/icon-cross.svg'

const Todo = ({
  id,
  text,
  isComplete,
  dragStart,
  dragEnter,
  dragOver,
  dragEnd,
  arrow,
  dragItemDst,
}) => {
  const dispatch = useDispatch()
  const [edText, setEdText] = useState(text)
  const [isEditing, setIsEditing] = useState(false)
  const handleChangeText = (e) => {
    setEdText(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
      dispatch(setTodoText({ id, text: edText }))
    } else if (e.key === 'Escape') {
      setIsEditing(false)
      setEdText(text)
    }
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  const complClass = isComplete ? ' completed' : ''
  return (
    <li
      draggable
      id={id}
      className="todo"
      onDragStart={dragStart}
      onDragEnter={dragEnter}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      <div className="todo">
        <div className="arrow-container">
          {arrow === 'up' && dragItemDst.current === id && <FaArrowCircleUp />}
        </div>
        <div className="todo-controls">
          <ComplButton id={id} isComplete={isComplete} />
          {!isEditing ? (
            <p
              className={'todo-text-non-edit todo-text' + complClass}
              onClick={setIsEditing}
            >
              {edText}
            </p>
          ) : (
            <input
              type="text"
              className="todo-text"
              value={edText}
              onChange={handleChangeText}
              onKeyDown={handleKeyDown}
            />
          )}
          <div>
            <img
              src={delTodoIcon}
              alt="Delete Todo"
              onClick={handleDelete}
              className="delete-todo-button"
            />
          </div>
        </div>
        <div className="arrow-container">
          {arrow === 'down' && dragItemDst.current === id && (
            <FaArrowCircleDown />
          )}
        </div>
      </div>
    </li>
  )
}

export default Todo
