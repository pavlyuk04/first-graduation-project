import React from 'react'
import ReactDOM from 'react-dom';
import './Work.scss'
import img1 from './Work-img/ourwork-1.png'
import img2 from './Work-img/ourwork-2.png'
import img3 from './Work-img/ourwork-3.png'
import img4 from './Work-img/ourwork-4.png'
import img5 from './Work-img/ourwork-5.png'
import img6 from './Work-img/ourwork-6.png'
import img7 from './Work-img/ourwork-7.png'

const Filter = () => {
  

  const onClickHeandler = (event) => {
    
    const filterItem = document.querySelectorAll('.Filter__body__item')
    const filterData = event.target.dataset['filter']
    
    console.log(filterData)


    
    filterItem.forEach(elem => {
      elem.classList.remove('hide')
      if(!elem.classList.contains(filterData) && filterData !== 'all') {
        elem.classList.add('hide')
      }
    })
  }
  
  
  return (
    <div className='Filter'>
      <div className="Filter__nav">
        <p>PORTFOLIO</p>
        <ul className='Filter__nav-navbar'>
          <li onClick={onClickHeandler} data-filter="all" className="navbar__item">All</li>
          <li onClick={onClickHeandler} data-filter="img" className="navbar__item">Photography</li>
          <li onClick={onClickHeandler} data-filter="logo" className="navbar__item">Logo design</li>
          <li onClick={onClickHeandler} data-filter="web" className="navbar__item">Web design</li>
        </ul>
      </div>
      <div className="Filter__body">
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img1} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>AENEAN A ELIT</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item logo">
          <div className="item__img">SOME LOGO</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>LOGO NAME</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img2} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>SUSPENDISSE LIBERO</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item logo">
          <div className="item__img">SOME LOGO</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>LOGO NAME</p>
          </div>
        </div>
        <div className="Filter__body__item logo">
          <div className="item__img">SOME LOGO</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>LOGO NAME</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img3} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>MAECENAS FRINGILLA</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img4} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>DONEC VEHICULA</p>
          </div>
        </div>
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img5} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>UT ET SAPIEN</p>
          </div>
        </div>
        <div className="Filter__body__item logo">
          <div className="item__img">SOME LOGO</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>LOGO NAME</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item logo">
          <div className="item__img">SOME LOGO</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>LOGO NAME</p>
          </div>
        </div>
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img6} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>QUIS MALESUADA</p>
          </div>
        </div>
        <div className="Filter__body__item web">
          <div className="item__img">SOME WEB SITE</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>WEB SITE NAME</p>
          </div>
        </div>
        <div className="Filter__body__item img">
          <div className="item__img"><img src={img7} alt="" /></div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>VESTIBULUM ANTE</p>
          </div>
        </div>
        <div className="Filter__body__item logo">
          <div className="item__img">SOME LOGO</div>
          <div className="item__text">
            <div className="item__text-arrow"></div>
            <p>LOGO NAME</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Filter