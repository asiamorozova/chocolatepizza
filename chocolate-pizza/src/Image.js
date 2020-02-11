import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (<div>
            <div id="header">
                <h1>{this.props.header}</h1>
            </div>
            <div id="pizza image">
                <img src= {this.props.src}
                alt={this.props.alt} />
            </div>

        </div>
        );

    }
}