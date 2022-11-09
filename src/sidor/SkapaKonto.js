import React, {useState,setState} from 'react';

import './style.css'
function SkapaKonto() {
    
    const [forNamn, setForNamn] = useState(null);
    const [efterNamn, setEfterNamn] = useState(null);
    const [epost, setEpost] = useState(null);
    const [losenord,setLosenord] = useState(null);
    const [bekraftaLosenord,setBekraftaLosenord] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "forNamn"){
            setForNamn(value);
        }
        if(id === "efterNamn"){
            setEfterNamn(value);
        }
        if(id === "epost"){
            setEpost(value);
        }
        if(id === "losenord"){
            setLosenord(value);
        }
        if(id === "bekraftaLosenod"){
            setBekraftaLosenord(value);
        }

    }

    const handleSubmit  = () => {
        console.log(forNamn,efterNamn,epost,losenord,bekraftaLosenord);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="fornamn">
                    <label className="form__label" for="forNamn">Förnamn</label>
                    <input className="form__input" type="text" value={forNamn} onChange = {(e) => handleInputChange(e)} id="forNamn" placeholder="Förnamn"/>
                </div>
                <div className="efternamn">
                    <label className="form__label" for="lastName">Efternamn</label>
                    <input  type="text" name="" id="lastName" value={efterNamn}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Efternamn"/>
                </div>
                <div className="epost">
                    <label className="form__label" for="epost">E-post</label>
                    <input  type="epost" id="epost" className="form__input" value={epost} onChange = {(e) => handleInputChange(e)} placeholder="E-postadress"/>
                </div>
                <div className="losenord">
                    <label className="form__label" for="losenord">Lösenord</label>
                    <input className="form__input" type="losenord"  id="losenord" value={losenord} onChange = {(e) => handleInputChange(e)} placeholder="Lösenord"/>
                </div>
                <div className="bekrafta-losenord">
                    <label className="form__label" for="bekraftaLosenord">Bekräfta lösenord</label>
                    <input className="form__input" type="losenord" id="bekraftaLosenord" value={bekraftaLosenord} onChange = {(e) => handleInputChange(e)} placeholder="Bekräfta lösenord"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Skapa konto</button>
            </div>
        </div>
       
    )       
}

export default SkapaKonto;
