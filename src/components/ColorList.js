import React from 'react'; 
import './ColorList.css';
import ListItem from './ListItem';

const ColorList = () => {
	 
	return (
		<div className="list">
				<form className="ColorList"   >
					<input
					   placeholder="원하는 색을 입력하세요"
					/>
				</form>
				<div style={{overflow:'hidden'}}>				
					컬러박스
				</div>
		</div>
	);
};

export default ColorList;