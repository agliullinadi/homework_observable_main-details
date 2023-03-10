import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchGetIdRequest } from '../store/action';
import Error from './Error';
import Loader from './Loader';

export default function Service() {
    const { item, loading, error } = useSelector(state => state.serviceItem);
    const navigate = useNavigate();
    const param = useParams();
    const id = Number(param.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetIdRequest(id));
    }, [dispatch, id])

    if (loading || item === null) {
        return <Loader />;
    };

    if (error) {
        return <Error typeError={fetchGetIdRequest(id)} />;
    };

    return (
        <div className="service">
            <p>{`Название: ${item.name}`}</p>
            <p>{`Стоимость: ${item.price}`}</p>
            <p>{`Описание: ${item.content}`}</p>
            <div>
                <button type='button' onClick={() => navigate('/services')}>Назад</button>
            </div>
        </div>
    )
}