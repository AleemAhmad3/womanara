import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div className='about' >
            <h2>About Womanara Foundation</h2>
            <p>Womanara Foundation started in 1989 alongside Houston Diagnostic and Treatment Center, a full-service Cancer Therapy Center. It became an independent organization in 2013.</p>
            <p>You can access programs that support women globally in education, early diagnosis, and treatment of women’s cancers. The foundation targets communities that lack proper healthcare services. Women gain essential assistance for breast and cervical cancer care. Programs combine resources, awareness, and treatment support to create real impact.</p>
            <div className="images-container">
                <img src="/about1.webp" alt="womanara" />
                <img src="/about2.webp" alt="womanara" />
                <img src="/about3.webp" alt="womanara" />
            </div>
            <h3>Mission Statement</h3>
            <h4>Empowering Women Globally Through Better Cancer Care</h4>
            <p>Rely on the Womanara Foundation to provide knowledge, resources, and treatment support for women facing cancer. The mission ensures access to breast cancer education, cervical cancer prevention, and timely care. You receive programs designed to improve health outcomes and help women take control of their wellness.</p>
        </div>
    )
}

export default About