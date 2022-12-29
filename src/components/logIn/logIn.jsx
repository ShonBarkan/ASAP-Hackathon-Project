import { Fragment, useContext } from "react";
import { UserContext } from "../context";
import {useFormik} from 'formik'
import { Link } from "react-router-dom";
import './login.css';


const LogIn = () => {
    const {students,validPhone,codeNumber} = useContext(UserContext);

    const formik= useFormik({
        initialValues:{
            phoneNumber:'',
            code:'',
        }
    })
    const validCode=(e)=>{
        e.preventDefault();
       if(parseInt(document.getElementById("CodeInput").value)===codeNumber){
        document.getElementById("toWaitingPage").style.display='block'
       }
    }
    
    return ( 
        <Fragment>
        <div className="custom-shape-divider-bottom-1672258320">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
        </div>

            <h1 className="text-center kotert">Log In</h1>

            <form className="Myfrom">
                
            <Link to="/SignUp"><button className="btn btn-secondary signUp">SignUp</button></Link>
                    <div className="row">
                        <div className="col-9">
                            <div className="col form-floating input-group-lg  m-3">
                                <input type="text" className="form-control" id="phoneNumber" placeholder="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange}/>
                                <label htmlFor="phoneNumber">Phone Number</label>
                            </div>
                        </div>
                        <div className='col m-2'>
                            <button className="btn btn-success MYbtn " onClick={(e)=>validPhone(e,formik.values.phoneNumber)}>Submit</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="alert alert-danger" id="no1" role="alert">
                        The phone number is invalid or does not exist in the system
                        </div>
                    </div>
              
                            <div className="row">
                                <h5 className="text-center">the code is: {codeNumber}</h5>
                            </div>
                            
                        <div id="code" className="row">
                            <div className="row">
                                    <div className=" col-11 form-floating input-group-lg  m-3">
                                        <input type="text" className="form-control" id="CodeInput" placeholder="CodeInput" />
                                        <label htmlFor="CodeInput">Code</label>
                                    </div>
                            </div>
                            <div className="row">
                                <button className="btn btn-success sub2" onClick={(e)=>validCode(e)}>Submit</button>
                            </div>
                               
                        </div>

                    
                         

                    <div className="row">
                        <Link to="/WaitingPage"><button id="toWaitingPage" className="btn btn-primary">to Waiting Page</button></Link>
                    </div>
                    </form>


            
            <div className="custom-shape-divider-bottom-1672259542">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

        </Fragment>
     );
}
 
export default LogIn;