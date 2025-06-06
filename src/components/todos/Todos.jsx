import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import { selectTodos, changeTodos } from '../../slices/todoSlide'

const Todos = () => {
  const todos = useSelector(selectTodos)
  const dragItemSrc = useRef()
  const dragItemDst = useRef()
  const dispatch = useDispatch()
  const [arrow, setArrow] = useState('')

  const handleDragStart = (e) => {
    dragItemSrc.current = e.target.id
  }

  const handleDragEnter = (e) => {
    dragItemDst.current = getParentWithId(e.target).id
  }

  function getParentWithId(control) {
    while (!control.id) {
      control = control.parentElement
    }
    return control
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    const control = getParentWithId(e.target)
    const rect = control.getBoundingClientRect()
    const dropY = e.clientY
    const middleY = rect.top + rect.height / 2
    if (dropY < middleY) {
      setArrow('up')
    } else {
      setArrow('down')
    }
  }

  const drop = (e) => {
    setArrow('')

    const rect = document
      .getElementById(dragItemDst.current)
      .getBoundingClientRect()
    const dropY = e.clientY
    const middleY = rect.top + rect.height / 2

    dispatch(
      changeTodos({
        srcId: dragItemSrc.current,
        dstId: dragItemDst.current,
        direction: dropY >= middleY ? 'down' : 'up',
      })
    )
  }

  return (
    <ul className="todos">
      {todos.map((todo, idx) => (
        <Todo
          key={todo.id}
          {...todo}
          dragStart={handleDragStart}
          dragEnter={handleDragEnter}
          dragOver={handleDragOver}
          dragEnd={drop}
          arrow={arrow}
          dragItemDst={dragItemDst}
        />
      ))}
    </ul>
  )
}

export default Todos
