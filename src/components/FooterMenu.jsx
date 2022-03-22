import React from 'react'

export default function FooterMenu() {
  return (
    <div className='footer-menu'>
        <div className="footer-menu__item">
            <img src={require('../icons/footer/home.svg').default} alt="home"/>
            <p>Home</p>
        </div>
        <div className="footer-menu__item">
            <img src={require('../icons/footer/browse.svg').default} alt="browse"/>
            <p>Browse</p>
        </div>
        <div className="footer-menu__item">
            <img src={require('../icons/footer/search.svg').default} alt="search"/>
            <p>Search</p>
        </div>
        <div className="footer-menu__item">
            <img src={require('../icons/footer/account.svg').default} alt="account"/>
            <p>Account</p>
        </div>
        <div className="footer-menu__item">
            <img src={require('../icons/footer/cart.svg').default} alt="cart"/>
            <p>Cart</p>
        </div>
    </div>
  )
}
