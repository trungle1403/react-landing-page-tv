import React,{useState,useEffect, useRef} from 'react'
import './Hero.css'
const Hero = () => {
    const [day, setDay] = useState('00')
    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')
    const [second, setSecond] = useState('00')

    let interval = useRef() 
    const startTimer = () => {
        const countdownDate = new Date('March 10, 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 *24))
            const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0){
                clearInterval(interval.current)
            }else{
                setDay(days)
                setHour(hours)
                setMinute(minutes)
                setSecond(seconds)
            }
        }, 1000);
    }
    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current)
        }
    })
    
  return (
    <>
        <section className="hero">
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div className="container">
                <div className="hero-heading">
                    <div className="btn-primary">Đăng ký</div>    
                </div>
                <div className="hero-main">
                    <h2 className='hero-title text-center'>Đơn vị sản xuất video <br /> quảng cáo hàng đầu Việt Nam</h2>
                    <p className="hero-subtitle text-center">Khẳng định đẳng cấp thương hiệu, tăng tốc doanh thu, vượt xa đối thủ</p>
                    <div className="hero-price text-center">998k</div>
                    <div className="btn-primary center">Đăng ký</div>   
                    <div className="hero-count">
                        <div className="hero-count-item">
                            <h3 className='boxed'>{day}</h3>
                            <span>Ngày</span>
                        </div>
                        <div className="hero-count-item">
                            <h3 className='boxed'>{hour}</h3>
                            <span>Giờ</span>
                        </div>
                        <div className="hero-count-item">
                            <h3 className='boxed'>{minute}</h3>
                            <span>Phút</span>
                        </div>
                        <div className="hero-count-item">
                            <h3 className='boxed'>{second}</h3>
                            <span>Giây</span>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero