import './Home.scss'
import leftarr from '../../img/arrow-left.svg'
import rightarr from '../../img/arrow-right.svg'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home__left-arrow'><img src={leftarr} alt="" /></div>
      <div className='Home__slide'>
        <div className="Home__slide__item">
          <h3>GOOD IDEAS comes</h3>
          <span>FIRST!</span>
        </div>
        <h3 style={{display:'none'}}>Some TEXT</h3>
      </div>
      <div className='Home__right-arrow'><img src={rightarr} alt="" /></div>
    </div>
  )
}

export default Home