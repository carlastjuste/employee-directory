import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import EmployeeTable from './components/employeeTable';

function App() {
  return (
    <React.Fragment>
      <Header />
      <EmployeeTable />
    </React.Fragment>
  );
}

export default App;
