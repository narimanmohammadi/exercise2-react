import React, { Component } from 'react'
import '../style/style.scss'

class Home extends Component {
  render() {
    const { image, previousImage, nextImage } = this.props
    return (
      <div className='home'>
        <div>
          <img src={image} alt="" />
          <button onClick={previousImage} id='btnPrevious'><i className="fa-solid fa-circle-chevron-left"></i></button>
          <button onClick={nextImage} id='btnNext'><i className="fa-solid fa-circle-chevron-right"></i></button>
        </div>
      </div>
    )
  }
}
export default Home;
