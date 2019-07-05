import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    handleClick() {
        this.props.clickHandler(this.props.button_text)

        console.group('QuizQuestionButton Component');
        console.log('Quiz Answer ', this.props.button_text)
        // todo: foaas.com to respond randomly...
        //alert('your an asshole')
    }

    render() {
        return (
            <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton;