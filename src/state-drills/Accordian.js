import React from 'react'

class Accordian extends React.Component {
    // static defaultProps ={
    //     sections: []
    // }
    state ={
        buttonIndex: null
    }

    handleButtonClick = (index) => {
        this.setState({buttonIndex: index})
    }

    renderListItems(section, index, buttonIndex) {
        return (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(buttonIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const {buttonIndex} = this.state
        const { sections } = this.props
        return (
            <ul className='Accordian'>
                {sections.map((section, index) => 
                    this.renderListItems(section, index, buttonIndex)
                )}
            </ul>
        )
    }
}

export default Accordian;