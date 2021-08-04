import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
  // 숫자 네 개를 중복되지 않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  // bind this를 자동으로 해준다.
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  fruits = [
    { fruit: '사과', taste: '맛있다' },
    { fruit: '바나나', taste: '맛없다' },
    { fruit: '포도', taste: '시다' },
    { fruit: '오렌지', taste: '상큼하다' },
    { fruit: '수박', taste: '시원하다' },
    { fruit: '메론', taste: '달다' },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <div>시도: {this.state.tries.length}</div>
          <ul>
            {this.fruits.map((v, i) => {
              return <Try key={v.fruit + v.taste} value={v} index={i} />;
            })}
          </ul>
        </form>
      </>
    );
  }
}

export default NumberBaseball;
