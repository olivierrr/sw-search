var React = require('react');
var Search = require('./Search.jsx')
var Img = require('./Img.jsx');
var Info = require('./Info.jsx');

var UI = React.createClass({

  getInitialState: function() {
      return {
        people: []
      }
  },

  // THIS WILL RETURN API JSON DATA BEFORE FIRST RENDER
  componentDidMount: function() {

    fetch('http://swapi.co/api/people')
      .then(function(response) {
        return response.json
      })
      .then(function(json) {
        this.setState({ people: json });
        console.log(json);
      }.bind(this))
      .catch(function(err) {
        console.log(err);
      })
  },

  logPeople: function() {
    console.log(this.state.people);
  },

  filterByName: function(name) {
    var filtered = this.state.people.filter(function(name) {
      return obj.name.indexOf(name) > -1;
    });
    console.log(this.state.people)
    return ({filtered});
    console.log(filtered);

  },

  render: function() {

      return (
        <div className="ui">
          <header className="search-bar">
            {/*SEARCH BAR TO LOOK UP API INFO*/}
            <Search onNewSearch={this.filterByName} characters={this.state.people} />
          </header>
          <input type="submit" value="search" onClick={this.logPeople} />
          <Img />
          <Info />
        </div>
    );
  }
});

module.exports = UI;
