import './CreateProject.css';
function CreateProject() {
    
    return (
        <body>
        <div className="container border shadow rounded bg-white mt-5 mb-5">
            <div className="row border">
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right" style={{fontSize: "40px"}}>Add Project</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels"  style={{fontSize: "20px"}}>Project Title</label><input type="text" class="form-control" placeholder="title" defaultValue =""/></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels"  style={{fontSize: "20px"}}>Project Details</label><input type="text" class="form-control"  style={{height:"150px"}} placeholder="enter details here" defaultValue =""/></div>
                            
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels"  style={{fontSize: "20px"}}>Project Priority</label></div>
                            <div class="col-md-6"><label class="labels"  style={{fontSize: "20px"}}>Project Platform</label></div>
                        </div>
                        <div className="row mt-3">
                            <div className='col'>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Project Priority</button>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Option 1</a>
                                        <a href="#" className="dropdown-item">Option 2</a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" className="dropdown-item">Option 3</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Platform</button>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Option 1</a>
                                        <a href="#" className="dropdown-item">Option 2</a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" className="dropdown-item">Option 3</a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Project</button></div>
                        </div>
                </div>

                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <br></br>
                        <div class="d-flex justify-content-between align-items-center experience" style={{fontSize: "25px"}}><span>Add People To Project</span></div><br/>
                        <div class="col-md-12"><label class="labels" style={{fontSize: "20px"}}>Enter Names</label><input type="text" class="form-control" placeholder="Add Names" defaultValue =""/></div> <br/>
                        <br></br>
                        <div class="col-md-12"  style={{fontSize: "20px"}}><label>Upload Additional Document</label></div> 
                        <div class="input-group py-2">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                        </div>
                       
                        </div>
                    </div>
                   
                    
                </div>

            </div>
        </div>
        
        </body>
       
            
    );
}

export default CreateProject;
