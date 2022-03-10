import React from 'react'
import './Service.css'
export const Service = () => {

    const services = [
        {
            id: 1,
            name: 'Quảng cáo doanh nghiệp',
            video: ''
        },
        {
            id: 2,
            name: 'Phim tài liệu',
            video: ''
        },
        {
            id: 3,
            name: 'Talkshow',
            video: ''
        },
        {
            id: 4,
            name: 'MV ca nhạc',
            video: ''
        },
        {
            id: 5,
            name: 'Sự kiện',
            video: ''
        },
        {
            id: 6,
            name: 'Livestream',
            video: ''
        },
        {
            id: 7,
            name: 'Thiết kế đồ họa & kỹ xảo',
            video: ''
        },
        {
            id: 8,
            name: 'Giới thiệu sản phẩm',
            video: ''
        },
        {
            id: 9,
            name: 'Phỏng vấn',
            video: ''
        },
        {
            id: 10,
            name: 'Teaser',
            video: ''
        },
        {
            id: 11,
            name: 'Introduction',
            video: ''
        },
        {
            id: 12,
            name: 'Phim ngắn',
            video: ''
        },
        {
            id: 13,
            name: 'Series phim',
            video: ''
        },
    ]
  return (
    <>
        <section className="service">
            <div className="container">
                <div className="service-main">
                    <ul className="service-list">
                        <div className="section-title">Dịch vụ</div>
                        {
                            services.map((item,index) => (
                                <li className="service-item boxed" key={index}>
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="service-right"></div>
                </div>
            </div>
        </section>
    </>
  )
}
