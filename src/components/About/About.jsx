import React from 'react'
import tech1 from '../../image/tech1.jpg'
<<<<<<< HEAD
import about from '../../image/bg-about.png'
=======
>>>>>>> f96014b2cdbbf62acea07bee8348ee06d29cb031
import './About.css'
export const About = () => {
    const listInfo = [
        {
            id: 1,
            name: "Đội ngũ tư vấn nhiệt tình",
            img: tech1
        },
        {
            id: 2,
            name: "Tư vấn chiến lược hiệu quả",
            img: tech1
        },
        {
            id: 3,
            name: "Cập nhật xu hướng mới nhất",
            img: tech1
        },
        {
            id: 4,
            name: "Quy trình khép kín chuyên nghiệp",
            img: tech1
        },
        {
            id: 5,
            name: "Hoạt động 24/7",
            img: tech1
        },
    ]
  return (
    <>
        <section className="about">
            <div className="container">
                <div className="about-main">
                    <div className="section-title about-item">Đến với chúng tôi bạn được gì?</div>  
                    {
                        listInfo.map((item,index) => (
                            <div key={index} className="about-item boxed">
<<<<<<< HEAD
                                {index ===1 ? <img className='bg-image' src={about} /> : '' }
=======
>>>>>>> f96014b2cdbbf62acea07bee8348ee06d29cb031
                                <div className="section-text">{item.name}</div>
                                <div className="about-image ">
                                    <img src={item.img} alt={item.name}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}
