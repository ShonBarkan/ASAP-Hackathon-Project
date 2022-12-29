import "./bigTeacher.css"
import { useContext } from 'react';
import { UserContext } from '../context';
import { Link } from 'react-router-dom';
import pic from '../pics/man.png'


const BigTeacher = () => {
    const{selectedTeacher,ezeTeacher,studentLogIn}=useContext(UserContext)
    let sum = selectedTeacher.rate.reduce(
    (r1,r2) => (r1+r2),0);
    let avrg=sum/selectedTeacher.rate.length;
    
    return ( 
        <div className="BigTeacherCard">
        <div className="info">
            <div>
                <div className="myText">Name:{selectedTeacher.firstName+" "+selectedTeacher.lastName}</div>
                <div className="myText">Age: {selectedTeacher.age}</div>
                <div className="myText">Can teach:{selectedTeacher.subject.map(sub=>
                                <li key={sub}>{sub}</li> )}
                </div>
                <div className="myText">Education: {selectedTeacher.education}</div>
                <div className="myText">Rate: {Math.floor(avrg)}/5 <span>&#11088;</span></div>
            </div>
            <div className="thePic">
               <img id="thePic" src={pic} alt=""/>
            </div>
        </div>
                {selectedTeacher.available=='true'?
                    <Link to={studentLogIn.firstName=='guest'? "/LogIn":'/WaitingPage'}><button className="btn btn-success start" onClick={()=>ezeTeacher(selectedTeacher)}>Start lesson</button></Link>:
                    <button className="btn btn-danger start">This teacher is busy now, try again late.</button>

                }
            </div>
            
     );
}
 
export default BigTeacher;