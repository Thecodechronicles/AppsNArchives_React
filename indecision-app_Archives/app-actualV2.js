console.log('App Running !');

let appInfo = {
    title: 'Indecision App',
    subtitle: 'This computer wil help you in decision making',
    options: ['one', 'two']
}

var formHandler = (e) => {
    e.preventDefault();
    appInfo.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    console.log(appInfo.options);
    render();
}

var removeOptions = () => {
    appInfo.options = [];
    render();
}

// var ownCustomHandler = (e) => {
//     // 'this' wouldn't work inside a react handler. 
//     e.preventDefault();
//     var h1Element = document.querySelector('h1');
//     // console.log(h1Element);
//     console.log(e.target);
//     console.log(this);
//     h1Element.style.backgroundColor = 'purple';
// }

function Template() {

    return (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? 'Here are the options' : 'No options'}</p>
            <ol>
                {/* <li>Item One</li>
                <li>Item two</li> */}
                {appInfo.options.length > 0 && appInfo.options.map((item) => {
                    return <li key={item}>Item {item}</li>
                })}
            </ol>
            <form onSubmit={formHandler}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <br />
            <button onClick={removeOptions}>Clear All</button>
        </div>
    );
}

let appRoot = document.getElementById('reactApp');

var render = () => {
    ReactDOM.render(<Template />, appRoot);
}

render();