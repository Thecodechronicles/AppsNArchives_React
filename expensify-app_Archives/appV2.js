import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

console.log('app is running !');

var customHistory;
// console.log(useHistory);
// let history = useHistory();

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

function handleClick(e) {
    console.log('handleClick invoked');
    // customHistory.location.pathname = "/edit";
    // customHistory.createHref(customHistory.location);
    // e.preventDefault();
    // history.replaceState(null, null, '/create');
    // history.go();
    // window.addEventListener('popstate', customRender);
    // customHistory.push("/edit");
    // customLocation.pathname = "/edit";
    customRender();
}

const NotFoundPage = (props) => {
    customHistory = props.history; // It is different than 'window.history'. 'props.history.push' re-renders the react dom by using 'setState' (sort of.. still the re-renderding part has to be looked into.. how Link renders a component ? by using context API.. Redux or what ?). So, no need to use 'customRender()' here when using 'props.history.push' 
    console.log(props.history);
    return (
        <div>
            404 ! <p onClick={handleClick}>Go Home</p>
            {/* 404 ! <Link to="/edit">Go Home</Link> */}

        </div>
    )
}

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

function customRender() {
    // history.pushState(null, null, '/create');
    // console.log(location.pathname);
    ReactDOM.render(routes, appRoot);
}
// ReactDOM.render(MyComponent, appRoot);

customRender();
