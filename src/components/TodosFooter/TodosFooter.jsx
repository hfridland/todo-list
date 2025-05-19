import ItemsCounter from './ItemsCounter'
import Actions from './Actions'
import ActClearCompl from './ActClearCompl'

const TodosFooter = () => {
  return (
    <div className="todos-footer">
      <ItemsCounter />
      <Actions className="actions" />
      <ActClearCompl />
    </div>
  )
}

export default TodosFooter
