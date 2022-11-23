import AnswerDetails from './AnswerDetails';

const AnswerList = ({answers}) => {
    return(
        <div>
            {
                answers.map((a,i) => {
                    return <AnswerDetails
                    key={i}
                    body={a.body}
                    author={a.author}
                    created_at={a.created_at}
                    />
                })
            }
        </div>
    )
}

export default AnswerList;

