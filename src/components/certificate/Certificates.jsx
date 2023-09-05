import React, { Component } from 'react'
import Slider from "react-slick";
import "./Certificates.scss";
import { s1, s2, s3, s4, s5 } from '../../assets';
export class certificates extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className='py-10 mt-32 certificate-wrapper' id="сертификаты">
        <div className="container mx-auto">
            <h1 className="text-center title">Качество продукции подтверждают <span className='mb-8 text-hoverColor'>сертификаты</span></h1>
            <div>
          <Slider {...settings}>
            <div className=" slide-bg-1">
             <div className="container mx-auto">
              <div className="grid grid-cols-5 gap-5 mt-14">
                    <div className="">
                      <img src={s1} alt="" />
                    </div>
                    <div className="">
                      <img src={s2} alt="" />
                    </div>
                    <div className="">
                      <img src={s3} alt="" />
                    </div>
                    <div className="">
                      <img src={s4} alt="" />
                    </div>
                    <div className="">
                      <img src={s5} alt="" />
                    </div>
                   
              </div>
             </div>
            </div>
            <div className="slide-bg-2">
            <div className="container mx-auto">
              <div className="grid grid-cols-5 gap-5 mt-14">
                    <div className="">
                      <img src={s3} alt="" />
                    </div>
                   
                    <div className="">
                      <img src={s2} alt="" />
                    </div>
                    <div className="">
                      <img src={s5} alt="" />
                    </div>
                   
                    <div className="">
                      <img src={s4} alt="" />
                    </div>
                    <div className="">
                      <img src={s1} alt="" />
                    </div>
                 
              </div>
             </div>
            </div>
            <div className=" slide-bg-3">
            <div className="container mx-auto">
              <div className="grid grid-cols-5 gap-5 mt-14">
              <div className="">
                      <img src={s4} alt="" />
                    </div>
                    <div className="">
                      <img src={s5} alt="" />
                    </div>
                  
                    <div className="">
                      <img src={s1} alt="" />
                    </div>
                    
                    <div className="">
                      <img src={s3} alt="" />
                    </div>
                    <div className="">
                      <img src={s2} alt="" />
                    </div>
                   
              </div>
             </div>
            </div>
          </Slider>
        </div>
        </div>
      </section>
    )
  }
}

export default certificates
