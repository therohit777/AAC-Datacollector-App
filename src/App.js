import './App.css';
import { Bodycontent } from './MyComponents/JsFiles/Bodycontent';
import React, { useEffect,useState,useRef } from 'react';
import { MdSearch } from "react-icons/md";


function App() {
  
  const [btn, setbtn] = useState(0);


  const [country, setcountry] = useState('India');
  const countryname = useRef();



  const [name, setname] = useState('');
  const [capital, setcapital] = useState('');
  const [flag, setflag] = useState('');
  const [region, setregion] = useState('');
  const [subregion, setsubregion] = useState('');
  const [population, setpopulation] = useState('');
  const [borders, setborders] = useState('');
  const [languages, setlanguages] = useState('');





  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(response=> response.json())
    .then(data=>{ 

      setname(data[0].name);
      setcapital(data[0].capital);
      setflag(data[0].flag);
      setregion(data[0].region);
      setsubregion(data[0].subregion);
      setpopulation(data[0].population);
      setborders(data[0].borders);
      setlanguages(data[0].languages);

    })

  },[country,btn])
  console.log(borders);


   const fetchvalues =()=>{
    setcountry(countryname.current.value)
    countryname.current.value='';

   }



  return (
    <div className="App">

      <p className="heado">AAC DataCollecter App</p>


      <div className="container">

        <div className="cont">

      <input type="search" placeholder="Enter Country Name "  onChange={(e)=>e.target.value}  ref={countryname}/>
      <div className="searchcont"><button onClick={()=>fetchvalues()} className="searche"><MdSearch style={{width:"30px" , height:"30px",color:"white"}}/></button></div>

      <Bodycontent name={name} capital={capital} flag={flag} region={region} subregion={subregion} population={population} borders={borders} languages={languages}/>  
     
      <button onClick={()=>setbtn(btn+1)} className="btn1">Refresh</button>
      </div>
      </div>
    </div>
  );
}

export default App; 
