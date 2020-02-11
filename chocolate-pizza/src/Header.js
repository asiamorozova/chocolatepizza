import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <>
                <div class="header_container">
                    <div id="blogTitle">
                        <img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/logo.png?raw=true" />
                        <div>
                            <p>Delicious</p>
                            <p>THE BEST FOOD BLOG ON THE WEB</p>
                        </div>
                    </div>

                    <div id="links">
                        <table>
                            <tr>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/fb-icon.png?raw=trueg"></img></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/twit-icon.png?raw=true"></img></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/gp-icon.png?raw=true"></img></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/insta-icon.png?raw=true"></img></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/flic-icon.png?raw=true"></img></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/pint-icon.png?raw=true"></img></td>
                                <td></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/rss-icon.png?raw=true"></img></td>
                                <td><img src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/mail-icon.png?raw=true"></img></td>

                            </tr>
                        </table>
                    </div>
                </div>
            </>
        );

    }
}