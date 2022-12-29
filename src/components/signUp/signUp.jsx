import { Fragment, useContext } from "react";
import { UserContext } from "../context";
import {useFormik} from 'formik'
import { Link } from "react-router-dom";
import './signUp.css'
import image from ".././pics/back1.png"; 





const SignUp = () => {
    const {display,students,addStudent} = useContext(UserContext);

    const formik= useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            phoneNumber:'',
            grade:'',
        }
    })

    return ( 
        
        <Fragment>
                    <div className="custom-shape-divider-bottom-1672258320">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
        </div>
        <div >
            <h1 className="text-center kotert">SignUp</h1>
            <form className="Myfrom" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col form-floating input-group-lg  m-3">
                            <input type="text" className="form-control " id="firstName" placeholder="first Name" value={formik.values.firstName} onChange={formik.handleChange}/>
                            <label htmlFor="firstName">first Name</label>
                        </div>
                        
                        <div className="col form-floating input-group-lg  m-3">
                            <input type="text" className="form-control" id="lastName" placeholder="lastName" value={formik.values.lastName} onChange={formik.handleChange}/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-floating input-group-lg  m-3">
                            <input type="text" className="form-control" id="phoneNumber" placeholder="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange}/>
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <select className="form-select  mb-3" id="grade" value={formik.values.grade} onChange={formik.handleChange}>
                            <option defaultValue>Grade</option>
                            <option value="1">Grade 1</option>
                            <option value="2">Grade 2</option>
                            <option value="3">Grade 3</option>
                            <option value="4">Grade 4</option>
                            <option value="5">Grade 5</option>
                            <option value="6">Grade 6</option>
                            <option value="7">Grade 7</option>
                            <option value="8">Grade 8</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                            <option value="12">Grade 12</option>
                            <option value="13">Student</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className='col m-3'>
                            <Link to="/WaitingPage"><button className="btn btn-success" onClick={(e)=>{
                                addStudent(e,formik.values)
                                document.getElementById('next').style.display='block'
                                }}>Submit</button></Link>
                        </div>
                    </div>
                </div>
                <Link to="/logIn"><button id="next" className="btn btn-primary">next</button></Link>
            </form>

       
        </div>
        <div class="custom-shape-divider-bottom-1672259542">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </Fragment>
     );
}
 
export default SignUp;