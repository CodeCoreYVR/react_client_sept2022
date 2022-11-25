import QuestionDetails from './QuestionDetails';
// import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import { Component } from 'react';
// import questionData from '../questionData';
import {Question} from '../requests';

class QuestionShowPage extends Component {
    //two ways to declare state
    //1
    constructor(props){
        super(props);
        this.state = {
            question: {}
        }
        // this.delete = this.delete.bind(this)
    }

    //2
    // state = {
    //     question: questionData
    // }

    componentDidMount(){
        Question.show(483) //just hard coded for now
        .then((fetchedAPIquestion) => {
            this.setState(() => {
                return{
                    question: fetchedAPIquestion
                }
            })
        })
    }

    delete(){
        this.setState({
            question: null
        })
    }

    deleteAnswer(id){
        this.setState({
            question: {
                ...this.state.question,
                answers: this.state.question.answers.filter(a => a.id != id)
            }
        })
    }

    render(){
        return(
          <main>
            <QuestionDetails
            title={this.state.question.title}
            body={this.state.question.body}
            author={this.state.question.author_full_name}
            view_count={this.state.question.view_count}
            created_at={this.state.question.created_at}
            updated_at={this.state.question.updated_at}
            />
            <button onClick={()=>{this.delete()}}>Delete this Question</button>
            <AnswerList
            answers={
                this.state.question.answers
            }
            deleteAnswer={(id) => this.deleteAnswer(id)}
            />
          </main>
        )
    }
    
}

export default QuestionShowPage;
