import QuestionDetails from './QuestionDetails';
import {Component} from 'react';
import questionIndexData from '../questionIndexData'

class QuestionIndexPage extends Component {
    state = {
        questions: questionIndexData
    }
    render(){
        return(
            <div>
                {
                    this.state.questions.map((q, i) => {
                        return <QuestionDetails
                            key={i}
                            title={q.title}
                            body={q.body}
                            author={q.author}
                            view_count={q.view_count}
                            created_at={q.created_at}
                            updated_at={q.updated_at}
                        />
                    })
                }
            </div>
        )
    }
}

export default QuestionIndexPage;
