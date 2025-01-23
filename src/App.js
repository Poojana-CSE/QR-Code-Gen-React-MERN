import React, { useState } from 'react'
import './App.css';
import Img from './QR.jpg'
const App = () => {
  // Parameters
  const [image,setimage] = useState(Img);
  const [load,setload] = useState(false);
  const [qrdata,setqrdata] = useState("");
  const [size,setsize] = useState(150);

  function Qr_gen(){
    try{
      setload(true);
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${size}x${size}`;
      setimage(url);
    }
    catch(error){
      console.log("Error in Generating QR Code");
    }
    finally{
      setload(false);
    }
  }

  return (
    <div className='qrcode'>
    <div className='heading'>
      <h1>QR Code Gendrator</h1>
    </div>
    <div className='img'>
      {load && <p>please wait</p>} {/* conditional renderring */}
      <img src={image} alt='qr-box' className='QR-img'></img>
    </div>
    <div className='input'>
      <label className='input-label'>Data for QR-Code</label>
      <input type="text" id="data-input" placeholder='Enter data for Qr code' onChange={(e)=>setqrdata(e.target.value)}></input>
      <br></br>
      <br></br>
      <br></br>
      <label className='input-label'>ImageSize(eg:150)</label>
      <input type="text" id="sizeinput" placeholder='Enter image size' onChange={(e)=>setsize(e.target.value)}></input>
    </div>
    <div className='btn'> 
      <button className="gen-btn" onClick={Qr_gen}>Gendrate QR-Code</button>
      <button className='download'         onClick={()=>{
        const link = document.createElement("a"); link.href=Img; link.download = "QR Code.jpg"; link.click();}}>Download QR Code</button>
    </div>
  </div>
  )
}

export default App
