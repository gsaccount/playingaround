import React from "react";
import CardList from "./CardList";
import SearcBox from "./SearchBox";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearchChange=(event)=> {
      this.setState({searchField: event.target.value})
    
    // console.log(filteredRobot);
  }


render(){
    const filteredRobot = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      });
    return(
    <div className='tc'>
        <h1> RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobot}/>
    </div>
    );
}
}
export default App;
