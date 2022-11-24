import QuestionDetails from './QuestionDetails';
// import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import { Component } from 'react';
import questionData from '../questionData';

class QuestionShowPage extends Component {
    //two ways to declare state
    //1
    constructor(props){
        super(props);
        this.state = questionData 
    }

    //2
    // state = {
    //     question: questionData
    // }

    render(){
        return(
          <main>
            <QuestionDetails
            title={this.state.title}
            body={this.state.body}
            author={this.state.author}
            view_count={this.state.view_count}
            created_at={this.state.created_at}
            updated_at={this.state.updated_at}
            />
            <AnswerList
            answers={
                this.state.answers
            }
            />
          </main>
        )
    }
    
}

export default QuestionShowPage;
