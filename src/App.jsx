import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

const[amount,setAmount]=useState(0)
const [discount,setDiscount]=useState(0)
const [saving,setSavings]=useState(0)
const [final,setFinal]=useState(0)

console.log(amount);
console.log(discount);

const calculate=(e)=>{
  const output=amount*(discount/100);
  console.log(output);
  setFinal(output)
  const savings=amount-output;
  console.log(savings);
  setSavings(savings)
}

const reset=(e)=>{
  setAmount(0);
  setDiscount(0);
  setFinal(0);
  setSavings(0);
}



  return (
    <div className="App">
      <div className="row">

        <div className=" col-6">
          <div className="img">
         <img src="https://cdn.dribbble.com/users/470545/screenshots/3471475/calculater.gif "style={{width:'650px',height:'500px',borderRadius:'30px'}}></img>
        </div>
        </div>
        </div>


      <div className="col-6">
     <div className="container">


      <div className="header">
        <h1>Discount Calculator</h1>
      </div>
      
      


<div className="form">
  <div className="input">
  <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="standard" />
  <br></br>
  <TextField id="outlined-basic" value={discount||""} onChange={(e)=>setDiscount(e.target.value)}  label="Discount" variant="standard" />
  </div>
</div>

<div className="button">
<Button variant="contained" onClick={(e)=>calculate(e)}>Calculate</Button>
<Button variant="outlined"  onClick={(e)=>reset(e)} style={{color:'white'}}>Reset</Button>
</div>

<div className="discount">
        <h2>Amount After Discount:{saving}</h2>
        <br></br>
        <br></br>
        <p>Amount you Saved:{final}</p>
      </div>

     </div>
    </div>
    </div>
    
  );
}

export default App;
