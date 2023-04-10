console.log('app is running !');


class Header extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);
        console.log('HeaderProps', this.props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        console.log(this.constructor.name, propObj);

        return (
            <div>
                <h1>{appInfo.title}</h1>
                {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            </div>
        );
    }
}


class Options extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;
        console.log(this.constructor.name, appInfo);

        return (
            <div>
                <p>{appInfo.options.length > 0 ? 'Here are the options' : appInfo.options}</p>
                <Option appInfo={appInfo} params={params} />
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(e) {
        this.props.appInfo.options.splice(e.target.parentElement.id, 1);
        this.props.params.showOption = false;
        customRender();
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        console.log(this.constructor.name, propObj);

        return (
            <div>
                <ol>
                    {appInfo.options.length > 0 && appInfo.options.map((item, index) => (
                        <li key={item} id={index}>Item {item} &nbsp;
                            <button onClick={this.removeItem}>Remove Item</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);

        this.formHandler = this.formHandler.bind(this);
        this.randomProp = 0;
    }

    formHandler(e) {
        e.preventDefault();
        console.log('Form pros', this.props);
        this.props.appInfo.options.push(e.target.elements.option.value);
        e.target.elements.option.value = '';
        this.props.params.showOption = false;
        // console.log(appInfo.options);
        // this.randomProp = this.randomProp + 1;
        customRender();
        // this.state = {

        // }
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        console.log(this.constructor.name, propObj);

        return (
            <div>
                <form onSubmit={this.formHandler}>
                    <input type="text" name="option" />
                    <button>Add Option{this.randomProp}</button>
                </form>
                <br />
            </div>
        );
    }
}

class WhatDecision extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);

        this.pickOption = this.pickOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);

        this.params = this.props.params;
        this.appInfo = this.props.appInfo;

        this.state = {
            randomNumeral: 0
        }


    }

    pickOption() {
        // function abc([, callback]) {
        //     console.log(callback);
        // }

        // abc([
        //     'hello',
        //     'hi'
        // ]);
        // console.log('pickOption invoked !');
        var random = Math.floor(Math.random() * this.appInfo.options.length);
        this.params.optionPicked = this.appInfo.options[random];
        this.params.showOption = true;
        // console.log('pickOption invoked !', this.params);
        customRender();

        // this.setState({ randomNumeral: 5 });
    }

    removeAllOptions() {
        this.appInfo.options = [];
        this.params.showOption = false;
        customRender();
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        console.log(this.constructor.name, propObj);

        return (
            <div>
                <button disabled={appInfo.options.length === 0} onClick={this.pickOption}>What should i do ?</button>
                <button onClick={this.removeAllOptions}>Clear All</button>
                {/* <p>{this.state.randomNumeral}</p> */}
                <br />
            </div>
        );
    }
}

class DisplayDecision extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);

        this.showOption = this.props.showOption;
        this.params = this.props.params;
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        console.log(this.constructor.name, propObj);

        return (
            <div>
                {/* {<p>Numeral: {this.state.randomNumeral}</p>} */}
                {params.showOption && <p>Here's what you can choose : {params.optionPicked}</p>}
                <br />
            </div>
        );
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        console.log(this.constructor.name, propObj);

        return (
            <div>
                <Header appInfo={appInfo} />
                <Options appInfo={appInfo} params={params} />
                <Form appInfo={appInfo} params={params} />
                <WhatDecision appInfo={appInfo} params={params} />
                <DisplayDecision appInfo={appInfo} params={params} />
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log(`inside ${this.constructor.name}`);

        // this.showOption = false;
        // this.optionPicked = 0;

        this.params = {
            appInfo: {
                title: 'Indecision App',
                subtitle: 'This computer wil help you in decision making',
                options: ['one', 'two']
            },
            showOption: false,
            optionPicked: 0
        }
        // this.appInfo = {
        //     title: 'Indecision App',
        //     subtitle: 'This computer wil help you in decision making',
        //     options: ['one', 'two']
        // }
    }

    render() {

        // let propObj = {
        //     showOption: this.props.showOption,
        //     optionPicked: this.props.optionPicked,
        //     appInfo: this.props.appInfo
        // };
        // const { showOption, optionPicked, appInfo } = propObj;

        console.log(this.constructor.name, this.params.appInfo);

        return (
            <div>
                <IndecisionApp params={this.params} appInfo={this.params.appInfo} />
            </div>
        );
    }
}

let appRoot = document.getElementById('reactApp');

var customRender = () => {
    ReactDOM.render(<App />, appRoot);
}

customRender();