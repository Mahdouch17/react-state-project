import logo from "./logo.svg";
import React from "react";
import "./App.css";
import image from "./mahdi.jpg";

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
        {(this.state.show)&&(<div><img
            style={{
              width: 120,
              height: 180,
              border: "2px #1A5276 solid",
              borderRadius: 15,
            }}
            src={this.state.Person.imgSrc}
          />
          <div style={{ fontSize: 24 }}>{this.state.Person.fullName}</div>
          <div style={{ fontSize: 18 }}>{this.state.Person.bio}</div>
          <div style={{ fontSize: 18 }}>{this.state.Person.profession}</div></div>)}
        </div>
      </div>
    );
  }
}

export default App;
