console.log('App Running !');

var showOption = false;
var optionPicked;

let appInfo = {
    title: 'Indecision App',
    subtitle: 'This computer wil help you in decision making',
    options: ['one', 'two']
}

var formHandler = (e) => {
    e.preventDefault();
    appInfo.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    showOption = false;
    // console.log(appInfo.options);
    render();
}

var removeAllOptions = () => {
    appInfo.options = [];
    showOption = false;
    render();
}

var removeItem = (e) => {
    appInfo.options.splice(e.target.parentElement.id, 1);
    showOption = false;
    render();
}

var pickOption = () => {
    var random = Math.floor(Math.random() * appInfo.options.length);
    optionPicked = appInfo.options[random];
    showOption = true;
    render();
}

function Template() {

    return (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? 'Here are the options' : 'No options'}</p>
            <ol>
                {appInfo.options.length > 0 && appInfo.options.map((item, index) => (
                    <li key={item} id={index}>Item {item} &nbsp;
                        <button onClick={removeItem}>Remove Item</button>
                    </li>
                ))}
            </ol>
            <form onSubmit={formHandler}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <br />
            <button disabled={appInfo.options.length === 0} onClick={pickOption}>What should i do ?</button>
            <button onClick={removeAllOptions}>Clear All</button>
            <br />
            {showOption && <p>Here's what you can choose : {optionPicked}</p>}
        </div>
    );
}

let appRoot = document.getElementById('reactApp');

var render = () => {
    ReactDOM.render(<Template />, appRoot);
}

render();