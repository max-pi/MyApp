import React from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import AlienPicture from './AlienPicture.js';
import { View, Image, StyleSheet } from 'react';
import './styles.css';

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
    this.state = {counter: 0,
      png: '',
    show : true};
   // This binding is necessary to make `this` work in the callback
   this.alienSelect = this.alienSelect.bind(this);
  }


  
  alienSelect() {
    this.setState(state => ({
      png:  '/grunt.png'
    }));
  }

//nbsp stands for no-break space
  render() {
    return (
      <div>
       
       <h1>Alien database</h1>

   <form action="http://134.122.34.37"  >
   <input type="submit" value="Homepage" class="dropbtn" />
   </form>
   <form action="http://134.122.34.37/search.html"  >
        <input type="submit" value="Search" class="dropbtn" />
   </form>

<DropdownButton id="dropdown-basic-button" title="Select alien" variant="outline-dark">
<Dropdown.Item onClick={this.alienSelect}> Unggoy</Dropdown.Item>
<Dropdown.Item>Kig-Yar</Dropdown.Item>
<Dropdown.Item>Sangheili</Dropdown.Item>
</DropdownButton>

<br></br>

<DropdownButton id="dropdown-basic-button" title="Select height and width" variant="outline-dark">
<Dropdown.Item>100 x 100</Dropdown.Item>
<Dropdown.Item>200 x 200</Dropdown.Item>
<Dropdown.Item>300 x 300</Dropdown.Item>
</DropdownButton>

{/* onclick alienSelect triggers the function (Y)  , but png/state is not being updated. 
src uses the state of png, not sure if updates automatically*/}
        
    <AlienPicture height="100" width="100" src={this.state.png} subtitle = "Unggoy" />

    <AlienPicture height="200" width="200" src="/jackal.png" subtitle = "Kig-Yar"/>
    
    <AlienPicture height="300" width="300" src="/elite.png" subtitle = "Sangheili"/>
        

<br></br>



      </div>
    
    );
  }
}

