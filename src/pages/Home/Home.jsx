import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Approach from '../../components/Approach'
import Focus from '../../components/Focus'
import Collaborators from '../../components/Collaborators'
import ContactForm from '../../components/ContactForm'
import Subscribe from '../../components/Subscribe'
import DonateNow from '../../components/DonateNow'

const focusData = [
    {
        id: "focus",
        title: "Focus Areas",
        description: `
      <ul>
        <li><strong>Education and awareness:</strong> You learn early detection, screening options, preventive steps, and treatment plans.</li>
        <li><strong>Cervical cancer prevention:</strong> You get help for diagnosis, vaccination, and treatment support.</li>
        <li><strong>Global women’s health initiatives:</strong> You benefit from programs in underserved areas and strengthened local healthcare systems.</li>
        <li><strong>Cancer diagnosis programs:</strong> You receive resources that provide timely treatment and improved care outcomes.</li>
        <li><strong>Community-based cancer wellness programs:</strong> You join campaigns, workshops, and events that educate communities and create impact.</li>
      </ul>
    `,
        image: "/focus.webp",
        reverse: false,
    },

    {
        id: "how-we-work",
        title: "How We Work",
        description: `
      <p>It is important to know that every community faces unique challenges in women’s cancer care. The foundation identifies areas with high need and partners with local organizations.</p>
      <p>Get focused support through education, financial assistance, and help in creating cancer care centers, including Radiation Therapy Facilities.</p>
      <p>Hospitals, NGOs, and local leaders join to extend reach and strengthen programs. Women gain better access to early detection, accurate diagnosis, and proper treatment.</p>
      <p>Use the guidance provided to help communities sustain long-term healthcare programs. Volunteers and staff get training and resources to maintain effective cancer care.</p>
    `,
        image: "/how-work.webp",
        reverse: true,
    },

    {
        id: "corporate-involvement",
        title: "Corporate and Philanthropic Partnerships",
        description: `
      <p>Addressing women's cancer needs strong effort, clear focus, and steady support. The foundation welcomes corporate partners, donor groups, and individuals.</p>
      <p>Each partner adds value through program growth, providing necessary support, and promoting widespread awareness.</p>
      <p>Organizations and donors help women get education, early checks, and treatment. Communities gain stronger health systems and useful local programs.</p>
      <p>Contributions add funds, tools, and support that improve access to care.</p>
     
    `,
        image: "/involvement.webp",
        reverse: false,
    },
];


const Home = () => {
    return (
        <div>
            <Hero />
            <DonateNow/>
            <div id="about">
                <About />
            </div>
            <div id="approach">
                <Approach />
            </div>
            {focusData.map((item, index) => (
                <div key={index} id={item.id}>
                    <Focus
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        reverse={item.reverse}
                    />
                </div>
            ))}
            <Subscribe />
            <div id="collaborators">
                <Collaborators />
            </div>
            <div id="help">
                <ContactForm />
            </div>
        </div>
    );
};

export default Home