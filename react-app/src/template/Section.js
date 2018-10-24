import React, { Component } from 'react';
// import CharacterList from './CharacterList.js';
import GroupList from './GroupList';

export default class Section extends Component {
  render() {
    return (
      <section>
        <GroupList/>
      </section>
    )
  }
}
