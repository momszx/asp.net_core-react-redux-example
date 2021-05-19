import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionsTypes';
import * as actions from '../../store/actions'

class employeeView extends Component {

    componentDidMount() {
        this.props.onFetchEmployee();
    }

    render() {
        let employees = "Loading..."
        if (!this.props.loading&&this.props.employees!=null) {
            this.props.employees.map(strResult => (
                <tr>
                    <td>{strResult.id}</td>
                    <td>{strResult.name}</td>
                    <td>{strResult.address}</td>
                </tr>
            ))
        }
        return (
            <>
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
        onFetchEmployee: () => dispatch(actions.fetchEmployee())
    };
};
export default connect(mapStareToProps, mapDispatchToProps)(employeeView);