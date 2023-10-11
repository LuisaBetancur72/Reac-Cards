import React, { useState } from 'react';
import Menu from '../menu/menu';
import Contact from '../contact/Contact'; // Importa el componente Contact
import Twitter from '../twitt/twitter';

import './home.scss';

function Home() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };  

  return (
    <div className="home">
      <Menu onSectionClick={handleSectionClick} />
      <div className="content">
        <section
          id="Flexbox"
          className={`section-padding1 ${selectedSection === 'Flexbox' ? 'active' : ''}`} 
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href='#Contact' target="_blank"></a>
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              <Twitter onSectionClick={handleSectionClick} />
              </div>
            </div>
          </div>
        
        </section>
        
        <section
          id='Contact'
          className={`section-padding2 ${selectedSection === 'Contact' ? 'active' : ''}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href='#Contact' target="_blank"></a>
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
                <Contact onSectionClick={handleSectionClick} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="Products"
          className={`section-padding3 ${selectedSection === 'Products' ? 'active' : ''}`}
        >
        </section>
      </div>
    </div>
  );
}

export default Home;
