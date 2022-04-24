import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FiEdit, FiDelete } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default class RecentTicketUpdates extends Component {

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

                        <div class="col-sm-3 mt-5 mb-4 text-gred">
                            <div className="search">
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Recent Updates</b></h2></div>
                        <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        </div>
                    </div>
                    <div class="row">
                        <div class="table-responsive " >
                            <table class="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Details</th>
                                        <th>ProjectTitle</th>
                                        <th>Remarks</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Project index="1" Title="Web Bug" Details="lorem ipsum lorem ipsum" ProjectTitle="Anas" Remarks="Urgent"></Project>
                                    <Project index="2" Title="HelloWorld" Details="lorem ipsum lorem ipsum" ProjectTitle="Ahmad" Remarks="Urgent"></Project>
                                    <Project index="3" Title="Web Bug" Details="lorem ipsum lorem ipsum" ProjectTitle="Anas" Remarks="Urgent"></Project>
                                    <Project index="4" Title="HelloWorld" Details="lorem ipsum lorem ipsum" ProjectTitle="Ahmad" Remarks="Urgent"></Project>
                                    <Project index="5" Title="Web Bug" Details="lorem ipsum lorem ipsum" ProjectTitle="Anas" Remarks="Urgent"></Project>
                                    <Project index="6" Title="HelloWorld" Details="lorem ipsum lorem ipsum" ProjectTitle="Ahmad" Remarks="Urgent"></Project>
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
                                        <input type="" class="form-control" placeholder="Project Name" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Project Description" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label className="" >Assign Contributor</label>
                                        <select class="select form-control" multiple>
                                            <option>Ali</option>
                                            <option>Ahmad</option>
                                            <option>Ahsan</option>
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
                    <td>{this.props.Title}</td>
                    <td>{this.props.Details}</td>
                    <td>{this.props.ProjectTitle}</td>
                    <td>{this.props.Remarks}</td>
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
                                    <input type="" class="form-control" placeholder={"Project Name"} />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Project Description" />
                                </div>
                                <div class="form-group mt-3">
                                    <label className="" >Assign Contributor</label>
                                    <select class="select form-control" multiple>
                                        <option>Ali</option>
                                        <option>Ahmad</option>
                                        <option>Ahsan</option>
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