import React, { Component } from 'react';
import EmployeeTable from "./employeeTable";

class SearchArea extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "search-area">
                <input className = "form-control" 
                type="search" 
                placeholder="Search...." 
                />
            </div>
         );
    }
}
 
export default SearchArea;