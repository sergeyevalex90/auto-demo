import aboutImg from '../../../assets/img/bmw-about.jpg';
import './About.css';

const About = (props) => {
  return (
    <div className="about">
      <div className="wrapper">
        <h2 className="about-title title">About company</h2>
        <div className="about-inner">
          <div className="about-desc">
            <h3>The BMW Group company profile</h3>
            <p>
              The special fascination of the BMW Group not only lies in its
              products and technology, but also in the company’s history,
              written by inventors, pioneers and brilliant designers. Today, the
              BMW Group, with its 31 production and assembly facilities in 15
              countries as well as a global sales network, is the world’s
              leading manufacturer of premium automobiles and motorcycles, and
              provider of premium financial and mobility services.
            </p>
            <h3>Production today and tomorrow</h3>
            <p>
              The BMW Group sets trends in production technology and
              sustainability as an innovation leader with an intelligent
              material mix, a technological shift towards digitalisation and
              resource-efficient production. At the same time, flexibility and
              continuous optimisation of value chains ensure competitiveness.
            </p>
          </div>
          <div className="aboutImage">
            <img src={aboutImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
