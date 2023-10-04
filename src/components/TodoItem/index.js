// Write your code here
import {Component} from 'react'
import './index.css'

class ToDoItem extends Component {
  render() {
    const {toDoDetails, onDeleteUser} = this.props
    const {id, title} = toDoDetails

    const onDelete = () => {
      onDeleteUser(id)
    }

    return (
      <li className="todo-card">
        <p className="card-title">{title}</p>
        <button type="button" onClick={onDelete} className="btn">
          Delete
        </button>
      </li>
    )
  }
}

export default ToDoItem
