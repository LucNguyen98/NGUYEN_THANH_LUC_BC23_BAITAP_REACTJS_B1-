import React, { Component } from 'react'

export default class Body extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
