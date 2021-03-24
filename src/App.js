import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import EmployeeTable from './components/employeeTable';
import SearchArea from './components/searchArea'

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchArea />
      <EmployeeTable />
    </React.Fragment>
  );
}

export default App;
