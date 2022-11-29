import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        <div className="GundamProfile">
            <h2>Shining Gundam</h2>
            <div className='ProfilePic'>
            <a href= {this.props.ShiningG.GundamWiki}>
                <img src={this.props.ShiningG.ProfilePic}></img>
            </a>
            </div>
        </div>
    }
}