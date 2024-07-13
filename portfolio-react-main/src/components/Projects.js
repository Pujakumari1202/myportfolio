import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Project tindog',
    des: 'Tindog is a project designed to connect dog owners and their furry friends. It offers a platform where users can find playdates, dog-friendly events, and connect with other dog enthusiasts.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3,React JS,BOOTSRAP...',
    images: '/project2.PNG'
  },
  {
    name: 'Project Real-time chating in website',
    des: 'My portfolio website serves as a digital showcase of my skills, projects, and experiences in the field of web development.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3...',
    images: '/project1.PNG'
  },
  {
    name: 'Project tindog',
    des: 'Tindog is a project designed to connect dog owners and their furry friends. It offers a platform where users can find playdates, dog-friendly events, and connect with other dog enthusiasts.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3,React JS,BOOTSRAP...',
    images: '/project2.PNG'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        The project successfully delivered a robust, user-friendly platform for real-time chatting, meeting client requirements and exceeding expectations in terms of performance and user experience. It represents a significant achievement in leveraging modern web technologies to enhance digital communication capabilities.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
