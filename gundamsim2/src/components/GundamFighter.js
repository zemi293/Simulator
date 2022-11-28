import React from 'react'
import ReactDOM  from 'react'

class Fighter extends React.Component {
    constructor(props,GundamName) {
        super(props)
        this.state = GundamName //Might not need this
    }

    render() {
        return (
        <div>
            <div className='GundamImg'></div>
        </div>
        )
    }
}

export default Fighter;