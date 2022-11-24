import QuestionDetails from './QuestionDetails';
// import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import { Component } from 'react';
import questionData from '../questionData';

class QuestionShowPage extends Component {
    constructor(props){
        super(props);
        this.state = questionData 
    }

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
                [
                    {
                        body: "Answer 1",
                        author: { full_name: "Steve Jobs" },
                        created_at: new Date()
                    },
                    {
                        body: "Answer 2",
                        author: { full_name: "Elon Musk" },
                        created_at: new Date()
                    },
                    {
                        body: "Answer 3",
                        author: { full_name: "Jeff Bezos" },
                        created_at: new Date()
                    },
                ]
            }
            />
          </main>
        )
    }
    
}

export default QuestionShowPage;
