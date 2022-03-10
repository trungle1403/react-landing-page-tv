import React from 'react'
import tech1 from '../../image/tech1.jpg'
import './Technology.css'
export const Technology = () => {
    const listTech = [
        {
            id: 1,
            name: "Não người tiếp nhận thông tin tốt hơn từ video",
            img: tech1
        },
        {
            id: 2,
            name: "Thị trường cạnh tranh chỉ chiếm khoảng 9%",
            img: tech1
        },
        {
            id: 3,
            name: "Video phổ biến & lan truyền rộng trên mạng xã hội",
            img: tech1
        },
        {
            id: 4,
            name: "Xem video thu hút hơn là đọc văn bản hay xem hình ảnh",
            img: tech1
        },
    ]
  return (
    <>
        <section className="technology">
            <div className="container">
                <div className="section-title text-center bg-image">Sử dụng video marketing thời đại 4.0</div>
                <div className="technology-list">
                    {
                        listTech.map((item,index) => (
                            <div key={index} className="technology-item">
                                <div className="section-text">{item.name}</div>
                                <div className="technology-image boxed">
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
