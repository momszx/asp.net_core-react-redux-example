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
                    value={this.state.employee.name} />
                <input
                    type="text"
                    placeholder="address"
                    onChange={this.ageChangedHandler}
                    value={this.state.employee.address} />
                <button onClick={() => this.props.addEmployee(this.state.employee)}>Add Employee</button>
            </div>
        );
    }
}

export default AddEmployee;