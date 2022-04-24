import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FiEdit, FiDelete } from "react-icons/fi";
export default class AdminEmployees extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div class="container ">
                <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                    <div class="row ">

                        
                        
                        <div class="col-sm-3 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Employee Record</b></h2></div>
                        <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred">
                            <div className="search">
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search Employee" aria-label="Search" />
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                            <Button variant="primary" onClick={this.showModal}>
                                Add New Employee
                            </Button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="table-responsive " >
                            <table class="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>EMPLOYEE NAME</th>
                                        <th>ROLE</th>
                                        <th>PHONE</th>
                                        <th>EMAIL</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Project index="1" EmpName="Anas" EmpRole="Admin" EmpPhone="+923123232542" EmpEmail="Anas@123.com" ></Project>
                                    <Project index="2" EmpName="Ahmad" EmpRole="Manager" EmpPhone="+923123232542" EmpEmail="Ahmad@123.com"></Project>
                                    <Project index="3" EmpName="Sham" EmpRole="Manager" EmpPhone="+923123232542" EmpEmail="Anas@123.com"></Project>
                                    <Project index="4" EmpName="Ducky" EmpRole="Manager"  EmpPhone="+923123232542" EmpEmail="Ahmad@123.com"></Project>
                                    <Project index="5" EmpName="Bilal" EmpRole="Manager"   EmpPhone="+923123232542" EmpEmail="Anas@123.com"></Project>
                                    <Project index="6" EmpName="Ilyas" EmpRole="Manager" EmpPhone="+923123232542"  EmpEmail="Ahmad@123.com"></Project>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <!--- Model Box ---> */}
                    <div className="model_box">
                    <Modal
                            show={this.state.show}
                            handleClose={this.hideModal}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header>
                                <Modal.Title>Add Record</Modal.Title>
                                <Button className="btn-close" onClick={this.hideModal}>
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div class="form-group">
                                        <input type="" class="form-control" placeholder="Employee Name" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee Email" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="phone" class="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" placeholder="Employee Phone" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label className="" >Assign Role</label>
                                        <select class="select form-control" multiple>
                                            <option>Admin</option>
                                            <option>Manager</option>
                                            <option>User</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-success mt-4">Add Record</button>
                                </form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.hideModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
class Project extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.props.EmpName}</td>
                    <td>{this.props.EmpRole}</td>
                    <td>{this.props.EmpPhone}</td>
                    <td>{this.props.EmpEmail}</td>
                    <td>
                        <div className="row col-gap justify-content-center">
                            <a onClick={this.showModal} class="edit col-md-2" title="Edit" data-toggle="tooltip"><FiEdit />
                            </a>
                            <a href="#" class="delete col-md-2" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><FiDelete /></a>
                        </div>
                    </td>
                </tr>
                <Modal
                            show={this.state.show}
                            handleClose={this.hideModal}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header>
                                <Modal.Title>Update Record</Modal.Title>
                                <Button className="btn-close" onClick={this.hideModal}>
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div class="form-group">
                                        <input type="" class="form-control" placeholder="Employee Name" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee Email" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="phone" class="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" placeholder="Employee Phone" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label className="" >Assign Role</label>
                                        <select class="select form-control" multiple>
                                            <option>Admin</option>
                                            <option>Manager</option>
                                            <option>User</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-success mt-4">Update Record</button>
                                </form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.hideModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
            </>


        )
    }
}