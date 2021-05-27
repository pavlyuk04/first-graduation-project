import img1 from '../../img/services-light.svg'
import img2 from '../../img/services-wand.svg'
import img3 from '../../img/services-giars.svg'
import img4 from '../../img/services-rocket.svg'
import './Services.scss'

const Services = () => {
  return (
    <div className='Services'>
      <div className="Services__header">
        <h3>OUR SERVICES</h3>
        <p className='top-text'> CRAS COMMODO MATTIS JUSTO NEC <span>LOBORTIS</span>. NAM UT TELLUS LOBORTIS, ULLAMCORPER MASSA SIT AMET</p>
        <p className='bottom-text'>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
      </div>
      <div className="Services__cards">
        <div className="Services__cards__item">
          <div className="item-img">
            <img src={img1} alt="1" />
          </div>
          <div className="item-header">RESEARCHING</div>
          <div className="item-text">
            Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
        <div className="Services__cards__item">
          <div className="item-img">
            <img src={img2} alt="1" />
          </div>
          <div className="item-header">DESIGN</div>
          <div className="item-text">
            Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
        <div className="Services__cards__item">
          <div className="item-img">
            <img src={img3} alt="1" />
          </div>
          <div className="item-header">DEVELOPMENT</div>
          <div className="item-text">
            Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
        <div className="Services__cards__item">
          <div className="item-img">
            <img src={img4} alt="1" />
          </div>
          <div className="item-header">LAUNCH</div>
          <div className="item-text">
            Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services