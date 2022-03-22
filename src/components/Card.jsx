import React from 'react'
import filledStar from '../icons/container/full-star.svg'
import Title from './Title'


export default function Card({i, name, type, stars, revievCount, oldPrice, price, description, sale, path}) {

    let modulo = stars.split(',')

    function renderFilledStar(n) {
        let count = parseInt(n)
        let arr = []
        for (let index = 0; index < count; index++) {
            arr.push(1)
        }
        return arr.map((e, i)=>{
            return(
                <img src={require('../icons/container/full-star.svg').default} alt="*" key={i}/>
            )
        })
    }

    function renderEmptyStar(n) {
        let count =5 - parseInt(n)
        modulo[1] ? count-- : count = count
        let arr = []
        for (let index = 0; index < count; index++) {
            arr.push(1)
        }
        return arr.map((e, i)=>{
            return(
                <img src={require('../icons/container/empty-star.svg').default} alt="*" key={i}/>
            )
        })
    }

    function renderTitle(){
        if (type === "Action RPG") {
            console.log(123)
            return(
                <div className="title-item title-action--rpg">
                    <div className="circle"/> {type}
                </div>
            )
        } else if (type === "Multiplayer RPG") {
            return(
                <div className="title-item title-multiplayer--rpg">
                    <div className="circle"/> {type}
                </div>
            )
        } else if (type === "Action") {
            return(
                <div className="title-item title--action">
                    <div className="circle"/> {type}
                </div>
            )
        } else if (type === "Shooter") {
            return(
                <div className="title-item title--shooter">
                    <div className="circle"/> {type}
                </div>
            )
        } else if (type === "Card game") {
            return(
                <div className="title-item title--card-game">
                    <div className="circle"/> {type}
                </div>
            )
        } 
    }



  return (
    <div className='card-item'>
        {path ? 
        <img className='card-img' src={path} alt="Card img" width={256} height={200} />
        : <img className='card-img' src={`../img/Img-13.svg`} alt="New card Img" width={256} height={200} />
        }
        {/* <Title type={type} /> */}
            {renderTitle()}
        <div className="card__name">{name}</div>
        <div className="star-bar">
            <div className="card__star">
                {renderFilledStar(stars)}
                {modulo[1]? <img src={require('../icons/container/half-star.svg').default} alt="*" /> : null}
                {renderEmptyStar(stars)}
            </div>
            <div className="star__reviev">{revievCount}</div>
        </div>
        <div className="card__description">{description}</div>
        
        <div className="price">
        <hr />
            <div className="current-price">
                {oldPrice? <div className='price__old'>${oldPrice}</div> : null}
                <div className="price__actual"> <strong>${price}</strong></div>
            </div>
                {sale ? <div className="price__sale">{sale}</div> : null}
            
        </div>
    </div>
  )
}



//{require(`../cardData/img/Img-${i}.svg`).default}