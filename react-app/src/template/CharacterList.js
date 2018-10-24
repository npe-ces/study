import React, { Component } from 'react'
import Text from '../atom/Text';
import Title from '../atom/Title';

export default class CharacterList extends Component {
  render() {
    return (
      <div className="character-list">
        <div className="summary">
          <div className="profile-pic">
            <img src="image/char.png" alt="" />
          </div>
          <div className="right">
            <Title/>
            <Text/>
          </div>
        </div>
        <div className="detail">
          국회의원은 법률이 정하는 직을 겸할 수 없다. 탄핵의 결정, 언론·출판은 타인의 명예나 권리 또는 공중도덕이나 사회윤리를 침해하여서는 아니된다, 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.

          법률이 정하는 바에 의하여 연임할 수 있다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며.

          다만. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다. 국민에 대하여 책임을 진다. 다만.

          국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다, 1차에 한하여 중임할 수 있다. 제2항의 재판관중 3인은 국회에서 선출하는 자를.
          </div>
      </div>
    )
  }
}
