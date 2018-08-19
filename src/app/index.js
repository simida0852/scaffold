import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #00a6f3;
  font-size: 28px;
`;
const Button = styled.div`
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid red;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const H1Styled = styled.h1`
  text-align: center;
`;
class App extends Component {
  state = {
    counter: 0
  };
  handleClickAdd = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  handleClickReduce = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  handleClickRest = () => {
    this.setState({
      counter: 0
    });
  };
  componentWillMount(){
      console.log('willMount')
  }
  componentDidMount(){
      console.log('didMount')
  }
  render() {
      console.log('render')
    return (
      <Container>
        <H1Styled>{this.state.counter}</H1Styled>
        <ButtonGroup>
          <Button onClick={this.handleClickAdd}>加</Button>
          <Button onClick={this.handleClickReduce}>减</Button>
          <Button onClick={this.handleClickRest}>重置</Button>
        </ButtonGroup>
      </Container>
    );
  }
}

export default App;
