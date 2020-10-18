import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalDetails from './pages/personal-details';
import EmailVerification from './pages/email-verification';
import Successfull from './pages/successfull';
import CompanyDetails from './pages/company-details';


class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={PersonalDetails} />
          <Route path="/company-details" component={CompanyDetails} />
          <Route path="/email-verification" component={EmailVerification} />
          <Route path="/sucessfully-registered" component={Successfull} />
        </Switch>
      </div>
    );
  }
}

export default App;

