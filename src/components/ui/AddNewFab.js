import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
    // const {modalOpen} = useSelector( state => state.ui );
    const dispatch = useDispatch();
    
    const handleAddEvent=()=>{
        dispatch(uiOpenModal());
    }

    return (
        <button 
        onClick={handleAddEvent}
        className="btn btn-primary fab">
            <i className="fas fa-plus"></i>
        </button>
    )
}
