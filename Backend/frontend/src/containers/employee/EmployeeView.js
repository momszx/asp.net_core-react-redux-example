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
        console.log(this.props.loading)
        if (!this.props.loading && this.props.employees != null) {
            this.props.employees.map(strResult => (
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
                    <button onClick={this.props.onRemoveEmployee(strResult.id)}>Töröl</button>
                    <button onClick={this.props.onUpdateEmployee(strResult.id)}>Frissités</button>
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
        employees: state.employees,
        loading: state.loading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchEmployee: () => dispatch(actions.fetchEmployee()),
        onAddEmployee: () => dispatch(actions.addEmployee()),
        onRemoveEmployee: () => dispatch(actions.removeEmployee()),
        onUpdateEmployee: () => dispatch(actions.updateEmployee())
    };
};
export default connect(mapStareToProps, mapDispatchToProps)(employeeView);