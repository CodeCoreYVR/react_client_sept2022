import QuestionDetails from './QuestionDetails';
// import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import { Component } from 'react';

class QuestionShowPage extends Component {
    render(){
        return(
          <main>
            <QuestionDetails
            title="What is your favourite colour?"
            body="Red,green,blue,rainbow..."
            author={{full_name: "Jon Snow"}}
            view_count={35}
            created_at={ new Date() }
            updated_at={ new Date() }
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
