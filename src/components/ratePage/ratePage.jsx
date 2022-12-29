import { Fragment,useState,useEffect,useContext } from "react"
import { UserContext } from "../context";
import { Link } from "react-router-dom";
import './RatePage.css'



const RatePage = () => {
    const {rateTeacher,cost,theLessonTeacher,time} = useContext(UserContext);
    const[rate,setRate]=useState(3)


    return ( 
        <Fragment>

            <div class="custom-shape-divider-bottom-1672280333">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            
            <div className="myDIv">
                <h1 className="text-center">we hoop you had a great lesson</h1>
                <div className="text-center">
                    <h3>Rate : {theLessonTeacher.firstName}</h3>
                    <button className="starBTN" onClick={()=>{
                        setRate(1)
                        document.getElementById("star1").style.fontSize='40px'
                        document.getElementById("star2").style.fontSize='30px'
                        document.getElementById("star3").style.fontSize='30px'
                        document.getElementById("star4").style.fontSize='30px'
                        document.getElementById("star5").style.fontSize='30px'
                        }}><span id="star1">&#11088;</span></button>  
                    <button className="starBTN" onClick={()=>{
                        setRate(2)
                        document.getElementById("star1").style.fontSize='40px'
                        document.getElementById("star2").style.fontSize='40px'
                        document.getElementById("star3").style.fontSize='30px'
                        document.getElementById("star4").style.fontSize='30px'
                        document.getElementById("star5").style.fontSize='30px'
                        }}><span id="star2">&#11088;</span></button>  
                    <button className="starBTN" onClick={()=>{
                        setRate(3)
                        document.getElementById("star1").style.fontSize='40px'
                        document.getElementById("star2").style.fontSize='40px'
                        document.getElementById("star3").style.fontSize='40px'
                        document.getElementById("star4").style.fontSize='30px'
                        document.getElementById("star5").style.fontSize='30px'
                        }}><span id="star3">&#11088;</span></button>  
                    <button className="starBTN" onClick={()=>{
                        setRate(4)
                        document.getElementById("star1").style.fontSize='40px'
                        document.getElementById("star2").style.fontSize='40px'
                        document.getElementById("star3").style.fontSize='40px'
                        document.getElementById("star4").style.fontSize='40px'
                        document.getElementById("star5").style.fontSize='30px'
                        }}><span id="star4">&#11088;</span></button>  
                    <button className="starBTN" onClick={()=>{
                        setRate(5)
                        document.getElementById("star1").style.fontSize='40px'
                        document.getElementById("star2").style.fontSize='40px'
                        document.getElementById("star3").style.fontSize='40px'
                        document.getElementById("star4").style.fontSize='40px'
                        document.getElementById("star5").style.fontSize='40px'
                        }}><span id="star5">&#11088;</span></button>  
                </div>  
                <br />
                <div>
                    <h4 className="text-center">Your lesson was : {time>60? `${Math.floor(time/60)}:${time%60} minutes`:`${time} sec`} </h4>
                    <h4 className="text-center">you need to pay: {cost} shekels</h4>
                </div>  
                <div>
                    <Link to="/"><button className="btn btn-primary pay" onClick={()=>rateTeacher(rate)}>to pay</button></Link>
                </div>
            </div>

                <div class="custom-shape-divider-bottom-1672280332">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
        </Fragment>
     );
}
 
export default RatePage;