import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 300px;
  height: 150px;
  color: #f27059;
  background-color: #2d2d34;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #f27059;
    transition: 0.4s all ease;
  }
  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #f27059;
    transition: 0.4s all ease;
  }
  &:hover::after {
    transform: translateY(10px);
  }
  &:hover::before {
    transform: translateY(-10px);
  }
`
const Item = styled.div`
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 2px;
    height: 100%;
    background-color: #f27059;
    transition: 0.6s all ease;
    z-index: -1;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 2px;
    height: 100%;
    background-color: #f27059;
    transition: 0.6s all ease;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover{
      color: #fff;
  }
`

class Button extends Component {
  render() {
    return (
      <Container>
        <Item>word</Item>
      </Container>
    )
  }
}

export default Button
