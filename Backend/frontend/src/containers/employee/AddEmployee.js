import React, { Component } from 'react';

class AddEmployee extends Component {
    state = {
        employee:{
            id:0,
            name: '',
            address: ''
        }
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render () {
        return (
            <div className="AddEmployee">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangedHandler}
                    value={this.state.name} />
                <input
                    type="text"
                    placeholder="Age"
                    onChange={this.ageChangedHandler}
                    value={this.state.age} />
                <button onClick={() => this.props.addEmployee(this.state.employee)}>Add Employee</button>
            </div>
        );
    }
}

export default AddEmployee;