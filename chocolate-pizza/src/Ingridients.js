import React, { Component } from 'react';
import styles from './Ingridients.css';

export default class Ingridients extends Component {
    render() {
        return (
            <div className = {'table'}>
                <div >
                    <ul>
                        <li>1 1/2 cups milk</li>
                        <li>1/2 cup mascarpone</li>
                        <li>1/2 tps pink salt </li>
                        <li>1 lb Black Mission Figs</li>
                        <li>1/2 cup brown sugar</li>
                        <li>2-4 tbsp water </li>
                    </ul>
                </div>
                <ul>
                    <li>1/2 cups heavy cream</li>
                    <li><strike>1/3 granulated sugar</strike></li>
                    <li><strike>2 egg yolks</strike></li>
                    <li>1 lemon, juiced</li>
                    <li>2 tbsp butter</li>
                    <li>1 cup honey roasted pecans, roughly chopped</li>
                </ul>

            </div>
        );
    }
}
