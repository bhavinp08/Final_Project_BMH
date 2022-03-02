import {
    CREATE_CLASS,
    FACULTY_CLASS_FAIL,
    GET_CLASS
} from '../actions/types'

const initialState = {
    faculty_id:null,
    faculty_name:null,
    class_name:null,
    class_abv:null,
    year:null,
    students:[],    
    classes:[],
    error: null
}

const faculty_class = (state= initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case GET_CLASS:
            return{
                ...state,
                classes:payload
            }
        case CREATE_CLASS:
            return{
                ...state,
                faculty_id:payload.faculty_id,
                faculty_name: payload.faculty_name,
                class_name: payload.class_name,
                class_abv: payload.class_abv,
                year: payload.year
            }

        case FACULTY_CLASS_FAIL:
            return{
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export default faculty_class