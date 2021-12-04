import logo from "./logo.svg";
import React from "react";
import "./App.css";
import image from "./mahdi.jpg";
import Profile from "./components/Profile";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Mohamed Mehdi Nouira",
      bio: "I love coding",
      imgSrc: image,
      profession: "engineer",
    },
    show: false,
  };
  
  render() {
    return (
      <div className="App">
        <div>
          <button style={{width:100,height:50,borderRadius:10,margin:40}} onClick={()=>{this.setState({show: !this.state.show})}}>Toggle</button>
        {(this.state.show)&&(<Profile person={this.state.Person}/>)}
        </div>
      </div>
    );
  }
}

export default App;
