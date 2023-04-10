console.log('App Running !');

let appInfo = {
    title: 'Indecision App',
    subtitle: 'This computer wil help you in decision making',
    options: ['one', 'two']
}

function Template() {

    // var ownCustomHandler = (e) => {
    //     // 'this' wouldn't work inside a react handler. 
    //     e.preventDefault();
    //     var h1Element = document.querySelector('h1');
    //     // console.log(h1Element);
    //     console.log(e.target);
    //     console.log(this);
    //     h1Element.style.backgroundColor = 'purple';
    // }

    var formHandler = () => {

    }

    return (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? 'Here are the options' : 'No options'}</p>
            <ol>
                <li>Item One</li>
                <li>Item two</li>
            </ol>
            <div>
                <h1>Hello !</h1>
                <p>Welcome !!</p>
            </div>
            <form onSubmit={formHandler}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
}

let appRoot = document.getElementById('reactApp');

ReactDOM.render(<Template />, appRoot);