import React from 'react';

let headerStyle = {
  backgroundColor: "rgb(34, 34, 34)",
  color: "white",
  fontSize: "40px",
  padding: "10px 15px",
  height: "50px"
}

let headerTitleStyle = {
  margin: "0 auto",
  maxWidth: "920px"
}

class Header extends React.Component {

  render() {
    return (
      <div style={headerStyle}>
        <img src="images/chef.png" className="chefPic" alt="chef"/>
        <h1 style={headerTitleStyle}>My Recipe App</h1>
      </div>
    )
  }
}

module.exports = Header;
