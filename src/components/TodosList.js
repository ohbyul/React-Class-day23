import React  from 'react';
import './TodosList.css'
 
const TodosList = () => {
    return (
        <>
                <li > 
                    <span className="on"> 아무말 </span>
                    <button> 삭제</button>
                </li>
            </>
    );
};

export default TodosList;