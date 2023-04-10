// replaced by: ./indecision-app/src/app.js
console.log('app.js is running !');

function clickAction() {  //<button> onclick function
    console.log('clicked !!')
}

var message = 'Welcome to React !!';
var messageArr = ['abc', ' ijk'];
var messageObj = {
    abc: 'plj',
    ijk: 11
}

var template = (
    <div>
        {messageArr}
        <h1 style={{ color: "red" }}>Hello World!</h1>
        <p>This is a React App ! {messageArr}</p>
        <h2>{<p>Hello !!</p>}</h2>
        <h2><p>Hi !!</p></h2>
        {undefined}
        { }
        {messageObj.abc ? <p>{messageObj.abc}</p> : undefined}
        {messageObj.ijk == 11 && <h4>{messageObj.ijk}</h4>}
        <button type="submit" onClick={clickAction}>Hi ! Click this !!</button>
    </div>
);

var approot = document.getElementById('reactApp');

ReactDOM.render(template, approot);
