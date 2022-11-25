const AnswerDetails = ({body, author, created_at, deleteAnswer}) => {
    return(
      <div>
        <p>{body}</p>
        <p>By {author}</p>
        <p>
          <strong>Created at:</strong>
          {created_at.toLocaleString()}
        </p>
        <button onClick={deleteAnswer}>Delete</button>
      </div>
    )
}

export default AnswerDetails;

