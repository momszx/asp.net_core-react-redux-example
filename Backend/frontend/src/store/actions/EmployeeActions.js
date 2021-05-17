import * as actionTypes from './actionsTypes';
import axios from "../../axiosBase";


export const fetchEmployeeSuccess=(employees)=>{
    return{
        type:actionTypes.FETCH_LIST_EMPLOYEE,
        employees:employees
    }
}
export const fetchEmployeeFail=(error)=>{
    return{
        type:actionTypes.FETCH_EMPLOYEE_FAIL,
        error:error
    };
};
export const fetchEmployeeStart=()=>{
    return {
        type:actionTypes.FETCH_EMPLOYEE_START
    };
};

export const fetchEmployee=()=>{
    return dispatch=>{
        dispatch(fetchEmployeeStart())
        fetch('Employee')
            .then(response=> response.json())
            .then(data=>{
                dispatch(fetchEmployeeSuccess(data))
            })
            .catch(err=>{
                dispatch(fetchEmployeeFail(err));
            })
    }
}