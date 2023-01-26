import React from 'react';
import { useDispatch } from 'react-redux';

export default function Error({ typeError }) {
    const dispatch = useDispatch();
    function retryGet() {
        return dispatch(typeError);
    }
    return (
        <div className="error">
            <span>Произошла ошибка!</span>
            <button onClick={retryGet}>Повторить запрос</button>
        </div>
    );
};