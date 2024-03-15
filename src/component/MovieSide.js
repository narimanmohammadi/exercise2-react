import React, { Component } from 'react'
import '../style/style.scss'


class MovieSide extends Component {

    render() {
        const { genreArray , activeClass , unactiveClass} = this.props;
        return (
            <div className='movieSide'>
                {genreArray.map((genre) =>
                    <>
                        <button className='unactive' value={genre} onClick={activeClass}>{genre}</button>
                    </>
                )}
            </div>
        )
    }
}

export default MovieSide;
