import React, { useEffect, useReducer } from 'react';
import { getAll } from '../../servises/foodservices';
import Thumbnails from '../../components/Thumbnails/Thumbnails';

const initialState = { foods: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "FOODS_LOADED": // Correct action type
            return { ...state, foods: action.payload };
        default:
            return state;
    }
};

export default function Homepage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { foods } = state;

    useEffect(() => {
        getAll().then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods })); // Correct action type
    }, []);

    return (
        <>
            <Thumbnails foods={foods} />
        </>
    );
}
