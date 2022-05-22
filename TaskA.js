import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from 'react';
  
function App() {
    const [advance,setFirst]=useState(true);
    const [Gate,setSecond]=useState(true);
    const [Jam,setThird]=useState(true);
    const [Cat,setFourth]=useState(true);

    // state={
    //   Coursenames:{
    //     BTBSDoubleMajor_All:false,
    //     BTBSDoubleMajor_AE:false,
    //     BTBSDoubleMajor_BSBE:false,
    //     BTBSDoubleMajor_CE:false,

    //   }
    // }



    const handleChange=(data)=>{
      if(data == "advance")
      {
      if(advance==true){
        console.log(data,"Our Value")
      }
      }
      if (data == "Gate")
      {  
      if(Gate==true){
        console.log(data,"Our Value")
      }
    }
    if(data == "Jam")
    {
    if(Jam==true){
      console.log(data,"Our Value")
    }
    }
    if (data == "Cat")
    {  
    if(Cat==true){
      console.log(data,"Our Value")
    }
  }

    }

    return (
      <div>
        <div class="container">
        <div class="row mt-3">
          <div class='col-md-12'><h6>STEP 2/5 (Eligibility Matrix)</h6></div>
        </div>

        <div class="row">
          <div class="col-md-4 text-center"><input type="radio" name="same" value={advance} onChange={()=>handleChange("advance")} class="form-check-input larger"/></div>
          <div class="col-md-8 text-right"> SELECT ALL BRANCHES AND PROGRAMMES COMING FROM JEE ADVANCE</div>
        </div>


        <div class="row">
          <div class="col-md-4 text-center"><input type="radio" name="same" value={Gate} onChange={()=>handleChange("Gate")} class="form-check-input larger"/></div>
          <div class="col-md-8 text-right"> SELECT ALL BRANCHES AND PROGRAMMES COMING FROM GATE  </div>
        </div>

        <div class="row">
          <div class="col-md-4 text-center"><input type="radio" name="same" value={Jam} onChange={()=>handleChange("Jam")} class="form-check-input larger"/></div>
          <div class="col-md-8 text-right"> SELECT ALL BRANCHES AND PROGRAMMES COMING FROM JAM  </div>
        </div>


        <div class="row">
          <div class="col-md-4 text-center"><input type="radio" name="same" value={Cat} onChange={()=>handleChange("Cat")} class="form-check-input larger"/></div>
          <div class="col-md-8 text-right"> SELECT ALL BRANCHES AND PROGRAMMES COMING FROM CAT </div>
        </div>

        </div>

        <div class="container mt-3">
            <table class="table table-bordered my-style">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>All</th>
                  <th>AE</th>
                  <th>BSBE</th>
                  <th>CE</th>
                  <th>CHE</th>
                  <th>CSE</th>
                  <th>EE</th>
                  <th>ES</th>
                  <th>ES</th>
                  <th>ME</th>
                  <th>MSE</th>
                  <th>PHY</th>
                  <th>CHM</th>
                  <th>MTH</th>
                  <th>ECO</th>
                  <th>DES</th>
                  <th>IME</th>
                  <th>CGS</th>
                  <th>HSS</th>
                  <th>EEM</th>
                  <th>MSP</th>
                  <th>NET</th>
                  <th>PSE</th>
                  <th>STATS</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>BT/BS/Double Major</td>
                  <td><input type="checkbox" class="larger1" /*value={BTBSDoubleMajor_All} onChange={()=>handleChange("BTBSDoubleMajor_All")}*//></td>
                  <td><input type="checkbox" class="larger1" /*value={BTBSDoubleMajor_AE} onChange={()=>handleChange("BTBSDoubleMajor_AE")}*//></td>
                  <td><input type="checkbox" class="larger1" /*value={BTBSDoubleMajor_BSBE} onChange={()=>handleChange("BTBSDoubleMajor_BSBE")}*//></td>
                  <td><input type="checkbox" class="larger1" /*value={BTBSDoubleMajor_CE} onChange={()=>handleChange("BTBSDoubleMajor_CE")}*//></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              
                <tr>
                <td>MT/MSC/MS(Research)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                <td>Dual</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                
                <tr>
                <td>MDes</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                
                <tr>
                <td>MBA</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                
                <tr>
                <td>Phd</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </table>
         </div>

      <div class="container">
      <div class="row mt-3 font_size">
        <div class="col-md-4">
          <p><b>AE AEROSPACE ENGINEERING</b></p>
          <p><b>CHE CHEMICAL ENGINEERING</b></p>
          <p><b>ES EARTH SCIENCE</b></p>
          <p><b>PHY PHYSICS</b></p>
          <p><b>ECO ECONOMICS</b></p>
          <p><b>CGS COGNITIVE SCIENCE</b></p>
          <p><b>MSP MATERIAL SCIENCE PROGRAM</b></p>
          <p><b>STATS STATISTICS</b></p>
        </div>
        <div class="col-md-4">
        <p><b>BSBE BIOLOGICAL SCIENCES AND BIOENGINEERING</b></p>
        <p><b>CSE COMPUTER SCIENCE AND ENGINEERING</b></p>
        <p><b>ME MECHINCAL ENGINEERING</b></p>
        <p><b>CHM CHEMISTRY</b></p>
        <p><b>DES DESIGN PROGRAM</b></p>
        <p><b>HSS HUMANITIES AND SOCIAL SCIENCES</b></p>
        <p><b>NET NUCLEAR ENGINEERING AND TECGHNOLOGY</b></p>
        </div>
        <div class="col-md-4">
        <p><b>CE CIVIL ENGINEERING</b></p>
        <p><b>EE ELECTRICAL ENGINEERING</b></p>
        <p><b>MSE MATERIAL SCIENCE AND ENGINEERING</b></p>
        <p><b>MTH MATHEMATICS AND SCIENTIFIC COMPUTING</b></p>
        <p><b>IME INDUSTRIAL MANAGEMENT AND ENGINEERING</b></p>
        <p><b>EEM ENVIRONMENTAL ENGINEERING AND MANAGEMENT</b></p>
        <p><b>PSE PHOTONICS SCIENCE AND ENGINEERING</b></p>
        </div>
      </div>
      </div>

      <div class="container">
      <div class="row mt-3 font_size">
      <div class="col-md-12"><b>FOR MORE DETAILS ABOUT ACADEMIC PROGRAMMES, CLICK HERE.</b></div>
      </div>
      </div>
      
      
      <div class="container">
      <div class="row mt-3">
      <div class="col-md-6"><button type="button" /*ssonClick={()=>setPrint(true)}*/ class="btn btn-success btn-lg my-btn">Next</button></div>
      <div class="col-md-6"><button type="button" class="btn btn-danger btn-lg my-btn">Reset</button></div>
      </div>
      </div>

      <div class="container">
        <div class = "row mb-5"></div>
      </div>

      </div>
    );
}

export default App;
