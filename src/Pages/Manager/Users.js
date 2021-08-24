import React,{useState, useEffect} from 'react';
import Title from '../../Components/Title';
import Sidebar  from '../../Components/Sidebar';
import { Button,Form,Col,Table, Row, Modal } from 'react-bootstrap'
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function AddUser(props) {
    let history = useHistory();
    const url = "http://localhost:3030/api/v1/addEmployee"
    const [data, setData] = useState({
        // emp_Id= "",
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        gender: "Male",
        userType: "RECEPTIONIST",
        password: ""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            contactNo: data.contactNo,
            gender: data.gender,
            userType: data.userType,
            password: data.password
        })
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
                firstName: "",
                lastName: "",
                email: "",
                contactNo: "",
                gender: "Male",
                userType: "RECEPTIONIST",
                password: ""
            })
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor:'lightgray'}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                            <Form onSubmit={(e) => submit(e)}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="firstName">
                                    <Form.Label style={{textAlign:'center'}}><h6>First Name</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.firstName} id="firstName" type="text" required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="lastName">
                                    <Form.Label style={{textAlign:'center'}}><h6>Last Name</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.lastName} type="text" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="email">
                                    <Form.Label style={{textAlign:'center'}}><h6>Email</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.email} type="Email" placeholder="Enter Email" required/>
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} controlId="contactNo">
                                    <Form.Label style={{textAlign:'center'}}><h6>Mobile No:</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.contactNo} type="text" placeholder="07x xxx xxx" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="gender">
                                    <Form.Label style={{textAlign:'center'}}><h6>Gender</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} as="select" className="my-1 mr-sm-2" custom>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="userType">
                                    <Form.Label style={{textAlign:'center'}}><h6>User Role</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} as="select" className="my-1 mr-sm-2" custom>
                                                <option value="RECEPTIONIST">RECEPTIONIST</option>
                                                <option value="STEWARD">STEWARD</option>
                                                <option value="GUIDE">GUIDE</option>
                                                <option value="KITCHEN_STAFF">KITCHEN_STAFF</option>
                                        </Form.Control>
                                    </Form.Group>   
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="password">
                                    <Form.Label style={{textAlign:'center'}}><h6>Password</h6></Form.Label>
                                    <Form.Control type="password" onChange={(e)=>handle(e)} value={data.password} placeholder="Password" required/>
                                    </Form.Group>
                                </Form.Row>
                                <div style={{textAlign:'center'}}>
                                    <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                                </div>
                                
                            </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'lightgray'}}>
            Adventure Base Camp, Kitulgala.
        </Modal.Footer>
      </Modal>
    );
  }

  function EditUser(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update User Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                editemployees.map(
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label style={{textAlign:'center'}}><h6>First Name</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label style={{textAlign:'center'}}><h6>Last Name</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{textAlign:'center'}}><h6>Email</h6></Form.Label>
                                    <Form.Control type="Email" placeholder="Enter Email" required/>
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label style={{textAlign:'center'}}><h6>Mobile No:</h6></Form.Label>
                                    <Form.Control type="text" placeholder="07x xxx xxx" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Row>
                                    <Col sm={6}>
                                    <Form.Group controlId="formGridEmail">
                                    <Form.Label style={{textAlign:'center'}}><h6>Gender</h6>
                                    <div>
                                            <br></br>
                                            <input type="radio" name="gender" id="exampleRadios1" value="option1" checked /> Male &nbsp; &nbsp; &nbsp; 
                                            <input type="radio" name="gender" id="exampleRadios2" value="option2" />Female

                                    </div>
                                    </Form.Label>
                                    </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                    <Form.Group controlId="formGridMobile">
                                    <Form.Label style={{textAlign:'center'}}><h6>User Role</h6></Form.Label>
                                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                                <option value="1">Receptionist</option>
                                                <option value="2">Guide</option>
                                                <option value="3">Steward</option>
                                                <option value="3">Kitchen Staff</option>
                                        </Form.Control>
                                    </Form.Group>   
                                    </Col>
                                </Row>
                                <div style={{textAlign:'center'}}>
                                    <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                                </div>
                                
                            </Form>
                )
        </Modal.Body>
        <Modal.Footer>
            Adventure Base Camp, Kitulgala.
        </Modal.Footer>
      </Modal>
    );
  }

  function Update(id){
    const [editemployees,setEditemployees]=useState([])

    // console.log(id)
    axios.get(`http://localhost:3030/api/v1/viewEmployee/${id}`)
    .then((res)=>{
        console.log(res.data);
        setEditemployees(res.data)
    })
}

const Users =()=>{

    const [show,setShow]=useState(false)
    const [editshow,setEditShow]=useState(false)
    const [employees,setEmployees]=useState([])
    const [added, setadded] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3030/api/v1/viewEmployeess/CUSTOMER')
        .then(res => {
            setEmployees(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[added])

 

    return(
        <>
            <div className="users" >
                <Sidebar></Sidebar>
                <Title title="U S E R S"></Title>
                <br></br>
                <div className="row">
                    <div className="col-md-6">
                    <Button variant="dark" onClick={()=>setShow(true)}>+ Add New User</Button>
                    <AddUser 
                        show={show}
                        onHide={() => setShow(false)}
                        added={added} 
                        setadded={setadded} 
                    />   
                    </div>
                    <div className="col-md-6" style={{textAlign:'right'}}>
                     <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Mobile_No/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                    </div>
                </div>
                <br></br><br></br>
                <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Gender</th>
                            <th>User Type</th>
                            {/* <th>Password</th> */}
                            <th style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                test =>
                        <tr key = {test.id}>  
                            <td>{test.id}</td>
                            <td>{test.firstName}</td>
                            <td>{test.lastName}</td>
                            <td>{test.email}</td>
                            <td>{test.contactNo}</td>
                            <td>{test.gender}</td>
                            <td>{test.userType}</td>
                            {/* <td>{employee.password}</td> */}
                            <td style={{textAlign:'center'}}>
                            <Tippy content="Delete">
                                <Button type="delete"><FaTrash /></Button>
                            </Tippy>
                             <Tippy content="Edit">
                                <Button onClick={()=>Update(test.id),()=>setEditShow(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                             </td>
                        </tr>
                            )
                        }
                    </tbody>
                    </Table>
                    <EditUser
                        show={editshow}
                        onHide={()=> setEditShow(false)} 
                    />
                </div>
            </div>
            
        </>
    )
}
export default Users;