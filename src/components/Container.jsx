import React, {useState} from 'react'
import bg from '../icons/container/bg.png'
import banner from '../icons/container/banner.png'
import Card from './Card'
import cards from '../cardData/cards'
// import emptycard from '../../public/img/Img-13.svg'



export default function Container() {
    const [cardsArray, setCardsArray] = useState(cards);
    const [isOpen, setIsOpen] = useState(false);
    const [cardForm, setCardForm] = useState({
        name:"",
        type:"",
        stars:"",
        revievCount:"",
        oldPrice:"",
        price:"",
        description:"",
        sale:"",
    });
    const [searchForm, setSearchForm] = useState();

    const [filterOptions, setFilterOptions] = useState([]);

    const [sortOptions, setSortOptions] = useState([]);

    const link = 'Home > Discover > Games'

    const newCardProps = [
        {labelFor:"Game name", inputName:"name", inputValue:cardForm.name},
        {labelFor:"Game type", inputName:"type", inputValue:cardForm.type},
        {labelFor:"Game stars", inputName:"stars", inputValue:cardForm.stars},
        {labelFor:"Game revievCount", inputName:"revievCount", inputValue:cardForm.revievCount},
        {labelFor:"Game oldPrice", inputName:"oldPrice", inputValue:cardForm.oldPrice},
        {labelFor:"Game price", inputName:"price", inputValue:cardForm.price},
        {labelFor:"Game description", inputName:"description", inputValue:cardForm.description},
        {labelFor:"Game sale", inputName:"sale", inputValue:cardForm.sale},
    ]

    const categories = [
        "Action RPG",
        "Multiplayer RPG",
        "Action",
        "Shooter",
        "Card Game"
    ]

    const sorts = [
        "Name",
        "Price",
        "Popular"
    ]



    const changeHandler = (event) => {
        setCardForm({...cardForm, [event.target.name]:event.target.value})
    }

    const searchChangeHandler=(e)=>{
        setSearchForm(e.target.value)
    }
    
    function createCard(){
        return newCardProps.map((e, i)=>{
            return(
                <div class="text-field">
                    <label className="text-field__label" htmlFor={e.labelFor}>{e.labelFor}</label>
                    <input className="text-field__input" type="text" name={e.inputName} id={e.labelFor} placeholder={e.labelFor} value={e.inputValue} onChange={changeHandler}/>
                </div>
            )
        })
                
        
    }

    function addCardHandler(){
        cardsArray.push(cardForm)
    }


    function addFilterHandler(e){
        filterOptions.push(e.target.value)
        let tempArr = cards.filter((e, i)=>{
            for (let index = 0; index < filterOptions.length; index++) {
                 if(e.type === filterOptions[index]){
                     return true
                 }
            }
        })
        console.log(filterOptions)
        setCardsArray(tempArr)
    }

    let tempArr = []
    function addSortHandler(e){
        if(e.target.value === "Name"){
            tempArr = cardsArray.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
        } else if(e.target.value === "Price"){
            tempArr = cardsArray.sort(function (a, b) {
                return a.price - b.price
              });
        } else if(e.target.value === "Popular"){
            tempArr = cardsArray.sort(function (a, b) {
                return a.revievCount - b.revievCount
              });
        }
        setCardsArray([...tempArr])
    }

    function categoryRender(){
        return categories.map((e, i)=>{
            return(
                <option value={e} key={i}>{e}</option>
            )
        })
    }

    function sortRender(){
        return sorts.map((e, i)=>{
            return(
                <option value={e} key={i}>{e}</option>
            )
        })
    }

    function filteredRender(){
        return filterOptions.map((e, i)=>{
            return <div className="filtered-item"><p>{e}</p><img src={require('../icons/container/X.svg').default} alt="ADD" key={i} /></div>
        })
    }



    function clearAllFilters(){
        setFilterOptions([])
        setCardsArray(cards)
    }

    function cardsRender(){
        return cardsArray.map((e, index)=>{
            return(
                <Card
                    key={index}
                    i={index}
                    name={e.name}
                    type={e.type}
                    stars={e.stars}
                    revievCount={e.revievCount}
                    oldPrice={e.oldPrice}
                    price={e.price}
                    description={e.description}
                    sale={e.sale}
                    path={index < 13 ? `../img/Img-${e.imgName}.svg` : null}
                />
            )
        })
    }

  return (
    <div className='container'>        
        {isOpen ? 
        <div className="card-builder">{createCard()}
        <button onClick={addCardHandler}>Create new card</button>
        <button>Cancel</button>
        </div>  
        : null}
        {isOpen ?  <div className='backdrop' onClick={(e)=> setIsOpen(false)}/> : null}
        <div className="container__links">
           {link} 
        </div>

        <div className="container__title">
            Games
        </div>

        <div className="container__ad">
            <div className="bg">
                <img src={bg} alt="BANNER" />
            </div>
            <div className="banner">
            <img src={banner} alt="BANNER" />
            </div>
            <div className="ad__text">
                <h2>Refer a friends and get $10 off!</h2>
                <p>Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.</p>
                <button>Invite a friend</button>
            </div>
        </div>
        <div className="search">
            <div className="">
                <label className='search__label' htmlFor="search__input">Search for games</label>
                <input className='search__input' id='search__input' type="text" placeholder='Search...' name='search__input' value={searchForm} onChange={searchChangeHandler} />
            </div>
            <div className="">
                <label className='search__label' htmlFor="search__select">Category</label>
                <select className='search__select' name="search__select" id="search__select" onChange={addFilterHandler}>
                {categoryRender()}
                </select>
            </div>
            <div className="">
                <label className='search__label' htmlFor="search__sort">Sort by</label>
                <select className='search__select' name="search__sort" id="search__sort" onChange={addSortHandler}>
                {sortRender()}
                </select>
            </div>
        </div>
        <div className="selected-felters">
                {filteredRender()}
                <div className="filtered-item"><p>Clear all</p><img src={require('../icons/container/X.svg').default} alt="ADD" onClick={clearAllFilters} /></div>
        </div>
        
        <div className="container__cards">
            <div className="new-card">
            <div className="card__description">You can add a product card by clicking on the button</div>
            <button onClick={(e)=> setIsOpen(true)}><img src={require('../icons/container/plus.svg').default} alt="ADD" />Add card</button>
            </div>
            {cardsRender()}
        </div>
        <div className="pagination">
        <img src={require('../icons/container/arrow-left.svg').default} alt="<" />
        <div className="page-active">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
        <div className="page">4</div>
        <div className="page">5</div>
        <div className="page">...</div>
        <div className="page">99</div>
        <img src={require('../icons/container/arrow-right.svg').default} alt=">" />
        </div>
        <div className="show-more-button">
            <strong>Show more</strong>
        </div>
    </div>
  )
}



