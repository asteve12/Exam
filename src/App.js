import Dashboard from './Pages/DashBoard/Dashboard';
import Login from './Pages/Login/Login';
import Student from './Pages/Student/Student';
import Course from './Pages/Courses/Course';
import Administrator from './Pages/Administrator/Administrator';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Exam from './Pages/Exam/Exam';
import Addadmin from './Pages/AddAdmin/Addadmin';
import Proctoring from './Pages/Proctoring/Proctoring';
import News from './Pages/News/News';
import Result from './Pages/Result/Result';
import Setting from './Pages/Settings/Setting';
import Notification from './Pages/Notification/Notification';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login></Login>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/Exam'>
            <Exam></Exam>
          </Route>
          <Route path='/Student'>
            <Student></Student>
          </Route>
          <Route path='/Course'>
            <Course></Course>
          </Route>
          <Route path='/administrator' component={Administrator}></Route>
          <Route path='/addadmin' component={Addadmin}></Route>
          <Route path='/proctoring' component={Proctoring}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/result' component={Result}></Route>
          <Route path='/setting' component={Setting}></Route>
          <Route path='/notification' component={Notification}></Route>
          <Route render={() => <h1>sorry page not found</h1>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
