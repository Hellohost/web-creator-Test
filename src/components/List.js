import React from 'react'
import Card from './Card'
import Slider from "react-slick"
import './List.css'



export default function List({ items, titleImg }) {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%", backgroundColor: 'grey', marginTop: '140px', marginLeft: '20px' }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%", backgroundColor: 'grey', marginTop: '140px', marginRight: '40px' }}
        onClick={onClick}
      />
    );
  }


  return (
    <div>

      <div className="bigSlider">

        <h3 className="titleImg"> {titleImg}</h3>
        <Slider
          arrows={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={3000}
          slidesToShow={3}
          slidesToScroll={3}
          dots={true}
          swipeToSlide={true}
          className={'slide'}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}


        >
          {items.map((item, index) => {
            return <Card img={item} key={index} />

          })}
        </Slider>


      </div >
      <div className="smallSlider">

        <h3> {titleImg}</h3>
        <Slider
          arrows={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          swipeToSlide={true}
          className={'slide'}

        >
          {items.map((item, index) => {
            return <Card img={item} key={index} />

          })}
        </Slider>

      </div >


    </div >
  )
}
