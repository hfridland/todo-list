import { useDispatch, useSelector } from 'react-redux'
import { selectShowItems } from '../../slices/todoSlide'
import { setShowItems } from '../../slices/todoSlide'

const Action = ({ text }) => {
  const dispatch = useDispatch()
  const showItems = useSelector(selectShowItems)

  const handlerOnClick = () => {
    dispatch(setShowItems(text.toLowerCase()))
  }

  let cls = 'action'
  if (text === 'Active') {
    cls += ' spaces'
  }
  if (showItems === text.toLowerCase()) {
    cls += ' active'
  }
  return (
    <span className={cls} onClick={handlerOnClick}>
      {text}
    </span>
  )
}

export default Action
