import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    }

    componentDidMount () {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log(this.state.count)
            const counter = this.state.count 
            this.setState({
                count: counter + 1
            })
        }, 1000)
        
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    setDisplayText = () => {
        if(this.state.count >= 8){
            this.componentWillUnmount()
            return <p>BOOM!!!</p>
        } else if(this.state.count % 2 === 0) {
            return <p>tick</p>
        } else {
            return <p>tock</p>
        }
    }

    render(){
        return (
            <div>
                {this.setDisplayText()}
            </div>
        )
    }
}

export default Bomb