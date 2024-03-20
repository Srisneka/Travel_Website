import React from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import{BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import img1 from '../../assets/image/img1.jpg'
import img5 from '../../assets/image/img5.jpg'
import img7 from '../../assets/image/img7.jpg'
import img9 from '../../assets/image/img9.jpg'

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX'
  },
  {
    id:2,
    imgSrc:img5,
    destTitle:'Guanajauto',
    location:'Mexico',
    grade:'CULTURAL RELAX'
  },
  {
    id:3,
    imgSrc:img7,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX'
  },
  {
    id:4,
    imgSrc:img9,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX'
  }
]

const Popular = () => {
  
  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destionation
            </h2>
            <p>
              From historial cities to natural specteculars, come to see the best of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
        <BsArrowLeftShort className="icon leftIcon" />
        <BsArrowRightShort className="icon"/>
        </div>

        </div>

        <div className="mainContent grid">
            {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                <>
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="image" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className='icon' />
                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className='flex'>
                        <span className="dot">
                        <BsDot className="icon"/>
                        </span>
                        Dot
                      </span>
                    </div>
                </div>
              </div>
              </>
              )
            })
          }
        </div>

      </div>

    </section>
  )
}

export default Popular
