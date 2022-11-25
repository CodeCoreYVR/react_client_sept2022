import React from 'react'; //this used to be important, but for new react this is optional becausereact is already importing from react by default configurations

const QuestionDetails = ({title, body, author, view_count, created_at, updated_at}) => {
    return(
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>By {author}</p>
        <p>
          <small>Seen {view_count} times</small>
          <small>Created: {created_at}</small>
          <small>Last edited: {updated_at}</small>
        </p>
      </div>
    )
}

export default QuestionDetails;
//export default will make QuestionDetails the default value when importing
//In this case, with import you don't need object destructuring anymore {QuestionDetails}
