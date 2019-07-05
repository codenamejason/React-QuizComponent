import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incorrectAnswer: false,
        }
    }
    
    handleClick(buttonText){
        console.group('QuizQuestion handleClick event')
        console.log(`Quiz Answer:`, buttonText)

        if(buttonText === this.props.quiz_question.answer){
            console.log('Correct!')
            this.setState({incorrectAnswer: false})
            this.props.showNextQuestionHandler();
        } else {
            this.setState({incorrectAnswer: true})
            console.log('Incorrect!!!!')
        }
        

    }    

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return <QuizQuestionButton key={index} button_text={answer_option}
                            clickHandler={this.handleClick.bind(this)}/>
                        })}
                        
                    </ul>
                </section>
                { this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : 
                null }
            </main>
        )
    }

}

// <li>{this.props.quiz_question.answer_options[0]}</li>
// button_text={this.props.quiz_question.answer_options[0]}

export default QuizQuestion;