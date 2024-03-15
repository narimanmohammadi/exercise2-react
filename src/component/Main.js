import React, { Component } from 'react'
import Header from './Header'
import Container from './Container'
import '../style/style.scss';


export default class CompMain extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Container/>
      </div>
    )
  }
}
