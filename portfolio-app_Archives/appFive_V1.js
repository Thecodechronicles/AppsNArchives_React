// location :React_App/portfolio-site/src/playground-files/appFive.js

// import ReactDOM from 'react-dom';
// // import 'normalize.css/normalize.css';
// import './styles/styles.scss';
// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomePage from '../components/HomePage';
// import ContactPage from '../components/ContactPage';
// import NotFoundPage from '../components/NotFoundPage';
// import UpperComponent from '../components/UpperComponent';

console.log('app is running good !');

// const ContactPage = () => (
//     <div>
//         <h1>Contact Us !</h1>
//         <p>This is a contact page </p>
//     </div>
// )

class ContactPage extends React.Component {
    constructor(props) {
        super();
        console.log('ContactPage Object is here !', props);
    }
    render() {
        return (
            <div>
                <h1>Contact Us !</h1>
                <p>This is a contact page </p>
            </div>
        )
    }
}

var renderBinary = false;

const AppRoute = () => (
    <div color='yellow'>
        {console.log(renderBinary)}
        {renderBinary = !renderBinary}
        <ContactPage uhk="Hey there !" />
        {React.createElement(ContactPage, { abc: 'hello !', jkl: 'hi !!' })}
        {/* <div> */}
        {renderBinary && <ContactPage ijk="Namaste !" />}
        {React.createElement(ContactPage, { abcd: 'hello !', jklm: 'hi !!' })}
        <button onClick={renderedAgain}>Click Me !</button>
        {/* </div> */}
    </div>
)

let appRoot = document.getElementById('reactApp');

function renderedAgain() {
    // React.createElement(AppRoute);
    ReactDOM.render(<AppRoute />, appRoot);
}

renderedAgain();
