import React, { Component } from 'react'
import '../style/style.scss';
import imgprofile from '../image/8c117b47-b46a-484e-927a-b7ff639f6a79.jpg'


export default class AboutUs extends Component {
  render() {
    return (
      <div className='aboutus'>
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <div>
            <img src={imgprofile} alt="" />
            <h2>Nami</h2>
          </div>
          <div>
            <h1>Hey there! <i className="fa-solid fa-hand"></i></h1>
            <h2>I'm <span>Nami</span></h2>
            <h5>Nami@onepiece.co</h5>
            <h3>Founder</h3>
            <p>Repellat fugit odit et sit maiores. Nostrum reiciendis omnis temporibus soluta magnam distinctio iusto velit. Et et tenetur illum. Quod corrupti quo omnis voluptatem consequatur est quasi excepturi dolor. Facilis amet molestiae cum autem inventore ullam soluta. Consequatur ab odit voluptatem quasi aperiam blanditiis quos.

              Voluptatum ipsa fugiat. Nostrum nesciunt totam suscipit nostrum. Illo voluptatem velit.

              Aspernatur neque repellat suscipit impedit mollitia. Temporibus id ea enim autem aut a. Velit harum nihil.</p>
            <span>"Qui et tempore corporis et est rerum ipsam nostrum"</span>
          </div>
        </div>
      </div>
    )
  }
}
