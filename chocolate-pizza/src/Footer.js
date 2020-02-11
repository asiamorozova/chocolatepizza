import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div class="info">
                <p>{this.props.name}</p>
                <img src={this.props.src} />
                <p>{this.props.paragraph}</p>
            </div>


        );
    }
}