import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots } from "../components/robots";
import Scroll from '../components/Scroll';
/**
 * One-way-dataflow in react means, that only the parent component can modify the data for all children. Have a look again at the diagram from the starting lectures of react. Children can only communicate with
 *  its parent and not with other childrens which are not a child of those.
    The result in this case is, that the searchbox component, only sends the value
    from the input element to the app component by using the method onSearchChange. 
    The app component then takes care of the changes in the CardList.
In the end in this exercise the data flow is always the same :
App Comp=>CardList comp=>Card Comp
⬆️
⬆️ SearchBox comp sends input value with onSearchChange  from App 

 */

// Here we use class in order for us to be able to change a state
// by using a constructor which we can't do with a normal const functuion.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
    console.log("1. Inside Constructor");
  }

  // Check React lifecycle for the execution order
  componentDidMount() {
    // A json call to externalsite to fetch the robot data
    // instead of reading it from robot.js
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ robots: robots }));

    console.log("3. Inside componentDidMount");
  }
  onSearchChange = event => {
    //TO change the state always use setState.
    //You set the state to the value of the search field. Nothing crazy here.
    this.setState({ searchField: event.target.value });

    // console.log(filteredRobot);
  };

  render() {
    console.log("2 . Inside Render");
    //const {robots,searchField} = this.state; we can have the destuctoring here
    //filter through the robots array and return the robots which matches
    //the text searched in the searchox and put the result in filteredRobot.
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    const {robots} = this.state; // de-structring
    if (!robots.length) { // Equal to robots.length === 0
      return <h1> Loading, PLease wait </h1>;
    } else {
      return (
        <div className="tc">
          <h1> RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          
          <Scroll className='tc'>
            <CardList
              robots={
                filteredRobot /** Show only the robot(s) in filteredrobot*/
              }
            />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
