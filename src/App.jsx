import Title from './components/Title/Title'
import TodoCreator from './components/creator/TodoCreator'
import Todos from './components/todos/Todos'
import TodosFooter from './components/TodosFooter/TodosFooter'
import Messages from './components/Messages'

function App() {
  return (
    <div className="app">
      <Title />
      <TodoCreator />
      <Todos />
      <TodosFooter />
      <Messages />
    </div>
  )
}

export default App

//style={{ position: 'absolute', zIndex: 2 }}
