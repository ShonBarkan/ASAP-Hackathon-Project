import { Fragment,useState,useEffect,useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import './zommArea.css'




const ZoomArea = () => {
    const {clcCost} = useContext(UserContext);
    const [countLesson,setCount]=useState(0);


    useEffect(()=>{setTimeout(() => {setCount(countLesson+1)}, 1000)},[countLesson])

    return ( 
        <Fragment>

            <div className="MYdiv">
                <h1 className="text-center">Have a good lesson</h1>        
                <h3 className="text-center">This is your zoom link:</h3>  
                <h1 className="text-center"><a href="https://zoom.us/" target={"_blank"}>click here</a></h1>
                <h4 className="text-center">time : {countLesson>60? `${Math.floor(countLesson/60)}:${countLesson%60}`:`00:${countLesson}`}</h4>

                <Link to="/RatePage"><button className="btn btn-danger myBTN" onClick={()=>clcCost(countLesson)}>lesson ended?</button></Link>
            </div>

            <div class="custom-shape-divider-bottom-1672279448">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
                </svg>
            </div>

        
        </Fragment>
     );
}
 
export default ZoomArea;