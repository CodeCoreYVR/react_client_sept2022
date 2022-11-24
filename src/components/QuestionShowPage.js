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
        this.state = {
            question: questionData 
        }
        // this.delete = this.delete.bind(this)
    }

    //2
    // state = {
    //     question: questionData
    // }

    delete(){
        this.setState({
            question: null
        })
    }

    render(){
        return(
          <main>
            <QuestionDetails
            title={this.state.question.title}
            body={this.state.question.body}
            author={this.state.question.author}
            view_count={this.state.question.view_count}
            created_at={this.state.question.created_at}
            updated_at={this.state.question.updated_at}
            />
            <button onClick={()=>{this.delete()}}>Delete this Question</button>
            <AnswerList
            answers={
                this.state.question.answers
            }
            />
          </main>
        )
    }
    
}

export default QuestionShowPage;
