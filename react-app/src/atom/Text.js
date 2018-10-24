import React, { Component } from 'react'

export default class Text extends Component {
    static defaultProp={
        content:''
    }
    render() {
        return (
            <div className="text">
                <h6>{this.props.content}</h6>
            </div>
        )
    }
}
