import React from 'react';
import TodosList from './TodosList';

const Todos = () => {
    return (
        <div className="list">
        <form >
            <input type="text" />
        </form>

        <TodosList />

         
    </div>
    );
};

export default Todos;