/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  mui = require('material-ui'),
  Header = require('./header.jsx'),
  Content = require('./content.jsx');


var Main = React.createClass({

  render: function() {

    return (

      <div className="wrapper">

        <Header></Header>

        <Content></Content>

      </div>

    );

  }

});

module.exports = Main;
