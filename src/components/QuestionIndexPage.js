// import QuestionDetails from './QuestionDetails';
import {Component} from 'react';
// import questionIndexData from '../questionIndexData';
// import NewQuestionForm from './NewQuestionForm';
import {Question} from '../requests';
import {Link} from 'react-router-dom';

class QuestionIndexPage extends Component {
    // state = {
    //     questions: questionIndexData
    // }
    constructor(props){
        super(props);
        this.state = { questions: []}
    }

    componentDidMount(){
        Question.index()
        .then((questionsData) => {
            this.setState(() => {
                return{
                    questions: questionsData
                }
            })
        })
    }

    deleteQuestion(id){
        console.log(id)
        //we can;t reset the value of state in this way:
        //this.state.questions = this.state.questions.filter(q => q.id != id)
        //you can only reset the value by using this.setState()
        this.setState({
           questions: this.state.questions.filter(q => q.id != id) 
        })
    }

    render(){
        return(
            <>
                <ul>
                    {
                        this.state.questions.map((q, i) => {
                            return <li key={i}>{q.id} - <Link to={`/questions/${q.id}`}>{q.title}</Link> <button onClick={()=> {this.deleteQuestion(q.id)}}>Delete</button></li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default QuestionIndexPage;
