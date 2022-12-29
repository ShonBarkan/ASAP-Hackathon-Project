import React, {useState} from "react";
import { createContext } from "react";

export const UserContext = createContext()

const ContextProvider = (props) => {
    const{children} = props
    const[display,setDisplay]=useState("heloo")
    const [students,setStudents]=useState([
        {id:1,firstName:'shon',lastName:'barkan',phoneNumber:'0542399928',grade:'6'},
        {id:2,firstName:'hila',lastName:'efron',phoneNumber:'05445687454',grade:'10'}
    ]);
    const[teachers,setTeachers]=useState([
        {id:1,firstName:'hodi',lastName:'zoubi',age:'25',subject:['math','react'],education:'professor',aboutMe:"teacher at cyber pro",available:'true',rate:[3,4]},
        {id:2,firstName:'Tommer',lastName:'Nevo',age:'20',subject:['html','redux'],education:'second degree',aboutMe:"teacher at cyber pro",available:'true',rate:[1,8]},
        {id:3,firstName:'Gal',lastName:'Shachaf',age:'35',subject:['css','java'],education:'second degree',aboutMe:"teacher at cyber pro",available:'true',rate:[5,2]},
        {id:4,firstName:'David',lastName:'Kvart',age:'35',subject:['css','java'],education:'second degree',aboutMe:"teacher at cyber pro",available:'true',rate:[1,0]},
        {id:5,firstName:'Eliav',lastName:'Gino',age:'22',subject:['english','redux'],education:'second degree',aboutMe:"teacher at cyber pro",available:'false',rate:[4,3]}
    ]);
    const originalTeachers=[
        {id:1,firstName:'hodi',lastName:'zoubi',age:'25',subject:['math','react'],education:'professor',aboutMe:"teacher at cyber pro",available:'true',rate:[3,4]},
        {id:2,firstName:'Tommer',lastName:'Nevo',age:'20',subject:['html','redux'],education:'second degree',aboutMe:"teacher at cyber pro",available:'true',rate:[1,8]},
        {id:3,firstName:'Gal',lastName:'Shachaf',age:'35',subject:['css','java'],education:'second degree',aboutMe:"teacher at cyber pro",available:'true',rate:[5,2]},
        {id:4,firstName:'David',lastName:'Kvart',age:'35',subject:['css','java'],education:'second degree',aboutMe:"teacher at cyber pro",available:'true',rate:[1,0]},
        {id:5,firstName:'Eliav',lastName:'Gino',age:'22',subject:['english','redux'],education:'second degree',aboutMe:"teacher at cyber pro",available:'false',rate:[4,3]}
    ]

    let [selectedTeacher,setSelectedTeacher]=useState({id:1,firstName:'hodi',lastName:'zoubi',age:'25',subject:['math','react'],education:'professor',aboutMe:"teacher at cyber pro",available:'true',rate:[3,4]});

    const[codeNumber,setCodeNumber]=useState("??????")
    const[cost,setCost]=useState(0)
    const[theLessonTeacher,setTheLessonTeacher]=useState( {id:1,firstName:'hodi',lastName:'zoubi',age:'25',subject:['math','react'],education:'professor',aboutMe:"teacher at cyber pro",available:'true',rate:[3,4]})
    const[studentLogIn,setStudentLogIn]=useState({firstName:'guest'})
    const[time,setTime]=useState(0)

    let subjects=[];
    for(let i=0; i<originalTeachers.length;i++){
        for(let j=0;j<originalTeachers[i].subject.length;j++){
                !subjects.includes(originalTeachers[i].subject[j]) && subjects.push(originalTeachers[i].subject[j])               
        }
    }
    let sortedTeachers=[]
    const sortTeachers=(e)=>{        
        sortedTeachers=originalTeachers.filter(t=> t.subject.includes(e.target.innerHTML))
        setTeachers(sortedTeachers)  
    }

    const showBigTeacher=(teacher)=>{
        setSelectedTeacher(teacher);
        document.getElementById("BigCard").style.display='block'
    }

    const addStudent=(e,vals)=>{
        e.preventDefault();

            let id=students[students.length-1].id+1
            let newStudents={
            id:id,
            firstName:vals.firstName,
            lastName:vals.lastName,
            phoneNumber:vals.phoneNumber,
            grade:vals.grade
            }
        students.push(newStudents);
        setStudents(students);
        console.log(students);
        

    }
    const validPhone=(e,phoneNumber)=>{
        e.preventDefault();
        let exsist=students.filter(student=> student.phoneNumber===phoneNumber)
        console.log(exsist);
            if (exsist.length>0){
                document.getElementById("code").style.display='block'
                document.getElementById("no1").style.display='none'
                setStudentLogIn(exsist)
                makeAcode()
            }else{
                document.getElementById("no1").style.display='block'
               }
    }
    const makeAcode=()=>{
        let num=Math.floor(Math.random() * 899999) + 100000;
        setCodeNumber(num)
    }
    const validCode=(e,code)=>{
        e.preventDefault();
       if(parseInt(code)===codeNumber){
        document.getElementById("toWaitingPage").style.display='block'
       }
    }
    const rateTeacher=(num)=>{
        theLessonTeacher.rate.push(num)
        setTheLessonTeacher(theLessonTeacher)
        console.log(theLessonTeacher);
    }
    const clcCost=(time)=>{
        setTime(time)
        setCost(0.5*time)
    }
    const ezeTeacher=(teacher)=>{
        setTheLessonTeacher(teacher)
    }

    return ( 
        <UserContext.Provider value={{time,display,students,teachers,codeNumber,cost,sortedTeachers,selectedTeacher,subjects,theLessonTeacher,studentLogIn,ezeTeacher,sortTeachers,showBigTeacher,clcCost,addStudent,validPhone,validCode,rateTeacher}}>
            {children}
        </UserContext.Provider>
     )

    
}
 
export default ContextProvider;

// --------------------------------------------------------------------------------------------------------------------------------
    






