import React from 'react';
import Card from './Card.js';

/**
 *  Always use map instead of foreach
 *  Map always return a value
 * the first param is user that contains the object and the second one i is the index
 * key{i}: allow react to minimize the work effort with DOM when for example delete one card 
 * Always add key={} element with array for better performance
 * Key{} better is to have something that doesnt change so it is better here
 * to user object.ID instead of user or i that could change if the item move
 *  IT could be done like this as well:
 *       robots.map(({id, name, email}) => {
                        return <Card 
                            key={id} 
                            id={id} 
                            name={name} 
                            email={email} 
                            />
                    })
 */
// 
const CardList = ({robots}) => {
    const CardArray = robots.map((user,i) =>{
        return(
         <Card 
         key={robots[i].id} 
         id = {robots[i].id} 
         name = {robots[i].name} 
         email = {robots[i].email}
         />);
    })

return (
    <div>
    {CardArray}
  </div>
);

}
export default CardList;