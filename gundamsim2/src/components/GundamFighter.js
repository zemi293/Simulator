import React from 'react'
import ReactDOM  from 'react'

class Fighter extends React.Component {
    constructor(props,GundamName) {
        super(props)
        this.state = GundamName //Might not need this
    }

    render() {
        return (
        <div className='GundamFighter'>
            <div className='GundamImg'>
                <img src={this.props.GundamList.ShiningG.ImageSrc}></img>
            </div>
        </div>
        )
    }
}

export default Fighter;