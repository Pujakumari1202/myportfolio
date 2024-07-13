import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>PUJA </span>
            </div>
            <div className="des">
                {/* 30 */}
                Hello! I’m Puja kumari, an enthusiastic and driven engineering student at St. Thomas' College of Engineering and Technology, specializing in Artificial Intelligence and Machine Learning. My passion for robotics, artificial intelligence] fuels my academic and project pursuits.!
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Female</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
