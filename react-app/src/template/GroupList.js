import React, { Component } from 'react'
import Tag from '../atom/Tag';
import Text from '../atom/Text';
import Title from '../atom/Title';

export default class GroupList extends Component {
    render() {
        return (
            <div className="card-list">
                <div className="background-pic">
                    <img src="image/temp.png" alt="" />
                </div>
                <div className="profile-pic">
                    <img src="image/char.png" alt="" />
                </div>
                <div className="bottom">
                    <Title content="뭐지뭐지"/>
                    <Text content="Lorem ipsum"/>
                    <Tag/>
                </div>
            </div>
        )
    }
}
