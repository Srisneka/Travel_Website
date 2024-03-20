import React from 'react'
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs"
import img8 from '../../assets/image/img8.jpg'
import img2 from '../../assets/image/img2.jpg'


const Posts=[
  {
    id:1,
    postImage:img2,
    title:'Beautiful Morocco, let us travel',
    desc:'The kingdom of Morocco is a Muslim country in western North Africa'
  },
  {
    id:2,
    postImage:img8,
    title:'Best moments under Eiffel Tower',
    desc:'With vast swaths of desert in its east and west and the rich Nile River valley'
  }
]
const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blog</h2>
          <p>An insight to the incredible experience in the world.</p>
        </div>

        <div className="mainContainer grid">
              {
                Posts.map(({id,postImage,title,desc})=>{
                  return(
                    <div className="singlePost grid">
                      <div className="imgDiv">
                        <img src={postImage} alt={title} />
                      </div>

                      <div className="postDetails">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>

                      <a href="" className="flex">
                        Read More
                        <BsArrowRightShort className='icon'/></a>
                    </div>   
                  )
                })
              }
        </div>
      </div>
    </section>
  )
}

export default Blog
