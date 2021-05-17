import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    employees: [],
    error:'',
    loading:false
};
const fetchEmployeeSuccess=(state,action)=>{
    return updateObject(state,{
        employees: action.employees,
        loading: true
    });
}
const fetchEmployeeFail=(state,action)=>{
    return updateObject(state,{
        error: action.error,
        loading: false
    })
}
const fetchEmployeeStart=(state,action)=>{
    return updateObject(state,{
        loading: true
    })
}

const reducer =(state =initialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_LIST_EMPLOYEE:
            return fetchEmployeeSuccess(state,action)
        case actionTypes.LIST_EMPLOYEE_BY_ID:
            return{}
        case actionTypes.ADD_EMPLOYEE:
            return{}
        case actionTypes.UPDATE_EMPLOYEE:
            return {}
        case actionTypes.REMOVE_EMPLOYEE:
            return {}
        case actionTypes.FETCH_EMPLOYEE_FAIL:
            return fetchEmployeeFail(state,action)
        case actionTypes.FETCH_EMPLOYEE_START:
            return fetchEmployeeStart(state,action)
        default:return state
    }
};
export default reducer;