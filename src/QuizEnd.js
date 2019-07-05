import React, { Component } from 'react'

class QuizEnd extends Component {
    handleResetClick() {
        
        this.props.resetClickHandler()
        
        console.group('QuizEnd resetClickHandler event ')
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        )
    }
}



export default QuizEnd;