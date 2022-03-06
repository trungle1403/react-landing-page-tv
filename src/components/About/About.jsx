import React from 'react'
import tech1 from '../../image/tech1.jpg'
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
