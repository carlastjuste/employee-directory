import React, { Component } from 'react';

class Header  extends Component {

    render() { 
        return ( 
        <React.Fragment>
          <header>
              <h1>Employee Directory</h1>
              <p>Click on carrots to filter by heading or use the search box to narrow your result</p>
          </header>
        </React.Fragment>
              
       );
    }
}
 
export default Header ;