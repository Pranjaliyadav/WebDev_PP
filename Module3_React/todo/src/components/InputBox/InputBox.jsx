import React, { Component } from "react";

class InputBox extends Component {
    state = { 
        todoValue:"",
     };

     handleOnChange = (e) => {
         let value = e.target.value;
         this.setState({
             todoValue:value
         })
     };

     handleAddToDo = (e) => {
         let todo = this.state.todoValue;
         this.props.addTodo(todo);
         this.setState({
             todoValue:""
         })
     };


    render() { 
        let todoValue = this.state.todoValue;
        let handleOnChange = this.handleOnChange;
        let handleAddToDo = this.handleAddToDo;

        return ( 
            <div className="input-box container input-group mt-4">
                <input
                type="text"
                className="form-control"
                value={todoValue}
                onChange={handleOnChange}
                />
                <button className="btn btn-primary" onClick={handleAddToDo}>Add Todo</button>

            </div>
        );
    }
}
 
export default InputBox;