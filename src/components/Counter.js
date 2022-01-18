import React from 'react';
import './Counter.css';


const Counter = () => {

	return (
		<div className="Counter">
				<h1> 숫자: </h1>
				<div className="btn-wrapper">
					<button >+</button>
					<button >-</button>
				</div>
		</div>
	);
};

export default Counter;
 