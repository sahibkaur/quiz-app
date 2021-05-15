import React from 'react';
import './QuizCategory.css';

const QuizCategory = (props) => {
    return (
    <div className="category">
        <h2 className="title">{props.title}</h2>
    </div>
    );
};

export default QuizCategory;