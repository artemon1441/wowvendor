import React, { Fragment } from 'react';

const Title = (titleName) => {

    function renderTitle(){
        if (titleName === "Action RPG") {
            console.log(123)
            return(
                <div className="title-item title-action--rpg">
                    <div className="circle"/> {titleName}
                </div>
            )
        } else if (titleName === "Multiplayer RPG") {
            return(
                <div className="title-item title-multiplayer--rpg">
                    {titleName}
                </div>
            )
        } else if (titleName === "Action") {
            return(
                <div className="title-item title--action">
                    {titleName}
                </div>
            )
        } else if (titleName === "Shooter") {
            return(
                <div className="title-item title--shooter">
                    {titleName}
                </div>
            )
        } else if (titleName === "Card game") {
            return(
                <div className="title-item title--card-game">
                    {titleName}
                </div>
            )
        } 


    }



    return (
        <Fragment>
            {renderTitle()}
        </Fragment>
    );
}

export default Title;
