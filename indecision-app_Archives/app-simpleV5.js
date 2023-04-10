// replaced by: ./indecision-app/src/app.js
console.log('app.js is running !');

function clickAction() {  //<button> onclick function
    console.log('clicked !!')
}
var count = 0;

var message = 'Welcome to React !!';
// var messageArr = ['abc', ' ijk', <p>Hello !!</p>, <p>Hi !! {count}</p>];
var messageArr;
var messageObj = {
    abc: 'plj',
    ijk: 11
}

var pHandler = () => {
    count++;
    console.log('clicked !', count);
    render();
}


var approot = document.getElementById('reactApp');

function render() {

    messageArr = [<p key="keyOne">Hello !!</p>, <p key="keyTwo">Hi !!</p>];

    if (count == 5) {
        messageArr.unshift(<h2>Hello ji !!</h2>);
        // messageArr.pop();
        // messageArr[1] = <h2>Hello Ji !</h2>

        // var anotherArr = [];
        // // Array copy
        // anotherArr[0] = messageArr[0];
        // anotherArr[1] = messageArr[1];
        // // Array swap
        // messageArr[0] = anotherArr[1];
        // messageArr[1] = anotherArr[0];
    }

    var template = (
        <div>
            <p>hello !! {count}</p>
            <div>{messageArr}</div>
            {/* <h1 style={{ color: "red" }}>Hello World!</h1> */}
            <p onClick={pHandler}>This is a React App !</p>
            {/* <h2>{<p>Hello !!</p>}</h2>
            <h2><p>Hi !!</p></h2>
            {undefined}
            { }
            {messageObj.abc ? <p>{messageObj.abc}</p> : undefined}
            {messageObj.ijk == 11 && <h4>{messageObj.ijk}</h4>}
            <button type="submit" onClick={clickAction}>Hi ! Click this !!</button> */}
        </div>
    );

    ReactDOM.render(template, approot);
}

render();