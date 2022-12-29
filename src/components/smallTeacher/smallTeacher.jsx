import "./smallTeacher.css"
import { useContext } from 'react';
import { UserContext } from '../context';
import Eliav from "../pics/Eliav.jpeg"
import Menachem from "../pics/Menachem.jpeg"
import  pic from '../pics/man.png'




// console.log(picsArray);
// picsArray=picsArray.map(n=>n.id)
// picsArray=picsArray.map(p=>p.name.split('/').slice(3))
// picsArray=picsArray.map(n=>n).map(nm=>nm[0].split('.').slice(0,1))
   

const SmallTeacher = (props) => {
    let {teacher}=props;
    const{showBigTeacher}=useContext(UserContext)

    let sum = teacher.rate.reduce(
    (r1,r2) => (r1+r2),0);
    let avrg=sum/teacher.rate.length;
    return ( 
        
        <div className="SmallTeacherCard card">
            {}
            <img className={teacher.available=='true'?'picsA':'picsU'} src={pic} alt=""/>
            <div></div>
            <div>{Math.floor(avrg)}/5 <span>&#11088;</span></div>
            <div>{teacher.firstName}</div>
            <div>
            <button className="btn btn-secondary" onClick={()=>showBigTeacher(teacher)}>More details</button>
            </div>
        </div>
        
     );
}
 
export default SmallTeacher;