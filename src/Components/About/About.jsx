import avatar from '../../img/about-user.svg'
import gmail from '../../img/about-g.svg'
import twit from '../../img/about-twit.svg'
import facebook from '../../img/about-facebook.svg'
import lin from '../../img/about-lin.svg'
import './About.scss'

const About = () => {
  return (
    <div className='About'>
      <div className="About__header animate__animated animate__fadeIn">
        <h3>WHO WE ARE & WHAT WE DO</h3>
        <p>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
      </div>
      <div className="About__team">
        <div className="About__team__baner animate__animated animate__bounceInUp">
          <div className="baner-text">MEET THE TEAM</div>
          <div className="baner-arrow"></div>
        </div>
        <div className="About__team__cards  animate__animated animate__zoomIn">
          <div className="cards__item">
            <div className="cards__item__img"><img src={avatar} alt="" /></div>
            <div className="cards__item__name">
              <h4>ANTON PETROV</h4>
              <p>General manager</p>
            </div>
            <div className="cards__item__social">
              <a href='#' className="social-item"><img src={facebook} alt="" /></a>
              <a href='#' className="social-item"><img src={twit} alt="" /></a>
              <a href='#' className="social-item"><img src={gmail} alt="" /></a>
              <a href='#' className="social-item"><img src={lin} alt="" /></a>
            </div>
          </div>
          <div className="cards__item">
            <div className="cards__item__img"><img src={avatar} alt="" /></div>
            <div className="cards__item__name">
              <h4>KIRIL DONCHEV</h4>
              <p>Design Master</p>
            </div>
            <div className="cards__item__social">
              <a href='#' className="social-item"><img src={facebook} alt="" /></a>
              <a href='#' className="social-item"><img src={twit} alt="" /></a>
              <a href='#' className="social-item"><img src={gmail} alt="" /></a>
              <a href='#' className="social-item"><img src={lin} alt="" /></a>
            </div>
          </div>
          <div className="cards__item">
            <div className="cards__item__img"><img src={avatar} alt="" /></div>
            <div className="cards__item__name">
              <h4>ILIAN BONEV</h4>
              <p>Developer Ninja</p>
            </div>
            <div className="cards__item__social">
              <a href='#' className="social-item"><img src={facebook} alt="" /></a>
              <a href='#' className="social-item"><img src={twit} alt="" /></a>
              <a href='#' className="social-item"><img src={gmail} alt="" /></a>
              <a href='#' className="social-item"><img src={lin} alt="" /></a>
            </div>
          </div>
          <div className="cards__item">
            <div className="cards__item__img"><img src={avatar} alt="" /></div>
            <div className="cards__item__name">
              <h4>DONI STAMOV</h4>
              <p>SEO guru</p>
            </div>
            <div className="cards__item__social">
              <a href='#' className="social-item"><img src={facebook} alt="" /></a>
              <a href='#' className="social-item"><img src={twit} alt="" /></a>
              <a href='#' className="social-item"><img src={gmail} alt="" /></a>
              <a href='#' className="social-item"><img src={lin} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About