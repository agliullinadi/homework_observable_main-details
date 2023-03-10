import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGetRequest } from '../store/action';
import Error from './Error';
import Loader from './Loader';

export default function ServiceList() {
    const { items, loading, error } = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetRequest());
    }, [dispatch])

    if (loading) {
        return <Loader />;
    };

    if (error) {
        return <Error typeError={fetchGetRequest()} />;
    };

    return (
        <ul className="services">
            {items.map(o => (
                <li key={o.id}>
                    <Link to={`/services/${o.id}`}>{`${o.name} ${o.price}`}</Link>
                </li>
            ))}
        </ul>
    );
};
