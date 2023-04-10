console.log('app.js is running !');

var count = 0;

// function clickAction() {  //<button> onclick function
//     console.log('clicked !!')
// }

function greetingCounter() {
    count++;
    renderer();
}

function TagUsage() {
    console.log('TagUsage test');
    return <h1>Hello Again !! {count} </h1>
}

function Template() {

    var message = 'Welcome to React !!';
    var messageArr = ['abc', ' ijk'];
    var messageObj = {
        abc: 'plj',
        ijk: 11
    }

    var templateOne = (
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
            <button type="submit" onClick={greetingCounter}>Hi ! Click this !!</button>
            <TagUsage />
        </div>
    );

    var templateTwo = (<div>
        <h2>Here is another message !!</h2>
        <p>All sub messages here !</p>
    </div>);

    var returnTemplate;

    if (count == 11) {
        returnTemplate = templateTwo;
    }
    else {
        returnTemplate = templateOne;
    }

    return returnTemplate;
}

var approot = document.getElementById('reactApp');

function renderer() {
    ReactDOM.render(<Template />, approot);
}

renderer();