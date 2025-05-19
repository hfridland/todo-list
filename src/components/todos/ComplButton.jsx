import { useDispatch } from 'react-redux'
import { toggleCompleted as toggleCompletedSlice } from '../../slices/todoSlide'

const ComplButton = ({ id, isComplete }) => {
  const dispatch = useDispatch()
  const complClass = isComplete ? ' completed' : ''

  const toggleCompleted = () => {
    dispatch(toggleCompletedSlice(id))
  }

  return (
    <div
      className={'compl-button' + complClass}
      onClick={toggleCompleted}
    ></div>
  )
}

export default ComplButton
