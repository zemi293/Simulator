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
            <div className='GundamStats'>
                <p>`${this.props.GundamList.ShiningG.HP}`</p>
                <p>`${this.props.GundamList.ShiningG.Str}`</p>
                <p>`${this.props.GundamList.ShiningG.Dex}`</p>
                <p>`${this.props.GundamList.ShiningG.Const}`</p>
            </div>
        </div>
        )
    }
}

export default Fighter;