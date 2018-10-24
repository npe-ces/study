import React, { Component } from 'react'

export default class Title extends Component {
    static defaultProp={
        content : ''
    }
    render() {
        return (
            <div className="title">
                <h5>{this.props.content}</h5>
            </div>
        )
    }
}
