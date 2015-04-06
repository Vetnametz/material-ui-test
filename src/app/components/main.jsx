/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  DropDownMenu = mui.DropDownMenu,
  AppCanvas = mui.AppCanvas,
  TextField = mui.TextField;

var menuItemsIwant = [
  { payload: '1', text: '[Select a finacial purpose]' },
  { payload: '2', text: 'Every Night' },
  { payload: '3', text: 'Weeknights' },
  { payload: '4', text: 'Weekends' },
  { payload: '5', text: 'Weekly' }
];

var menuItemsIcan = [
  { payload: '1', text: '[Select an objective]' },
  { payload: '2', text: 'Every Night' },
  { payload: '3', text: 'Weeknights' },
  { payload: '4', text: 'Weekends' },
  { payload: '5', text: 'Weekly' }
];

//TextField.propTypes._handleErrorInputChange = function () {
//  this.propTypes.errorText();
//};
console.log(TextField.propTypes);

var Main = React.createClass({

  getInitialState: function() {
    return {
      errorTextName: 'Please, type your Name',
      errorTextAge: 'Check Age'
    };
  },

  render: function() {

    return (

      <div className="example-page">
        <AppCanvas
          className="mui-predefined-layout-1"/>
        <div className="mui-app-bar mui-paper mui-z-depth-0">
          <div className="mui-paper-container mui-z-depth-bottom">
            <a className="mui-app-bar-title" href="#"><img className="img-responsive" src="images/logo.jpg"/></a>
            <span className="user-name fa fa-star">Hi, Alex</span>
          </div>
        </div>
        <div className="mui-key-height-1"></div>
        <div className="mui-app-content-canvas">
          <div className="page-content">
            <div className="mui-paper mui-z-depth-1 mui-rounded">
              <h2 className="title-h2">Now, what would you like to do?</h2>
              <div id="i-want" className="row-group dropdown-inline">
                <span className="dropdown-label">I want to</span>
                <DropDownMenu
                  className="large"
                  menuItems={menuItemsIwant}
                  autoWidth={false}/>
              </div>
              <div id="i-can" className="row-group dropdown-inline">
                <span className="dropdown-label">So I can</span>
                <DropDownMenu
                  className="large"
                  hintText="Select i Can"
                  menuItems={menuItemsIcan}
                  autoWidth={false}/>
              </div>
              <h2 className="title-h2">Please, share a little about you.</h2>
              <div className="row-group text-field">
                <span>I am</span>
                <TextField
                  id="name"
                  className="default-size"
                  hintText="Full name"
                  errorText={this.state.errorTextName}
                  onChange={this._handleErrorInputChange} />
                <span>and I am</span>
                <TextField
                  id="age"
                  className="short-size"
                  hintText="00"
                  errorText={this.state.errorTextAge}
                  onChange={this._handleErrorInputChange} />
                <span>years of age.</span>
              </div>
              <div id="i-can" className="row-group dropdown-inline text-field">
                <span className="dropdown-label">So I can</span>
                <DropDownMenu
                  className="large"
                  hintText="Select i Can"
                  menuItems={menuItemsIcan}
                  autoWidth={false}/>
                <TextField
                  id="name"
                  className="default-size"
                  hintText="Full name"
                  errorText={this.state.errorTextName}
                  onChange={this._handleErrorInputChange} />
                <span>and I am</span>
                <TextField
                  id="age"
                  className="short-size"
                  hintText="00"
                  errorText={this.state.errorTextAge}
                  onChange={this._handleErrorInputChange} />
                <span>years of age.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
    //<RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
  },

  _handleErrorInputChange: function(e) {
    if (e.target.id === 'name') {
      this.setState({
        errorTextName: e.target.value ? '' : 'Please, type your Name'
      });
    } else if (e.target.id === 'age') {
      this.setState({
        errorTextAge: e.target.value ? '' : 'Check Age'
      });
    }
  }

});

module.exports = Main;
