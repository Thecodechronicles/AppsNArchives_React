console.log('app is running !');


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

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
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        return (
            <div>
                <p>{appInfo.options.length > 0 ? 'Here are the options' : 'No options'}</p>
                <Option appInfo={appInfo} params={params} />
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.appInfo = this.props.appInfo;
        this.params = this.props.params;
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
        this.formHandler = this.formHandler.bind(this);
        this.appInfo = this.props.appInfo;
        this.params = this.props.params;
    }

    formHandler(e) {
        e.preventDefault();
        this.appInfo.options.push(e.target.elements.option.value);
        e.target.elements.option.value = '';
        this.params.showOption = false;
        customRender();
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

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
        this.pickOption = this.pickOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.params = this.props.params;
        this.appInfo = this.props.appInfo;

        this.state = {
            randomNumeral: 0,
            moreNumeral: 1,
            asyncNumeral: 5
        }

        this.prevOne;
        this.prevTwo;
        this.prevThree;
        this.prevFour;
        this.prevFive;

        this.returnOne;
        this.returnTwo;
        this.returnThree;
        this.returnFour;
        this.returnFive;

    }

    pickOption() {
        var random = Math.floor(Math.random() * this.appInfo.options.length);
        this.params.optionPicked = this.appInfo.options[random];
        this.params.showOption = true;

        // this.state.randomNumeral = 5;
        // customRender();
        // // this.render();
        // this.state.randomNumeral = 11;
        // customRender();
        // customRender();
        // customRender();

        // this.setState({ randomNumeral: 5 });

        // this.setState((prevState) => {
        //     return { randomNumeral: prevState.randomNumeral + 5 }
        // });

        // setTimeout(() => {
        //     // this.state.randomNumeral = 11;
        //     customRender();

        //     this.setState({ randomNumeral: 11 });

        //     // console.log(this.state.randomNumeral);
        //     // this.setState((prevState) => {
        //     //     return { randomNumeral: prevState.randomNumeral + 11 }
        //     // });
        // }, 5000)

        // this.setState({ randomNumeral: this.state.randomNumeral + 5 });
        // this.setState({ randomNumeral: this.state.randomNumeral + 11 });
        // console.log(this.state.randomNumeral);

        this.setState((prevState) => {
            return {
                randomNumeral: prevState.randomNumeral + 5
            }
        });

        this.setState((prevState) => {
            return {
                randomNumeral: prevState.randomNumeral + 11
            }
        });
        // this.setState((prevState) => {
        //     this.prevOne = prevState;
        //     console.log(prevState);
        //     this.state.randomNumeral = this.state.randomNumeral + 5;
        //     console.log(prevState);

        //     if (prevState === this.state) {
        //         console.log('yes')
        //     } else {
        //         console.log('No');
        //     }

        //     console.log(this.state);

        //     var obj = {
        //         randomNumeral: prevState.randomNumeral + 11,
        //         abcd: 21
        //     }

        //     this.returnOne = obj;
        //     return obj;
        // });

        // this.setState((prevState) => {
        //     this.prevTwo = prevState;

        //     console.log('receivedState: ', prevState);

        //     if (this.returnOne === prevState) {
        //         console.log('returnObj: yes');
        //     } else {
        //         console.log('returnObj: No');
        //     }

        //     console.log(prevState);
        //     this.state.randomNumeral = this.state.randomNumeral + 5;
        //     console.log(prevState);

        //     if (prevState === this.state) {
        //         console.log('yes')
        //     } else {
        //         console.log('No');
        //     }

        //     console.log(this.state);

        //     var obj = {
        //         randomNumeral: prevState.randomNumeral + 11,
        //         hmg: 21
        //     }
        //     this.returnTwo = obj;
        //     return obj;
        //     // return { randomNumeral: prevState.randomNumeral + 11 }
        // });

        // this.setState((prevState) => {
        //     this.prevFour = prevState;

        //     console.log('receivedState: ', prevState);
        //     console.log('receivedState another: ', this.prevTwo);


        //     console.log(prevState);
        //     this.state.randomNumeral = this.state.randomNumeral + 5;
        //     console.log(prevState);
        //     if (prevState === this.state) {
        //         console.log('yes')
        //     } else {
        //         console.log('No');
        //     }
        //     console.log(this.state);

        //     if (this.prevTwo === this.prevFour) {
        //         console.log('PrevState: yes')
        //     } else {
        //         console.log('prevState: No');
        //     }
        //     return { randomNumeral: prevState.randomNumeral + 11 }
        // });

        //     console.log('this.state: ', this.state.randomNumeral);
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
                <p>{this.state.randomNumeral}</p>
                <br />
            </div>
        );
    }
}

class DisplayDecision extends React.Component {
    constructor(props) {
        super(props);
        this.showOption = this.props.showOption;
        this.params = this.props.params;
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

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
        this.params = {
            appInfo: {
                title: 'Indecision App',
                subtitle: 'This computer wil help you in decision making',
                options: ['one', 'two']
            },
            showOption: false,
            optionPicked: 0
        }
    }

    render() {

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