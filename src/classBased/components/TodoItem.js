import React from "react"

//class component
class TodoItem extends React.Component {
    render() {
        return <li>{this.props.todo.title}</li>
    }
}

// functional component
// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem