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
import thunk from 'redux-thunk';
//reducer
import { examSettingsReducer } from './store/reducer/examSettings';
import previousReducer from './store/reducer/previous';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  examDetail: examSettingsReducer,
  previousDetails: previousReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState(rootReducer));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
