import { useSelector } from 'react-redux'
import { selectTodosCount } from '../../slices/todoSlide'

const ItemsCounter = () => {
  const todosCount = useSelector(selectTodosCount)
  const items = todosCount === 1 ? 'item' : 'items'
  return (
    <span className="items_counter">
      {todosCount} {items}
    </span>
  )
}

export default ItemsCounter
