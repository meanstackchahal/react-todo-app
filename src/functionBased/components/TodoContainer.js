import React from "react"
import { v4 as uuidv4 } from "uuid";
import TodosList from './TodosList'
import Header from "./Header"
import InputTodo from "./InputTodo"
class TodoContainer extends React.Component {
    handleChange = (id) => {
        // this.setState({
        //     todos: this.state.todos.map(todo => {
        //         if (todo.id === id) {
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     })
        // });

        //If you temporarily remove the <React.StrictMode> in the src/index.js file and save it, the checkboxes start working again
        // this.setState(prevState => ({
        //     todos: prevState.todos.map(todo => {
        //       if (todo.id === id) {
        //         todo.completed = !todo.completed
        //       }
        //       return todo
        //     }),
        //   }))


        //in both ways we can use this below
        // this.setState(prevState => ({
        //     todos: prevState.todos.map(todo => {
        //         if (todo.id === id) {
        //             return {
        //                 ...todo,
        //                 completed: !todo.completed,
        //             }
        //         }
        //         return todo
        //     }),
        // }))

        //Note how we are wrapping the object in the setState callback with a parenthesis, (). 
        //An alternative is to use the return statement to explicitly return the object like so:

        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo
                }),
            }
        })
    };

    delTodo = id => {
        //Notes
        //With the filter() method, we are saying that for each of the todos data that we are looping through, 
        //we want to retain the once whose id is not equal to the id passed in.
        this.setState({
            todos: [
                //Notes
                //the spread operator (…) in the code. It allows us to grab the current todos item(s) at every point.
                // As this is necessary for the code to work. 
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            }),
        })
    }

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        );
    }
}
export default TodoContainer