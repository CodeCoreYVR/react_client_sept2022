import "./App.css";
import { Component } from "react";
// import CurrentDateTime from './components/CurrentDateTime';
import { Session } from "./requests";
import { User } from "./requests";
// import QuestionIndexPage from './components/QuestionIndexPage';
import QuestionShowPage from "./components/QuestionShowPage";
import QuestionIndexPage from "./components/QuestionIndexPage";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import NavBar from "./components/NavBar";
import NewQuestionPage from "./components/NewQuestionPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import AuthRoutes from "./components/AuthRoutes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // clocksCount: [1], //an array of something
      user: null,
    };
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return User.current().then((user) => {
      if (user?.id) {
        this.setState((state) => {
          return { user };
        });
      }
    });
  };

  onSignOut = () => {
    this.setState( { user: null } )
  }

  render() {
    return (
      <>
        <NavBar currentUser={this.state.user} onSignOut={this.onSignOut} />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/questions" element={<QuestionIndexPage />} />
          <Route element={<AuthRoutes isAuthenticated={!!this.state.user} />}>
            <Route exact path="/questions/new" element={<NewQuestionPage />} />
          </Route>
          <Route path="/questions/:id" element={<QuestionShowPage />} />
          {/* <Route
            exact
            path="/sign_in"
            render={(routeProps) => (
              <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
            )}
          ></Route> */}
          {/* ^^ react router dom v5 way */}
          <Route exact path='/sign_in' element={<SignInPage onSignIn={this.getCurrentUser}/>} />
          <Route exact path='/sign_up' element={<SignUpPage onSignUp={this.getCurrentUser}/>} />
        </Routes>
      </>
    );
  }
}

export default App;
