import React from 'react'
import './Contact.css'
export const Contact = () => {
    return (
    <>
        <section className="contact">
            <div className="container">
                <div className="section-title text-center">Liên hệ với chúng tôi</div>
                <form className='contact-form' action="">
                    <div className="contact-item">
                        <label htmlFor="">
                            Họ và tên    
                        </label>     
                        <input type="text" />
                    </div>  
                    <div className="contact-item">
                        <label htmlFor="">
                            Email   
                        </label>     
                        <input type="text" />
                    </div>  
                    <div className="contact-item">
                        <label htmlFor="">
                            Số điện thoại    
                        </label>     
                        <input type="text" />
                    </div>  
                    <div className="contact-item">
                        <label htmlFor="">
                            Tư vấn theo yêu cầu    
                        </label>     
                        <input type="text" />
                    </div>  
                </form>
            </div>    
        </section>
    </>
    )
}
