import React from 'react';
import '../CssFiles/bodycontent.css';

export const Bodycontent = (props) => {
    let name =props.name;
    let capital = props.capital;
    let flag=props.flag;
    let region=props.region;
    let subregion=props.subregion;
    let population= props.population;
    let borders=[];
    for(var k=0;k<props.borders.length;k++)
        if(k===(props.borders.length-1)){
            borders[k] =" "+props.borders[k]+".";
        }
        else{
           borders[k] =" "+props.borders[k]+" "+",";
        }
    
         
    let languages=[];
    for(var i=0 ; i<props.languages.length ; i++)
          if(i===(props.languages.length-1)){
            languages[i] =" "+props.languages[i].name+".";
          }
          else{
           languages[i] =" "+props.languages[i].name+" "+",";
          }


    
    return (    
        <div>
            <p className="a1">Name: <span>{name}</span></p>


             <div className="box1">
            <p className="a1">Capital: <span>{capital}</span></p>
            <p className="a1">Flag: <img src={flag} alt="" width="100px"/></p>
            </div>

            
            <p className="a1">Region: <span>{region}</span></p>
            <p className="a1">Subregion: <span>{subregion}</span> </p>
            <p className="a1">Population: <span>{population}</span></p>
            <p className="a1">Borders: <span>{borders}</span></p>
            <p className="a1">Languages: <span>{languages}</span> </p>
            
            
        </div>
    )
}
