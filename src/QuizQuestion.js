import React, { Component } from 'react';

class QuizQuestion extends Component {
    constructor(props){
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render() {
        return (
            <div>
                <div>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </div>
                <div className="buttons">
                    <ul>
                    <li>{this.props.quiz_question.answer_options[0]}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default QuizQuestion;