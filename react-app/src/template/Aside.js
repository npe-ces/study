import React, { Component } from 'react'

export default class Aside extends Component {
  render() {
    return (
      <aside>
        <div className="background-pic">
          <img src="image/temp.png" alt="" />
        </div>
        <div className="profile-pic">
          <img src="image/char.png" alt="" />
        </div>
        <div className="menu">
          <h5>제목</h5>
          <h6>H6</h6>
          <h5>텍스트</h5>
          <h6>H6</h6>
          <h6>H6</h6>
          <h6>H6</h6>
          <h6>H6</h6>
          <h6>H6</h6>
        </div>
      </aside>
    )
  }
}
