import React, { Component } from 'react'
// import escapeRegExp from 'escape-string-regexp'
import './AsideMenu.css'

class AsideMenu extends Component {

  state = {

  }

  render() {


    return (

      <div className="aside-menu">
        <div className="search" aria-label="Search a country">
        <h2> Search </h2>
          <input
            id="searchCountry"
            type="text"
            placeholder="Search a country..."
          />
        </div>
        <h2>Point of interest </h2>
        <select id="monselect">
          
          <option defaultValue="value1" >Landscape</option>
          <option value="value2">Site seeing</option>
          <option value="value3" > Food</option>
        </select>
        <div>
          <h2>Visited country</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AsideMenu