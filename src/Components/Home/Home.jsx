import './Home.scss'
import SlickSlider from './SlickSlider'

const Home = () => {
  return (
    <div className='Home '>
      <div className='Home__slide animate__animated animate__fadeIn'>
        <SlickSlider />
      </div>
    </div>
  )
}

export default Home