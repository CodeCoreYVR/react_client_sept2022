import "./App.css";
import { useState, useEffect } from "react";
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
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [clocksCount, setClocksCount] = useState(true);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    return User.current().then((user) => {
      if (user?.id) {
        setUser(user);
      }
    });
  };

  const onSignOut = () => {
    setUser(null);
  };

  return (
    <>
      <NavBar
        currentUser={user}
        onSignOut={onSignOut}
        clocksCount={clocksCount}
      />
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/questions" element={<QuestionIndexPage />} />
        <Route element={<AuthRoutes isAuthenticated={!!user} />}>
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
        <Route
          exact
          path="/sign_in"
          element={<SignInPage onSignIn={getCurrentUser} />}
        />
        <Route
          exact
          path="/sign_up"
          element={<SignUpPage onSignUp={getCurrentUser} />}
        />
        <Route path="/use_state" element={<UseStateHook />} />
        <Route path="/use_effect" element={<UseEffectHook />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}
