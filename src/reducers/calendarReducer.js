import moment from 'moment';
import { types } from '../types/types';

const initialState ={
events:[{
    id: new Date().getDate(),
    title:'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2,'hour').toDate(),
    bgcolor:'#fafafa',
    notes:'Comprar el pastel',
    user:{
        _id:'123',
        name:'Carlos'
    }
}],
activeEvent:null,
selectedDate:null
};

export const calendarReducer =(state=initialState, action)=>{
    switch (action.type) {
        case types.eventSetActive:
            return{
                ...state,
                activeEvent:action.payload
            }
            
        case types.eventAddNew :
            return{
                ...state,
                events:[
                ...state.events,
                action.payload
            ]
            }
        case types.eventClearActiveEvent:
            return{
                ...state,
                activeEvent:null,
                selectedDate:null
            }       
        case types.eventUpdated:
            return{
                ...state,
                events: state.events.map(e=>(e.id === action.payload.id)? action.payload: e)
            }                
            case types.eventDeleted:
                return{
                    ...state,
                    events: state.events.filter(e=>(e.id !== state.activeEvent.id)),
                    activeEvent:null,
                    selectedDate:null
                }
            case types.eventSelectedDate:
                return{
                    ...state,
                    selectedDate:action.payload
                }             
            
        default:
            return state;
    }
}