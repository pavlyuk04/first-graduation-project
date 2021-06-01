import gmail from '../../img/about-g.svg'
import twit from '../../img/about-twit.svg'
import facebook from '../../img/about-facebook.svg'
import lin from '../../img/about-lin.svg'
import './Contacts.scss'

const Contacts = () => {
  return (
    <div className='Contacts'>
      <div className="Contacts__header animate__animated animate__fadeIn">
        <h3>CONTACT US</h3>
        <p>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
      </div>
      <div className="Contacts__body animate__animated animate__bounceInUp">
        <div className="Contacts__body__info">
          <div className="info__address">
            <h4>Address</h4>
            <span>Acrostia</span>
            <p>
              Sevenoaks Rd <br />
              Sevenoaks TN14 7HR, UK
            </p>
            <p className='under-text'>
              <span>Phone:</span>&emsp; +44 555 555 555 <br />
              <span>Fax:</span> &emsp;&emsp; +44 556  555 555 <br />
              <span>E-mail:</span> &emsp;<a href="mailto:info@acrostia.com">info@acrostia.com</a> <br />
              <span>Skype:</span>&emsp;	Ac0stia</p>
          </div>
          <div className="info__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11113.378305225766!2d-118.33420171423397!3d34.09444523089357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2z0JPQvtC70LvQuNCy0YPQtCwg0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1622385105148!5m2!1sru!2sua" width="260" height="220" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div className="Contacts__body__ask">
          <h4>Ask a question</h4>
          <form action="">
            <div className="ask__header">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Surname' />
            </div>
            <div className="ask__body">
              <textarea name="" id="" placeholder='Your question'></textarea>
            </div>
            <div className="ask__button">
              <button type='submit'>SEND</button>
            </div>
          </form>
        </div>
      </div>
      <div className="Contacts__footer">
        <a href="#"><img src={facebook} alt="" /></a>
        <a href="#"><img src={twit} alt="" /></a>
        <a href="#"><img src={gmail} alt="" /></a>
        <a href="#"><img src={lin} alt="" /></a>
      </div>
    </div>
  )
}

export default Contacts