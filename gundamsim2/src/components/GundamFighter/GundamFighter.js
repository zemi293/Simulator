import React from 'react';
import ReactDOM  from 'react';
import './GundamFighter.css';

class Fighter extends React.Component {
    constructor(props,GundamName) {
        super(props)
        this.state = GundamName //Might not need this
    }

    render() {
        return (
        <div className='GundamFighter'>
            <div className='GundamImg'>
                <img src={this.props.GundamList.ShiningG.ImageSrc} 
                height = '500' 
                width= '350px' 
                alt = 'GundamFighter'>
                </img>
            </div>
        </div>
        )
    }
}

export default Fighter;