var React = require('react'),
    mui = require('material-ui'),
    Paper = mui.Paper,
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    TextField = mui.TextField,
    FlatButton = mui.FlatButton,
    Snackbar = mui.Snackbar;

var menuItemsIwant = [
  { menuItemsIwant: '1', text: '[Select a finacial purpose]' },
  { menuItemsIwant: '2', text: 'Every Night' },
  { menuItemsIwant: '3', text: 'Weeknights' },
  { menuItemsIwant: '4', text: 'Weekends' },
  { menuItemsIwant: '5', text: 'Weekly' }
];
var menuItemsIcan = [
  { menuItemsIcan: '1', text: '[Select an objective]' },
  { menuItemsIcan: '2', text: 'Run' },
  { menuItemsIcan: '3', text: 'Sweem' },
  { menuItemsIcan: '4', text: 'Jump' },
  { menuItemsIcan: '5', text: 'Read' }
];
var menuItemsHousing = [
  { menuItemsHousing: '1', text: '[Select housing]' },
  { menuItemsHousing: '2', text: 'House' },
  { menuItemsHousing: '3', text: 'Apartments' }
];
var menuItemsIlive = [
  { menuItemsIlive: '1', text: '[Select family mambers]' },
  { menuItemsIlive: '2', text: 'USA' },
  { menuItemsIlive: '3', text: 'Ukraine' }
];
var menuItemsLifestyle = [
  { menuItemsLifestyle: '1', text: '[Select lifestyle]' },
  { menuItemsLifestyle: '2', text: 'Hipi' },
  { menuItemsLifestyle: '3', text: 'Punk' },
  { menuItemsLifestyle: '4', text: 'Emy' }
];
var menuItemsLifestyle2 = [
  { menuItemsLifestyle2: '1', text: '[Select savings]' },
  { menuItemsLifestyle2: '2', text: 'Hiking' },
  { menuItemsLifestyle2: '3', text: 'Adventure' }
];
var menuItemsIncome = [
  { menuItemsIncome: '1', text: '[Select your yearly income]' },
  { menuItemsIncome: '2', text: '1000' },
  { menuItemsIncome: '3', text: '10000' },
  { menuItemsIncome: '4', text: '100000' },
  { menuItemsIncome: '5', text: '1000000' }
];

var Content = React.createClass({

  /**
   * Set main variables
   * @returns {{
   *  textFieldValueName: string,
   *  textFieldValueAge: string,
   *  textFieldValueCity: string,
   *  textFieldValueState: string,
   *  dropDownMenuItemsIcan: string,
   *  errorTextName: string,
   *  errorTextAge: string,
   *  errorTextCity: string,
   *  errorTextState: string
   * }}
   */
  getInitialState: function() {
    return {
      textFieldValueName: '',
      textFieldValueAge: '',
      textFieldValueCity: '',
      textFieldValueState: '',
      dropDownWant: '',
      dropDownCan: '',
      dropDownHousing: '',
      dropDownLive: '',
      dropDownLifestyle: '',
      dropDownLifestyle2: '',
      dropDownIncome: '',
      errorTextName: '',
      errorTextAge: '',
      errorTextCity: '',
      errorTextState: ''
    };
  },

  /**
   * Get data from DropDowns
   * @param e {object}
   * @param selectedIndex {number}
   * @param menuItem {object}
   * @private
   */
  _handleDropdownValue: function (e, selectedIndex, menuItem) {
    if (menuItem.hasOwnProperty("menuItemsIwant")) {
      this.setState({
        dropDownWant: menuItem.text
      });
    } else if (menuItem.hasOwnProperty("menuItemsIcan")) {
      this.setState({
        dropDownCan: menuItem.text
      });
    } else if (menuItem.hasOwnProperty("menuItemsHousing")) {
      this.setState({
        dropDownHousing: menuItem.text
      });
    } else if (menuItem.hasOwnProperty("menuItemsIlive")) {
      this.setState({
        dropDownLive: menuItem.text
      });
    } else if (menuItem.hasOwnProperty("menuItemsLifestyle")) {
      this.setState({
        dropDownLifestyle: menuItem.text
      });
    } else if (menuItem.hasOwnProperty("menuItemsLifestyle2")) {
      this.setState({
        dropDownLifestyle2: menuItem.text
      });
    } else if (menuItem.hasOwnProperty("menuItemsIncome")) {
      this.setState({
        dropDownIncome: menuItem.text
      });
    }

  },

  /**
   * Get data from TextFields and
   * set errorMessages for TextFields
   * @param e {event}
   * @private
   */
  _handleErrorInputChange: function(e) {
    if (e.target.id === 'name') {
      this.setState({
        textFieldValueName: e.target.value,
        errorTextName: e.target.value ? '' : 'Please, type your Name'
      });
    } else if (e.target.id === 'age') {
      this.setState({
        textFieldValueAge: e.target.value,
        errorTextAge: e.target.value ? '' : 'Check Age'
      });
    } else if (e.target.id === 'city') {
      this.setState({
        textFieldValueCity: e.target.value,
        errorTextCity: e.target.value ? '' : 'Type City'
      });
    } else if (e.target.id === 'state') {
      this.setState({
        textFieldValueState: e.target.value,
        errorTextState: e.target.value ? '' : 'Type State'
      });
    }
  },

  /**
   * Send form data on server and
   * fire errorMessages for empty TextFields
   * @param e {event}
   * @private
   */
  _handleClick: function(e) {
    if (this.refs.textfield && this.refs.textfield.getValue().length === 0) {
      this.refs.snackbar.show();
      this.setState({
        errorTextState: 'Type State',
        errorTextCity: 'Type City',
        errorTextAge: 'Check Age',
        errorTextName: 'Please, type your Name'
      });
    }

    var formData = {
      name: this.state.textFieldValueName,
      age: this.state.textFieldValueAge,
      city: this.state.textFieldValueCity,
      state: this.state.textFieldValueState,
      want: this.state.dropDownWant,
      can: this.state.dropDownCan,
      housing: this.state.dropDownHousing,
      live: this.state.dropDownLive,
      lifestyle: this.state.dropDownLifestyle,
      lifestyle2: this.state.dropDownLifestyle2,
      income: this.state.dropDownIncome

    };
    console.log(formData);
  },

  render: function() {

    return (
      <div className="container-fluid">
        <div className="row color-bg"></div>
        <div className="row main-bg">
          <div className="container">
            <div className="mui-app-content-canvas page-with-nav">
              <div className="page-with-nav-content">

                <Paper zDepth={1}>

                  <h2 className="title-h2">Now, what would you like to do</h2>

                  <Toolbar>
                    <ToolbarGroup key={1} float="right">
                      <span>I want to</span>
                      <DropDownMenu
                        className="dropdown-long"
                        menuItems={menuItemsIwant}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <Toolbar>
                    <ToolbarGroup key={2} float="right">
                      <span>So I can</span>
                      <DropDownMenu
                        className="dropdown-long"
                        menuItems={menuItemsIcan}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <h2 className="title-h2">Please, share a little about you.</h2>

                  <div className="clearfix"></div>

                  <Toolbar>
                    <ToolbarGroup key={3} float="right">
                      <span>I am</span>
                      <TextField
                        id="name"
                        className="text-field-long"
                        ref="textfield"
                        hintText="Full name"
                        errorText={this.state.errorTextName}
                        onChange={this._handleErrorInputChange}
                      />
                      <span>and I am</span>
                      <TextField
                        id="age"
                        className="text-field-short"
                        ref="textfield"
                        hintText="00"
                        errorText={this.state.errorTextAge}
                        onChange={this._handleErrorInputChange}
                      />
                      <span className="span-right-measure">years of age.</span>
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <Toolbar>
                    <ToolbarGroup key={4} float="right">
                      <span>I</span>
                      <DropDownMenu
                        hintText="I"
                        menuItems={menuItemsHousing}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                      <span>in</span>
                      <TextField
                        id="city"
                        ref="textfield"
                        className="text-field-long"
                        hintText="City"
                        errorText={this.state.errorTextCity}
                        onChange={this._handleErrorInputChange}
                      />
                      <span>,</span>
                      <TextField
                        id="state"
                        ref="textfield"
                        className="text-field-short text-field-right-measure"
                        hintText="ST"
                        errorText={this.state.errorTextState}
                        onChange={this._handleErrorInputChange}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <Toolbar>
                    <ToolbarGroup key={5} float="right">
                      <span>Where I live</span>
                      <DropDownMenu
                        className="dropdown-long"
                        menuItems={menuItemsIlive}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <Toolbar>
                    <ToolbarGroup key={6} float="right">
                      <span>My lifestyle is</span>
                      <DropDownMenu
                        className="dropdown-short"
                        menuItems={menuItemsLifestyle}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                      <span>and I've saved</span>
                      <DropDownMenu
                        className="dropdown-short"
                        menuItems={menuItemsLifestyle2}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <Toolbar>
                    <ToolbarGroup key={7} float="right">
                      <span>My yearly household is about</span>
                      <DropDownMenu
                        className="dropdown-mobile"
                        menuItems={menuItemsIncome}
                        onChange={this._handleDropdownValue}
                        //autoWidth={false}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <Snackbar
                    ref="snackbar"
                    message="Invalid input, please check and try again"
                  />

                  <div className="button-place">
                    <FlatButton
                      onTouchTap={this._handleClick}
                      label="I'm done lets go!"
                    />
                  </div>

                </Paper>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Content;