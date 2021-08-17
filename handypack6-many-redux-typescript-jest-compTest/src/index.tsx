import React, { useState, createContext, useContext} from 'react'
import ReactDom from 'react-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import store from './store'
import { addTodo, fetchDataBegin } from './action/todolist'

//const TodoListContext = createContext()

const Task = (props) => {
  const { task } = props;
  return <div>{task}</div>
}

Task.propTypes = {
  task: PropTypes.string,
}

Task.defaultProps = {
  task: ''
}

const TodoList = () => {
  const todoList = useSelector(state => state.todoList)
  return todoList.map(task => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ))
}

const TodoListPage = () => (
  <div>
    <div>其他內容什麼的</div>
    <TodoList />
  </div>
)

const CurrentTask = () => {
  const todoList = useSelector(state => state.todoList)
  return <div>{`下一件事要做: ${todoList[0]}`}</div>
}

const Content = () =>{
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  return (
    <div>
      <div>
        {console.log("data:",data)}
        {data ? JSON.stringify(data) : '暫無資料'}
      </div>
      <button type="button" onClick={()=>{ dispatch(fetchDataBegin())}}>
        獲得資料
      </button>
    </div>
  )
}

const Main = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList)
  const [newTodo, setNewTodo] = useState('')
  return (
    <div>
      <Content />
      <span>{`代辦事項: ${todoList.length}`}</span>
      <div>
        <input value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} />
        <button type="button" onClick={() => {dispatch(addTodo(newTodo))}}>新增事項</button>
      </div>
      <TodoListPage />
      <CurrentTask />
    </div>
  )
}





ReactDom.render(
  <Provider store={store}>
    <Main />,
  </Provider>,
  document.getElementById('root'),
)