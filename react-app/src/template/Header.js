import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-right">
                    <div className="search">
                        <input type="text" placeholder="Search.." name="search" id="search" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="profile-icon">
                        <img src="\image\char.png" alt="profile-pic" />
                    </div>
                    <div className="btn btn-default">Sign out</div>
                </div>
            </header>
        );
    }
}