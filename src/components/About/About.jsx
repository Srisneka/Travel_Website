import React from 'react'
import './about.css'
import img3 from '../../assets/image/img3.png'
import img4 from '../../assets/image/img4.png'
import img6 from '../../assets/image/img6.png'

const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container gird">
          <div className="singleItem">
            <img src={img3} alt="Image" />
            <h3>100+ Mountains</h3>
            <p>Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being. </p>
          </div>

          <div className="singleItem">
            <img src={img4} alt="Image" />
            <h3>1000+ Hikings</h3>
            <p>Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being. </p>
          </div>

          <div className="singleItem">
            <img src={img6} alt="Image" />
            <h3>2000+ Customers</h3>
            <p>Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being. </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
