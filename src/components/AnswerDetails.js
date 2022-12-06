import { Link } from "react-router-dom";

const AnswerDetails = ({body, author, created_at, deleteAnswer, id}) => {
    return(
      <div>
        <p>{body}</p>
        <p>By {author}</p>
        <p>
          <strong>Created at:</strong>
          {created_at.toLocaleString()}
        </p>
        <button onClick={deleteAnswer}>Delete</button>
        <Link to={`/gifts/${id}`}>Gift this user</Link>
      </div>
    )
}

export default AnswerDetails;

