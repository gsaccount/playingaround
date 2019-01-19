import React from 'react';
import './Card.css';

/** 
 * We need curly braces to tell JSX "Hey, watch out, we write here a javascript expression and not JSX".
 * Always return one element inside the return()
 * Always return one element inside the return()
 * curlBrackets used always to execute JS syntax adn use ${..} to append a value to String
*/

//const Card = (props) => {
    const Card = ({name,email,id}) => {
    //const {name, email , id } = props; // destructor
    //use ` inside the image for the ${id} to get recognized, use ?set=set4 to view cats instead
    return(
        <div  className=' bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=250x250`}/>
            <div>
                <h3>{name}</h3>                
                <p className='.f6 .avenir'>{email}</p>
            </div>
        </div>
    );

}

export default Card;
