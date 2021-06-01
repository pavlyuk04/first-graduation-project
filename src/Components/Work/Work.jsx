import './Work.scss'
import Filter from './Filter'

const Work = () => {
  return (
    <div className='Work'>
      <div className="Work__header animate__animated animate__fadeIn">
        <h3>OUR WORK</h3>
        <p>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
      </div>
      <div className="Work__portfolio  animate__animated animate__zoomIn">
        <Filter />
      </div>
    </div>
  )
}

export default Work