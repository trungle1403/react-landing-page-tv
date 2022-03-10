import React from 'react'
import './Product.css'
<<<<<<< HEAD
import img from '../../image/tech1.jpg'
import video from '../../video/intro.mp4'

export const Product = () => {
  const products = [
    {
      id: 1,
      image: img,
      name: 'Intro video'
    },
    {
      id: 2,
      image: img,
      name: 'Rap Việt - Concert'
    },
    {
      id: 3,
      image: img,
      name: 'MV ca nhạc - Vệ sĩ siêu đẳng'
    },

  ]
  return (
    <>
        <section className="product">
            <div className="product-main">
              <div className="product-list">
                {
                  products.map((item,index) => (
                    <div key={index} className="product-item">
                        <div className="product-image">
                          <img src={item.image} alt="" />
                          <i class='bx bx-play'></i>
                          <div className="boxed"></div>
                        </div>
                        <div className="product-name">{item.name}</div>
                    </div>
                  ))
                }  
              </div>
              <div className="product-right">
                <div className="section-title text-center">Sản phẩm</div>
                <div className="product-video">
                  <video className='product-video' controls >
                    <source src={video} type="video/mp4"/>
                  </video>
                </div>
                <div className="product-video-name">Bố già - Phim điện ảnh</div>
              </div>
=======
export const Product = () => {
  return (
    <>
        <section className="product">
            <div className="container">
                
>>>>>>> f96014b2cdbbf62acea07bee8348ee06d29cb031
            </div>
        </section>
    </>
  )
}
