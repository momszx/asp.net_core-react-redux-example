import React, { Component } from 'react';

class AddEmployee extends Component {
    
    state = {
            name: 'BélA',
            address: ''
    }

    nameChangedHandler = (event) => {
        console.log('név '+event.target.value)
        this.setState({name: event.target.value});
        console.log(this.state.name)
    }

    addressChangedHandler = (event) => {
        
        this.setState({address: event.target.value});
    }

    render () {
        return (
            <div className="AddEmployee">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangedHandler}
                />
                <input
                    type="text"
                    placeholder="address"
                    onChange={this.addressChangedHandler}
                />
                <button onClick={() => this.props.addEmployee(JSON.stringify({employee:{id:0,name:this.state.name,address: this.state.address}}))}>Add Employee</button>
            </div>
        );
    }
}

export default AddEmployee;