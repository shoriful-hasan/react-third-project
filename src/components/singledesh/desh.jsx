import PropTypes from 'prop-types';
import './style.css'
import { useState } from 'react';
const Desh = ({single,handlevisitedcountry,handleflag}) => {



  
const{name,flags,maps,capital,population} = single;

const [visit,setvisit] = useState(false);
const handletoggle = ()=>{
    setvisit(!visit)
}


    return (
        <div className={` ${visit ? 'visit' : 'round'}`}>
            <h2>country name :: {name.common}</h2>
            <img src={flags.png} alt="" />
            <div>
                <a href={maps.openStreetMaps} target='_blank'>click now</a>
            </div>
            <h2>capital::{capital}</h2>
            <h2>Population::{population}</h2>
            <button onClick={()=>{handleflag(flags.png)}}>Flag</button>
            <button onClick={()=>{handlevisitedcountry(single)}}>visited</button> <br /> <br />
            <button onClick={handletoggle}>{visit ? 'Visited' : 'GO'}</button>
            {visit ? 'i visit there' : 'i want to go there'}
        </div>
    );
};

export default Desh;

Desh.propTypes = {

      single:PropTypes.object.isRequired,
      handlevisitedcountry:PropTypes.func.isRequired,
      handleflag:PropTypes.func.isRequired,
   }
      





// function Hello({ name }) {
//     return <div>Hello {name}</div>;
//   }
//   Hello.propTypes = {
//     name: PropTypes.string.isRequired
//   }
  

    

