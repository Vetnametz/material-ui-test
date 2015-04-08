var React = require('react');

var Header = React.createClass({

  render: function() {

    return (
      <div className="header">
        <div className="logo-container">
          <a href="#">
            <img src="../images/logo.jpg"/>
            <h1>Life Dreams</h1>
          </a>
        </div>
        <div className="user-container">
          <i className="fa fa-star"></i>
          <span>Hi, Alex</span>
        </div>
      </div>
    );
  }

});

module.exports = Header;