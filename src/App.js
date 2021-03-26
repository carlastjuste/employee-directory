import React, { Component } from 'react';
import Header from './components/header';
import EmployeePage from './components/employeePage';
import './App.css';


class App extends Component {



  render(){
    return (
      <React.Fragment>
        <Header />
          <EmployeePage />
      </React.Fragment>
    );

  }

}

export default App;
