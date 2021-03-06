import react from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ArtistType from './components/ArtistType'
import SignUp from './components/Auth/SignUp/SignUp'
import Login from './components/Auth/Login/Login'
import LoginWithNum from './components/Auth/Login/LoginWithPhNo'
import SignUpWithNum from './components/Auth/SignUp/SignUpWithNum'
import CodeVerification from './components/Auth/Login/CodeVerification'
import Claim from './components/Claim'



function App() {
  return (
    <div className="App">
    <Switch>
      <Route
        exact path='/claim' 
        render={() => (
        <Claim/>
        )}
      />
      <Route
        exact path='/code-verification' 
        render={() => (
        <CodeVerification/>
        )}
      />
      <Route
        exact path='/signup-no' 
        render={() => (
        <SignUpWithNum />
        )}
      />
      <Route
        exact path='/login-no' 
        render={() => (
        <LoginWithNum/>
        )}
      />
      <Route
        exact path='/login' 
        render={() => (
        <Login/>
        )}
      />
      <Route
          exact path='/signup' 
          render={() => (
          <SignUp/>
          )}
        />
      <Route
        exact path='/artist-type' 
        render={() => (
        <ArtistType/>
        )}
      />

      <Route
        exact path="/"
        component={LandingPage}
      />
     
    </Switch>
     
    </div>
  );
}

export default App;
