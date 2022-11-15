

import React, {useState,setState} from 'react';

import './style.css'
function SkapaKonto() {
    
    const [anvandarNamn, setAnvandarNamn] = useState(null);
    const [losenord,setLosenord] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "anvandarNamn"){
            setAnvandarNamn(value);
        }
       
       
        if(id === "losenord"){
            setLosenord(value);
        }
      

    }

    const handleSubmit  = () => {
        console.log(anvandarNamn, losenord);
    }

    return(  <div className="App">
    <h1>Varmt välkommen till Städafint AB!</h1>

        <div className="form">
            <div className="form-body">
                <div className="fornamn">
                    <label className="form__label" for="forNamn">Användarnamn</label>
                    <input className="form__input" type="text" value={anvandarNamn} onChange = {(e) => handleInputChange(e)} id="anvandarNamn" placeholder="Användarnamn"/>
                </div>               
               
                <div className="losenord">
                    <label className="form__label" for="losenord">Lösenord</label>
                    <input className="form__input" type="losenord"  id="losenord" value={losenord} onChange = {(e) => handleInputChange(e)} placeholder="Lösenord"/>
                </div>
             
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Logga in</button>
            </div>
        </div>
            </div>
       
    )       
}

export default SkapaKonto;