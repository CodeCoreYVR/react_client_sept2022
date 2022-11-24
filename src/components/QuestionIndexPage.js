import QuestionDetails from './QuestionDetails';
import {Component} from 'react';

class QuestionIndexPage extends Component {
    render(){
        return(
            <div>
                {
                    this.props.list.map((q, i) => {
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
