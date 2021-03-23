import axios from "axios";
import React, { Component } from 'react';
import API from "../utils/API";

class EmployeeTable extends Component {
    state = { 
        employeeList :[]

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
        let data = this.state.employeeList;
        console.log(data);
        console.log(data[0]);
        //let image = data.picture.thumbnail;
        //let name = data.name.first + ' ' + data.name.last;

        

        return (
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
                        {this.state.employeeList.map(employee => (
                            <tr>
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
        );


    }
}
 
export default EmployeeTable;