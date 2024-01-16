import './FormComponents.css'
import React, { useState } from 'react';

function Formcomponents(props) {
 
    const [obj, setObj] = useState(
        { nev: "", szulev: 2000 }
    );

    const valtozasKezeles = (e) => {
        let sv = { ...obj };
        sv[e.target.id] = e.target.value;
        setObj(sv);
    }
    const adatkuld=(event)=>{
        event.preventDefault()
        console.log(obj)
        props.adatkuld(obj)


    }

   
    return (
        <div className="Formcomponents">
            <form onSubmit={adatkuld}>
                <div>
                    <label htmlFor="fname">Név:</label>
                    <input 
                        type="text" 
                        id="nev" 
                        name="name" 
                        value={obj.nev}
                        placeholder='Név'
                        onChange={valtozasKezeles}
                    />
                </div>
                <div>
                    <label htmlFor="lname">Születési év:</label>
                    <input 
                        type="number"
                        id="szulev"
                        name="szulev"
                        value={obj.szulev}
                        onChange={valtozasKezeles}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Formcomponents;
