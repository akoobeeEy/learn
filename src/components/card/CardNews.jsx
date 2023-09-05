import React, { Component } from 'react'

export class CardNews extends Component {
  render() {
    const {image,date,desc} = this.props;
    console.log(this.props);
    return (
      <div className=''>
        <img src={image} alt=""  className='mb-6'/>
        <p className="mb-3 text-xs font-medium text-gray-300 md:text-sm">{date}</p>
        <p className="text-xs font-medium md:text-base text-titleColor">{desc}</p>
      </div>
    )
  }
}

export default CardNews
