import React from 'react';


export default function Header() {

    const links = ["Discover", "Browse", "Store", "Platforms", "Releases", "Mobile", "Articles", "Blog", "News", "Contacts"]

    function renderLinks(){
        return links.map((e, i)=>{
            return(
                <div className="header__link" key={i}>
                    <p><strong>{e}</strong></p>
                </div>
            )
        })
    }



  return (
    <div className='header'>
        <div className="header__banner">
            <button className='header__button header__button--left'>
            <img src={require('../icons/header/arrow-left.svg').default} alt="L" />
            </button>

            <button className='header__button header__button--central'>
            Refer a friend and get $10 off! 🔥 Offer ends February 27!
            </button>

            <button className='header__button header__button--right'>
            <img src={require('../icons/header/arrow-right.svg').default} alt="R" />
            </button>
        </div>

        <div className="header__info">
            <div className='header__location'>
                <img src={require('../icons/header/location.svg').default} alt="S" />
            </div>

            <div className="header__logo">
                <img className='logo1' src={require('../icons/header/center text1.svg').default} alt="LOGO1" />
                <img src={require('../icons/header/center text2.svg').default} alt="LOGO2" />
            </div>

            <div className="header__menu">
                <div className='header__search'>
                <img src={require('../icons/header/search.svg').default} alt="S" />
                </div>
                <div className='header__user'>
                <img src={require('../icons/header/user.svg').default} alt="U" />
                </div>
                <div className='header__cart'>
                <img src={require('../icons/header/cart.svg').default} alt="C" />
                </div>
                </div>
        </div>
        <div className="header__links">
            {renderLinks()}
        </div>
    </div>
  )
}
