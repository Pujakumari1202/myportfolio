import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel, faJava } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import { faC } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'HTML, or HyperText Markup Language, is the standard language used to create and design documents on the World Wide Web. It is the foundation of web pages, allowing developers to structure content, insert multimedia elements, and create interactive forms.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of an HTML (or XML) document. CSS controls the layout, colors, fonts, and overall visual appearance of a web page, making it essential for web design. Here’s an overview of CSS, including syntax, selectors, properties, and some advanced concepts..',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'JavaScript is a versatile and widely-used programming language primarily known for its role in web development. It allows developers to create dynamic and interactive content on web pages.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create reusable UI components and manage their state efficiently. ',
    icon: faReact
  },
  {
    name: 'Java',
    des: 'Java is a widely-used, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in the mid-1990s. It is designed to be platform-independent, meaning that Java programs can run on any device or operating system that has a Java Virtual Machine (JVM) installed.',
    icon: faJava
  },
  {
    name: 'C',
    des: 'The C programming language is a powerful and widely-used procedural programming language originally developed by Dennis Ritchie in the early 1970s at Bell Labs. ',
    icon: faC
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Proficiency in multiple programming languages, version control with Git. Strong skills in data structures, algorithms, software design, testing, database management, web development, and DBMS. Creating and maintaining a portfolio website to showcase  my projects and skills.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

