import { useDispatch } from 'react-redux'
import { clearItems } from '../../slices/todoSlide'

const ActClearCompl = () => {
  const dispatch = useDispatch()

  const handlerOnClick = () => dispatch(clearItems())

  return (
    <span className="clear" onClick={handlerOnClick}>
      Clear
    </span>
  )
}

export default ActClearCompl
