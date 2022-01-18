import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrese, increse } from '../store/modules/counter';
import './Counter.css';


const Counter = () => {
	const { number , color} = useSelector(state => state.counter )
	const dispatch = useDispatch()
	return (
		<div className="Counter">
				<h1 style={{color : color , fontSize : 50}}> 숫자: {number }</h1>
				<div className="btn-wrapper">
					<button onClick={ () => dispatch(increse() )}>+</button>
					<button onClick={ () => dispatch(decrese() )}>-</button>
				</div>
		</div>
	);
};

export default Counter;
 