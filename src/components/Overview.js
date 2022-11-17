import React, { Component } from "react";




class Overview extends Component {
    constructor(props){
        super(props)
        this.state = {value: '', arr:[]}
        

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
       
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
                {this.state.arr.map((ele, index) => {
                    return(
                        <div key = {index}>
                             <h2 id={`index-${index}`}>
                                {ele}
                             </h2>
                            
                        </div>
                    )
                })}
                
            </div>
            </div>
           
        )
    }
}

export {Overview}