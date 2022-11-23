import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';

const QuestionShowPage = () => {
    //This component will have one main element, with two children elements
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
        <AnswerDetails
        body="This is the best answer"
        author={{full_name: "Johnny Bravo"}}
        created_at={new Date()}
        />
      </main>
    )
}

export default QuestionShowPage;
