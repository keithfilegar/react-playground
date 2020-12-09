import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "world"
    }

    handleButtonClick = (event) => {
        this.setState({ who: event.target.id})
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button id="world" onClick={this.handleButtonClick}>World</button>
                <button id="friend" onClick={this.handleButtonClick}>Friend</button>
                <button id="react" onClick={this.handleButtonClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;