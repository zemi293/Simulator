import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        <div className="GundamProfile">
            <h2>Shining Gundam</h2>
            <div className='ProfilePic'>
            <img src={this.props.ShiningG.ProfilePic}></img>
            </div>
        </div>
    }
}