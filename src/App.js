import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ColorSquare from './components/ColorSquare';
import ColorList from './components/ColorList';
import Todos from './components/Todos';
 
const App = () => {
	return (
		<div className="App">
			 	<Counter />
				<ColorSquare />
				<ColorList />
				<Todos/>
			</div>
	);
};

export default App;