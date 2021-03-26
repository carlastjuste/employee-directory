import React, { Component } from 'react';
import API from "../utils/API";

class EmployeePage extends Component {
    state = { 
        searchValue: '',
        employeeList :[],
     }

    handleChange = e => {
        let searchValue = this.state.SearchValue;
        searchValue = e.currentTarget.value;
        this.setState({searchValue});

    }

    async componentDidMount () {
        const res = await API.getUsers(); 
        const employeeList = res.data.results;
        this.setState({employeeList : employeeList});
        console.log(employeeList);
    }

    FormatDate(dat) {
    const date = new Date(dat);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '-' + day + '-' + year;
    }



render() {
            return (
            <React.Fragment>
                    <div className = "search-area">
                        <input className = "form-control" 
                               value={this.state.SearchValue}
                               onChange={this.handleChange}
                               type="search" 
                               placeholder="Search by name..."  />
                    </div>
                    <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.employeeList.filter(employee => {
                        if (this.state.searchValue === "") 
                        {return employee;}
                        else if (employee.name.first.toLowerCase().includes(this.state.searchValue.toLowerCase()) || employee.name.last.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                         {return employee;}
                        }

                    ).map((employee,index) => (
                            <tr key={index}>
                            <th scope="row"><img src ={employee.picture.medium} alt="" /></th>
                            <td>{employee.name.first + " "}{employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{this.FormatDate(employee.dob.date)}</td>
                            </tr>
        ))}
                    </tbody>
                </table>
            </div>
            </React.Fragment>
            )
    }
}

export default EmployeePage;