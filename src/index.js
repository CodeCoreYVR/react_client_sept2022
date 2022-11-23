import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

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
      <AnswerDetails/>
    </main>
  )
}

//We are now adding props that are coming in as arguments from where we call QuestionDetails
//(in this case with QuestionShowPage), but deconstructed:
const QuestionDetails = ({title, body, author, view_count, created_at, updated_at}) => {
  return(
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By {author.full_name}</p>
      <p>
        <small>Seen {view_count} times</small>
        <small>Created: {created_at.toLocaleString()}</small>
        <small>Last edited: {updated_at.toLocaleString()}</small>
      </p>
    </div>
  )
}

const AnswerDetails = () => {
  return(
    <div>
      <p>This is the body of my answer</p>
      <p>By Who Knows</p>
      <p>
        <strong>Created at:</strong>
        1 day ago
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode is a development only component.  We might get rid of this later.  But what it does
  //is it will search through the React components that you write, and it will tell you if there are
  //things you need to fix. It will give you hints.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  //App here is the root component.  That is because of how React is structured.  There is always 
  //one main component that renders out all of the rest of the components
  //So App is the very first component we will have, and it will have children, and
  //the children will have children, etc.  This is a tree of components

  //We are removing strict mode for now
  //With JSX, we had to access the React element created, but with JSX and Babel we can
  //now write the component as a html tag
  <QuestionShowPage/>
  //Note, with React and JSX, all tags must be closed properly
  //for example, an html self closing tag like <hr> might still work for regular html
  //but for React, it must be closed like <hr/> or <hr></hr>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
