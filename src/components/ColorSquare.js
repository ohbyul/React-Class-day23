import React  from 'react'; 
import { useDispatch } from 'react-redux';
import { changeColor } from '../store/modules/counter';
import './ColorSquare.css';
 

const colors = ['#bfcd7e', '#7E57C2', '#EA80FC', '#00BCD4'];

const Color = (  {color} ) => {
	const style = { backgroundColor : color }	 
	const dispatch = useDispatch()

	
	return (
		<div className="Color" style={style}
			onClick = { () => dispatch( changeColor(color) )}
		>
			
		</div>	
	);
};


const ColorSquare = () => {
	return (
		<div className="ColorSquare">
			{
				colors.map( color => <Color key={color} color={color} /> )
			}
		</div>
	);
};

export default ColorSquare;

