import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    console.log(count);
    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button>
        </div>
    );
};

export default CounterView;