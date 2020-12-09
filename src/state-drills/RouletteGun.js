import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    setRandomChamber = () => {
        const chamberNumber = Math.ceil(Math.random() * 8)
        this.setState({
            chamber: chamberNumber,
            spinningTheChamber: false
        })
    }

    cycleNumber = () => {
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout(this.setRandomChamber, 2000)
    }

    setDisplayText = () => {
        if(this.state.spinningTheChamber === true) {
            return <p>spinning the chamber and pulling the trigger! ...</p>
        }
        else if(this.state.chamber === this.props.bulletInChamber) {
            return <p>BANG!!!</p>
        }
        else {
            return <p>You're safe! For now...</p>
        }
    }

    render() {
        return (
            <div>
                {this.setDisplayText()}
                <button onClick={this.cycleNumber}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;