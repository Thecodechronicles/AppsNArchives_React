import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

console.log('app is running !');

const ExpenseDashboardPage = (props) => (
    <div>
        Hello !! This is the Dashboard Page !
    </div>
)

const AddExpensePage = (props) => (
    <div>
        Hello !! This is the Add Expense Page !
    </div>
)

const EditExpensePage = (props) => (
    <div>
        Hello !! This is the Edit Page !
    </div>
)

const HelpPage = (props) => (
    <div>
        Hello !! This is the Help Page !
    </div>
)

const NotFoundPage = (props) => (
    <div>
        404 ! <Link to="/">Go Home</Link>
    </div>
)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

let appRoot = document.getElementById('reactApp');

ReactDOM.render(routes, appRoot);