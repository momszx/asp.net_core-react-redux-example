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
        axios.get('/Employee')
            .then(res=>{
                const fetchedEmployees=[]
                for (let key in res.data){
                    fetchedEmployees.push({
                        ...res.data[key],
                        id:key
                    })
                }
                dispatch(fetchEmployeeSuccess(fetchedEmployees))
            })
            .catch(err=>{
                dispatch(fetchEmployeeFail(err));
            })
    }
}