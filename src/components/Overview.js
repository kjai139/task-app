import React, { Component } from "react";
import { GetEdit} from "./EditTask";




class Overview extends Component {
    constructor(props){
        super(props)
        this.state = {value: '', arr:[]}
        

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.replaceTask = this.replaceTask.bind(this)

        this.getEditDom = this.getEditDom.bind(this)
        
        
       
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        
        console.log('change', this.state.value)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('Task submitted:' + this.state.value)
        this.setState({value: '', arr: [...this.state.arr, this.state.value]})
        
        console.log(this.state.arr)
        
        
    }

    removeTask(e) {
        let array = this.state.arr
        let i = array.indexOf(e.target.value)
        this.setState({arr: this.state.arr.filter(function(task, index) {
            return index !== i
        })})
    }

    replaceTask(e, newValue='blank') {
        let array = this.state.arr
        let i = array.indexOf(e)
        array[i] = newValue
        this.setState({arr:array})
    }

    getEditDom (event) {
        let e = event.target.value
        let newT = prompt('New task name:')
        console.log(newT)
        this.replaceTask(e, newT)
        
    }
  


    render() {
        return(
            <div>
            <form>
                <label>
                    Task name:
                </label>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <input type="submit" onClick={this.handleSubmit}></input>
            </form>
            <div>
                <ul className="taskList">
                {this.state.arr.map((ele, index) => {
                    return(
                        
                        <li key = {index}>
                            <div>

                            
                             <h2 id={`index-${index}`}>
                                Task {`${index + 1 }`} : {ele}
                                
                             </h2>
                             <button value={ele} onClick={this.removeTask}>Delete</button>
                             <button value={ele} onClick={this.getEditDom}>
                                
                                edit
                             </button>
                             </div>
                             
                            
                        </li>
                        
                    )
                })}
                </ul>
            </div>
            </div>
           
        )
    }
}

export {Overview}