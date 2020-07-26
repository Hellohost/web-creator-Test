import React from 'react'
import Card from './Card'
import Slider from "react-slick"
import './List.css'


export default function ListMin({ items, titleImg }) {
    // console.log(typeof(items));
    // console.log(items);


    return (

        <div>

            <h3> {titleImg}</h3>
            <Slider
                arrows={true}
                speed={500}
                autoplay={true}
                autoplaySpeed={3000}
                slidesToShow={1}
                slidesToScroll={1}
                dots={true}
                // centerMode={true}
                swipeToSlide={true}
                className={'slide'}

            >
                {items.map((item, index) => {
                    return <Card img={item} key={index} />

                })}
            </Slider>

        </div >


    )
}
