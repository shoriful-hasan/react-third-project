import { useEffect, useState } from "react";
import Desh from "../singledesh/desh";

import './countries.css'



const Countries = () => {
const [country,Setcountry] = useState([]);
const [datacountry,setdatacountry] = useState([])
const [flagdata,setflagdata] = useState([]);

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then((res)=> res.json())
       .then((data) => Setcountry(data))
},[])

const handleflag = (flag)=>{



    const newflag = [...flagdata,flag];
    setflagdata(newflag)
    

    
}


const handlevisitedcountry = (country)=>{


    const newdatacountry = [...datacountry,country];
    setdatacountry(newdatacountry)

}


    return (
        <div>
            <h2>visited country :{datacountry.length}</h2>
            <div>
               <h2>some flag
               {
                 flagdata.map((flag) => <img src={flag}></img>)
                }
               </h2>
            </div>
        <ul>
 {datacountry.map(country => <li className="some_design">{country.name.common}</li>)}
        </ul>
<h3>country{country.length}</h3>


           <div className="country">
           {country.map(count => <Desh key={count.cca3} single={count} handleflag={handleflag} handlevisitedcountry={handlevisitedcountry}></Desh>)}
           </div>

        </div>
    );
};

export default Countries;


