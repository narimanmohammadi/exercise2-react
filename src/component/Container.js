import React, { Component } from 'react'
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'
import Image from './Image'
import AboutUs from './AboutUs'
import '../style/style.scss';
import img1 from '../image/wp6918361.jpg'
import img2 from '../image/wp5924641.jpg'
import img3 from '../image/wp5510903.jpg'
import img4 from '../image/wp3944702.jpg'
import img5 from '../image/roronoa-zoro-wanted-5120x2880-10911.jpg'
import img6 from '../image/one-piece.jpg'
import img7 from '../image/one-piece-character-art-5120x2880-21557.jpeg'
import img8 from '../image/one-piece-4k-3840x2160-10904.png'
import img9 from '../image/monkey-d-luffy-4k-5120x2880-10906.jpg'
import img10 from '../image/monkey-d-luffy-2366x1690-10900.jpg'

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
      counter: 0,
    }
  }
  previousImage = () => {
    if (this.state.counter > 0) {
      this.setState((prevCounter) => ({ counter: prevCounter.counter - 1 }));
    } else {
      this.setState({ counter: 9 });
    }
  }
  nextImage = () => {
    if (this.state.counter < 9) {
      this.setState((nextCounter) => ({ counter: nextCounter.counter + 1 }));
    } else {
      this.setState({ counter: 0 });
    }
  }
  render() {
    return (
      <div  className='container'>
        <div>
          <Routes>
            <Route path='/home' element={<Home image={this.state.image[this.state.counter]} previousImage={this.previousImage} nextImage={this.nextImage}></Home>}></Route>
            <Route path='/movie' element={<Movie />}></Route>
            <Route path='/Image' element={<Image />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}></Route>
          </Routes>
        </div>
      </div>
    )
  }
}
