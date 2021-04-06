import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionsTypes';
import * as actions from'../../store/actions'

class employeeView extends Component{

    componentDidMount () {
        this.props.onFetchEmployee();
    }
    render() {
        return(
            <>
                <button /*onClick={this.props.onFetchEmployee()}*/>
                    lekérdez
                </button>
                <table >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                    {/*this.props.emp.map(emp=>(
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.address}</td>
                        </tr>
                    ))*/}
                </table>
            </>
        );
    }
}
const  mapStareToProps =state =>{
    return{
        emp:state.employees
    }
}
const  mapDispatchToProps =dispatch =>{
    return{
        onFetchEmployee:()=>dispatch(actions.fetchEmployee())
    };
}
export default connect(mapStareToProps,mapDispatchToProps)(employeeView);