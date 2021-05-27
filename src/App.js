import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { PublicNavbar, PrivateNavbar } from './components/Navbar';
import HomePage from './pages/HomePage';
import SingleQuestionPage from './pages/SingleQuestionPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionFormPage from './pages/QuestionFormPage';
import AnswerFormPage from './pages/AnswerFormPage';
import OwnerQuestionsPage from './pages/OwnerQuestionsPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Footer } from './components/Footer';

firebase.initializeApp({
  apiKey: 'AIzaSyA_DPUHPTfxSPV5SUtiLTFecDl0hTbx7ew',
  authDomain: 'react-firebase-3382f.firebaseapp.com',
  projectId: 'react-firebase-3382f',
  storageBucket: 'react-firebase-3382f.appspot.com',
  messagingSenderId: '56966317297',
  appId: '1:56966317297:web:e6ea3714934f51bfd01550',
  measurementId: 'G-ZR2XWRSEWG',
});

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(auth);
  if (user?.uid) {
    localStorage.setItem('uid', user?.uid);
  }
  return (
    <Router>
      {user ? (
        <>
          <PrivateNavbar />
          <Switch>
            <Route
              exact
              path='/'
              component={() => {
                return (
                  <HomePage>
                    <SignOut />
                  </HomePage>
                );
              }}
            />
            <Route exact path='/questions' component={QuestionsPage} />
            <Route exact path='/question/:id' component={SingleQuestionPage} />
            <Route exact path='/list' component={OwnerQuestionsPage} />
            <Route exact path='/answer/:id' component={AnswerFormPage} />
            <Route exact path='/new' component={QuestionFormPage} />
            <Redirect to='/' />
          </Switch>
          <Footer />
        </>
      ) : (
        <>
          <PublicNavbar />

          <Switch>
            <Route
              exact
              path='/'
              component={() => {
                return (
                  <HomePage>
                    <SignIn />
                  </HomePage>
                );
              }}
            />
            <Route exact path='/questions' component={QuestionsPage} />
            <Route exact path='/question/:id' component={SingleQuestionPage} />
            <Route exact path='/answer/:id' component={AnswerFormPage} />
            <Redirect to='/' />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className='button right' onClick={signInWithGoogle}>
      Log in with Google
    </button>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className='button'
        onClick={() => {
          localStorage.removeItem('uid');
          auth.signOut();
        }}>
        Log out
      </button>
    )
  );
}

export default App;
