import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../style/style.scss';



export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_button_class: 'header-button-unactive',
      // flag: false,
    }
  }
  change_class_header_button_click = (event) => {
    event.target.className = "header-button-active";
  }
  change_class_header_button_up = (event) => {
    event.target.className = "header-button-unactive";
  }
  render() {
    return (
      <div className='Header'>
        <div>
          <Link to='home' onMouseDown={this.change_class_header_button_click} className={this.state.header_button_class} onMouseUp={this.change_class_header_button_up}>Home</Link>
        </div>
        <div>
          <Link to='movie'
            onMouseDown={this.change_class_header_button_click}
            className={this.state.header_button_class}
            onMouseUp={this.change_class_header_button_up}>
            Movie
          </Link>
        </div>
        <div>
          <Link to='image'
            onMouseDown={this.change_class_header_button_click}
            className={this.state.header_button_class}
            onMouseUp={this.change_class_header_button_up}>
            Image
          </Link>
        </div>
        <div>
          <Link to='aboutus'
            onMouseDown={this.change_class_header_button_click}
            className={this.state.header_button_class}
            onMouseUp={this.change_class_header_button_up}>
            About Us
          </Link>

        </div>
        {<Outlet />}
      </div>
    )
  }
}
