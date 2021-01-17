import React from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import AlienPicture from './AlienPicture.js';
import Planets from './Planets.js';
import Aliens from './Aliens.js';
import { View, Image, StyleSheet } from 'react';
import './styles.css';

var alien;
var size;
var name;
var page;

export default class App extends React.Component {
  
  

  // step 1 constructor is called first when going through the render() function
  //initializes this.state with the current time


  // step 2 React goes down to the render method to decide what gets placed on the screen (JSX)

  // step 3 React calls the componentdidmount "lifecycle method". This will ask the browser to setup a timer. 
  //this will call the tick method every second

  // step 4 the browser calls the tick method with the new state, UI is updated through the setState 
  // React calls render again since the state has changed
  // note that there is a different format for setState that accepts functions instead of objects. Uses =>

  // step 5, if the clock is removed from the DOM (Document Object Model). The Document Object Model is the document that represents the page the user is looking at, but is constructed in nodes and objects. It is an object-oriented representation of the web page.
 
  constructor(props) {
    super(props);
    this.state = {
      png: '',
      height: 0,
      width: 0,
      subtitle: '',
      showPlanets: false,
      showAliens: false,
      showAll: true
    };
   // This binding is necessary to make `this` work in the callback, can be binded in the function itself
  //  this.alienSelect = this.alienSelect.bind(this);
  }


  
alienSelect(alien, name) {
    this.setState(state => ({
      png:  alien,
      subtitle: name
    }));
  }

sizeSelect(size){
this.setState(state => ({
  height: size,
  width: size
}));
}

pageSelect(page){
  switch (page){
    case "planets":
      this.setState(state => ({
        showPlanets: !this.state.showPlanets,
        showAll: !this.state.showAll
      }));
      break;
    case "aliens":
    this.setState(state => ({
      showAliens: !this.state.showAliens,
      showAll: !this.state.showAll
    }));
      break;
    
  }
}

//nbsp stands for no-break space
  render() {
    const { showPlanets, showAliens, showAll } = this.state;
    return (
      <div>
       
       <h1>Alien database</h1>

   <form action="http://134.122.34.37"  >
   <input type="submit" value="Homepage" class="dropbtn" />
   </form>

{showAll && <button onClick={this.pageSelect.bind(this, page="planets")}  class="dropbtn">
To planets page
</button>}

{showAll && <button onClick={this.pageSelect.bind(this, page="aliens")}  class="dropbtn">
To aliens page
</button>}

{showAll && <DropdownButton id="dropdown-basic-button" title="Select alien" variant="outline-dark">
<Dropdown.Item onClick={this.alienSelect.bind(this, alien="/grunt.png", name="Unggoy")} >Unggoy</Dropdown.Item>
<Dropdown.Item onClick={this.alienSelect.bind(this, alien="/jackal.png", name="Kig-Yar")} >Kig-Yar</Dropdown.Item>
<Dropdown.Item onClick={this.alienSelect.bind(this, alien="/elite.png", name="Sangheili")} >Sangheili</Dropdown.Item>
</DropdownButton>}

<br></br>

{showAll && <DropdownButton id="dropdown-basic-button" title="Select height and width" variant="outline-dark">
<Dropdown.Item onClick={this.sizeSelect.bind(this, size="100")}>100 x 100</Dropdown.Item>
<Dropdown.Item onClick={this.sizeSelect.bind(this, size="200")}>200 x 200</Dropdown.Item>
<Dropdown.Item onClick={this.sizeSelect.bind(this, size="300")}>300 x 300</Dropdown.Item>
</DropdownButton>}

        
{showAll && <AlienPicture height={this.state.height} width={this.state.width} src={this.state.png} subtitle = {this.state.subtitle} />}


<br></br>

{showPlanets && <Planets />}
{showAliens && <Aliens />}
      </div>
    
    );
  }
}

