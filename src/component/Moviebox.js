import React, { Component } from 'react'
import '../style/style.scss'
import img1 from '../image/movies/1.jpg'
import img2 from '../image/movies/2.jpg'
import img3 from '../image/movies/3.jpg'
import img4 from '../image/movies/4.jpg'
import img5 from '../image/movies/5.jpg'
import img6 from '../image/movies/6.jpg'
import img7 from '../image/movies/7.jpg'
import img8 from '../image/movies/8.jpg'
import img9 from '../image/movies/9.jpg'

class Moviebox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [img1,img2,img3,img4,img5,img6,img7,img8,img9]
        }
    }

    render() {
        const { Title, Director, Year, Genre , Id} = this.props;
        return (
            <>
            <div className='moviebox'>
                <div>
                    <img src={this.state.images[Id]} alt="" />
                </div>
                <div>
                    <h1>{Title}</h1>
                </div>
                <div>
                    <p>{Director}</p>
                    <p>{Year}</p>
                </div>
                <div>
                    <p>{Genre}</p>
                </div>
            </div>
            </>
        )
    }
}
export default Moviebox;