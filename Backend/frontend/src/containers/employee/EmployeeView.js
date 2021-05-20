import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionsTypes';
import * as actions from '../../store/actions'
import AddEmployee from "./AddEmployee";

class employeeView extends Component {

    componentDidMount() {
        this.props.onFetchEmployee();
    }

    render() {
        let employees = "Loading..."
        if (!this.props.loading ) {
            employees= this.props.employees.map(strResult => (
                <tr>
                    <td>{strResult.id}</td>
                    <td>
                        <input
                            type="text"
                            placeholder="Name"
                            value={strResult.name}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Name"
                            value={strResult.address}
                        />

                    </td>

                </tr>
            ))
        }
        return (
            <>
                <AddEmployee addEmployee={this.props.onAddEmployee}/>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                    {employees}
                </table>
            </>
        );
    }
}

const mapStareToProps = state => {
    return {
        employees: state.employee.employees,
        loading: state.employee.loading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchEmployee: () => dispatch(actions.fetchEmployee()),
        onAddEmployee: (employee) => dispatch(actions.addEmployee(employee)),
        onRemoveEmployee: () => dispatch(actions.removeEmployee()),
        onUpdateEmployee: () => dispatch(actions.updateEmployee())
    };
};
export default connect(mapStareToProps, mapDispatchToProps)(employeeView);