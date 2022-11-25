import {Component} from 'react';
import {Question} from '../requests';
import NewQuestionForm from './NewQuestionForm';
import { useNavigate } from 'react-router-dom';

export const withRouter = WrappedComponent => props => {
    const navigate = useNavigate()
    //etc... other react-router-dom hooks

    return(
        <WrappedComponent 
        {...props}
        navigate={navigate}
        />
    )
}
class NewQuestionPage extends Component{
    constructor(props){
        super(props);
        this.state = { errors: [] }
    }

    createNewQuestion(params){
        console.log(`Params: ${params.title} ${params.body}`)
        Question.create(params)
        .then((question) => {
            console.log(`question: ${question}`)
            if (question.errors){
                this.setState({ errors: question.errors })
            } else {
                console.log(this.props)
                this.props.navigate(`/questions/${question.id}`)
            }
        })
    }

    render(){
        return(
            <div>
                <NewQuestionForm errors={this.state.errors} submitForm={(params) => this.createNewQuestion(params)} />
            </div>
        )
    }
}

export default withRouter(NewQuestionPage);


