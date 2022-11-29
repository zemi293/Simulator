import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div className="GundamProfile">
            <h2>Shining Gundam</h2>
            <div className='ProfilePic'>
            <a href= {this.props.ShiningG.GundamWiki}>
                <img src={this.props.ShiningG.ProfilePic}></img>
            </a>
            </div>
        </div>
    )}
}

export default Profile;