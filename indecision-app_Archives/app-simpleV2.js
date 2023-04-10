console.log('app.js is running !');

function clickAction() {  //<button> onclick function
    console.log('clicked !!')
}

function TagUsage() {
    console.log('tagUsage test');
    return <h1>Hello Again !!</h1>
}

function Template() {

    var message = 'Welcome to React !!';
    var messageArr = ['abc', ' ijk'];
    var messageObj = {
        abc: 'plj',
        ijk: 11
    }

    return (
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
            <TagUsage />
        </div>
    );
}

var approot = document.getElementById('reactApp');

ReactDOM.render(<Template />, approot);
