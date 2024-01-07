//Functions for SE to SNR Converter

//Convert SE to SNR
function convertToSNR(){
    //Getting the SE value in bps/Hz and calculating the SNR in dB
    var SE = parseFloat(document.getElementById('SE').value);
    var snr = Math.pow(2, SE) - 1;
    var snr_db = 10 * Math.log10(snr);    
    
    if (!isNaN(SE)){  //Checking if user input was correct
        //Displaying the result in the SNR Field
        document.getElementById("SNR").value = snr_db.toFixed(2).toString();   

        //Auxilliary code to show the mathematical process of conversion
        var header = "Process of Calculating SNR from SE"
        var SEDemo = "SE = "+SE.toFixed(2)+" bps/Hz";
        var snrDemo = "SE = log2(SNR + 1) => SNR = 2^SE - 1 => SNR = 2^"+SE.toFixed(2)+" - 1 => SNR = "+snr.toFixed(2);
        var snrdbDemo = "SNRdb = 10 * log10(SNR) => SNRdB = 10 * log10("+snr.toFixed(2)+") => SNRdB = "+snr_db.toFixed(2)+" dB";
        changeSEToSNRDiv(header, SEDemo, snrDemo, snrdbDemo);   
    }
    else{   //If the user hasn't given a value for the SE he is notified and prompted to give another one    
        let calculationsSEToSNRDiv = document.getElementById("calculationsSEToSNR");
        calculationsSEToSNRDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a value for the Bandwidth Efficiency!";
        calculationsSEToSNRDiv.appendChild(errorMessage);
    }
}

//Convert SNR to SE
function convertToSE(){
    //Getting the SNR value in dB and calculating the SE in bps/Hz
    var snr_db = parseFloat(document.getElementById('SNR').value);
    var snr = Math.pow(10, snr_db/10);
    var SE = Math.log2(snr+1);  
     
    if (!isNaN(snr_db)){    //Checking if user input is correct 
        //Displaying the result in the SE field
        document.getElementById("SE").value = SE.toFixed(2).toString(); 

        //Auxilliary code to show the mathematical process of conversion
        var header = "Process of Calculating SE from SNR"
        var snrdbDemo = "SNRdB = "+snr_db.toFixed(2)+" dB";
        var snrDemo = "SNRdb = 10 * log10(SNR) => SNR = 10^(SNRdB/10) => SNR = 10^("+snr_db.toFixed(2)+"/10) => SNR = "+snr.toFixed(2);
        var SEDemo = "SE = log2(SNR + 1) => SE = log2("+snr.toFixed(2)+"+1) => SE =  "+SE.toFixed(2)+" bps/Hz";
        changeSEToSNRDiv(header, snrdbDemo, snrDemo, SEDemo);  
    }
    else{ //If the user hasn't given a value for the SNR he is notified and prompted to give another one                 
       let calculationsSEToSNRDiv = document.getElementById("calculationsSEToSNR");
       calculationsSEToSNRDiv.innerHTML = ""; 
       let errorMessage = document.createElement("p");
       errorMessage.style.color = "red";
       errorMessage.textContent = "Please give a value for the Signal to Noise Ratio!";
       calculationsSEToSNRDiv.appendChild(errorMessage);
    }  
}

//Show the mathematical process of a conversion
function changeSEToSNRDiv(h, p1, p2, p3) {
    var calculationsSEToSNRDiv = document.getElementById("calculationsSEToSNR");

    // Clear existing content
    calculationsSEToSNRDiv.innerHTML = "";

    //The header will SE the type of conversion taking place and the paragraphs the individual operations
    var header = document.createElement("h2");
    header.textContent = h;
    var par1 = document.createElement("p");
    par1.textContent = p1;
    var par2 = document.createElement("p");
    par2.textContent = p2;
    var par3 = document.createElement("p");
    par3.textContent = p3;

    var explantion = document.createElement("h4");
    explantion.textContent = "Shannon's formula: C = B * log2(1 + SNR), C in bps, B in Hz and SE = C/B = log2(1 + SNR) in bps/Hz";

    calculationsSEToSNRDiv.appendChild(header);
    calculationsSEToSNRDiv.appendChild(explantion);
    calculationsSEToSNRDiv.appendChild(par1);
    calculationsSEToSNRDiv.appendChild(par2);
    calculationsSEToSNRDiv.appendChild(par3);

    calculationsSEToSNRDiv.style.backgroundColor = "#333";  
}

//Clear inputs
function clearSEToSNR(){
    //Clear the two input fields
    document.getElementById('SE').value = "";
    document.getElementById('SNR').value = "";

    //Clear the calculations div  
    document.getElementById("calculationsSEToSNR").innerHTML = ""; 
    document.getElementById("calculationsSEToSNR").style.backgroundColor = "";     
}

/**********************************************************************************/
//Functions for Power Measurment Converter

//Convert watts to other units
function convertPW(){
    //Getting the power in Watts and calculating the other units
    var w = parseFloat(document.getElementById("PW").value);
    var mw = w * 1000;
    var dbw = 10 * Math.log10(w);
    var dbm = 10 * Math.log10(w) + 30;
  
    if (!isNaN(w) && w>=0){ //Checking if the user input is correct
        //Displaying the other unit results on their fields
        document.getElementById("PmW").value = mw.toFixed(2).toString();
        document.getElementById("PdBW").value = dbw.toFixed(2).toString();
        document.getElementById("PdBm").value = dbm.toFixed(2).toString();

        //Auxilliary code to show the mathematical process of conversion
        var header = "Converting Power in Watts"
        var wDemo = "PW = "+w.toFixed(2)+ " watts";
        var mwDemo = "PmW = 1000 * PW => PmW = 1000 * "+w.toFixed(2)+" =>PmW = "+mw.toFixed(2)+" milliwatts";
        var dbwDemo = "PdBW = 10 * log10(PW) => PdBW = 10 * log10("+w.toFixed(2)+") => PdBW = "+dbw.toFixed(2)+" dBW"; 
        var dbmDemo =  "PdBm = 10 * log10(PW) + 30 => PdBm = 10 * log10("+w.toFixed(2)+") + 30 => PdBm = "+dbm.toFixed(2)+" dBm"; 

        changePowerMeasDiv(header, wDemo, mwDemo, dbwDemo, dbmDemo);
    }
    else{   //If the user hasn't given a value for the SE he is notified and prompted to give another one    
        let calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");
        calculationsPowerConvDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a correct value for PW!";
        calculationsPowerConvDiv.appendChild(errorMessage);
    }
}

//Convert milliwatts to other units
function convertPmW(){
    //Getting the power in Milliwatts and calculating the other units
    var mw = parseFloat(document.getElementById("PmW").value);
    var w = mw / 1000;
    var dbw = 10 * Math.log10(w);
    var dbm = 10 * Math.log10(w) + 30;
  
    if (!isNaN(mw) && mw>=0){ //Checking if the user input is correct
        //Displaying the other unit results on their fields
        document.getElementById("PW").value = w.toFixed(2).toString();
        document.getElementById("PdBW").value = dbw.toFixed(2).toString();
        document.getElementById("PdBm").value = dbm.toFixed(2).toString();

        //Auxilliary code to show the mathematical process of conversion
        var header = "Converting Power in Milliwatts"
        var mwDemo = "PmW = "+mw.toFixed(2)+ " milliwatts";
        var wDemo = "PW = PmW / 1000 => PW = "+mw.toFixed(2)+" / 1000 =>PW = "+w.toFixed(2)+" watts";
        var dbwDemo = "PdBW = 10 * log10(PW) => PdBW = 10 * log10("+w.toFixed(2)+") => PdBW = "+dbw.toFixed(2)+" dBW"; 
        var dbmDemo =  "PdBm = 10 * log10(PW) + 30 => PdBm = 10 * log10("+w.toFixed(2)+") + 30 => PdBm = "+dbm.toFixed(2)+" dBm"; 

        changePowerMeasDiv(header, mwDemo, wDemo, dbwDemo, dbmDemo);
    }
    else{   //If the user hasn't given a value for the SE he is notified and prompted to give another one    
        let calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");
        calculationsPowerConvDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a correct value for PmW!";
        calculationsPowerConvDiv.appendChild(errorMessage);
    }
}

//Convert dBW to other units
function convertPdBW(){
    //Getting the power in dbW and calculating the other units    
    var dbw = parseFloat(document.getElementById("PdBW").value);
    var w = Math.pow(10, dbw/10);
    var mw = w * 1000;
    var dbm = dbw + 30;
  
    if (!isNaN(dbw)){ //Checking if the user input is correct
        //Displaying the other unit results on their fields
        document.getElementById("PW").value = w.toFixed(2).toString();
        document.getElementById("PmW").value = mw.toFixed(2).toString();
        document.getElementById("PdBm").value = dbm.toFixed(2).toString();

        //Auxilliary code to show the mathematical process of conversion
        var header = "Converting Power in Decibels Relative to One Watt"
        var dbwDemo =  "PdBW = "+dbw.toFixed(2)+ " dBW"; 
        var wDemo = "PdBW = 10 * log10(PW) => PW = 10 ^ (PdBW / 10) => PW = 10 ^ ("+dbw.toFixed(2)+" / 10) => PW = "+w.toFixed(2)+" watts";
        var mwDemo = "PmW = 1000 * PW => PmW = 1000 * "+w.toFixed(2)+" =>PmW = "+mw.toFixed(2)+" milliwatts";              
        var dbmDemo =  "PdBm = 10 * log10(PW) + 30 => PdBm = PdBW + 30 => PdBm = "+dbw.toFixed(2)+" + 30 => PdBm = "+dbm.toFixed(2)+" dBm"; 

        changePowerMeasDiv(header, dbwDemo, wDemo, mwDemo, dbmDemo);
    }
    else{   //If the user hasn't given a value for the SE he is notified and prompted to give another one    
        let calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");
        calculationsPowerConvDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a correct value for PdBW!";
        calculationsPowerConvDiv.appendChild(errorMessage);
    }
}

//Convert dBm to other units
function convertPdBm(){
    //Getting the power in dbm and calculating the other units    
    var dbm = parseFloat(document.getElementById("PdBm").value);
    var w = Math.pow(10, (dbm-30)/10);
    var mw = w * 1000;
    var dbw = dbm - 30;
  
    if (!isNaN(dbm)){ //Checking if the user input is correct
        //Displaying the other unit results on their fields
        document.getElementById("PW").value = w.toFixed(2).toString();
        document.getElementById("PmW").value = mw.toFixed(2).toString();
        document.getElementById("PdBW").value = dbw.toFixed(2).toString();

        //Auxilliary code to show the mathematical process of conversion
        var header = "Converting Power in Decibels Relative to One Milliwatt"
        var dbmDemo = "PdBm = "+dbm.toFixed(2)+ " dBm"
        var wDemo = "PdBm = 10 * log10(PW) + 30 => PW = 10 ^ [(PdBm - 30) / 10] => PW = 10 ^ [("+dbm.toFixed(2)+" - 30) / 10] => PW = "+w.toFixed(2)+" watts";       
        var mwDemo = "PmW = 1000 * PW => PmW = 1000 * "+w.toFixed(2)+" =>PmW = "+mw.toFixed(2)+" milliwatts";              
        var dbwDemo =  "PdBm = 10 * log10(PW) + 30 => PdBm = PdBW + 30 => PdBW = "+dbm.toFixed(2)+" - 30 => PdBW = "+dbw.toFixed(2)+" dBW"; 

        changePowerMeasDiv(header, dbmDemo, wDemo, mwDemo, dbwDemo);
    }
    else{   //If the user hasn't given a value for the SE he is notified and prompted to give another one    
        let calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");
        calculationsPowerConvDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a correct value for PdBW!";
        calculationsPowerConvDiv.appendChild(errorMessage);
    }
}

//Show the mathematical process of a conversion
function changePowerMeasDiv(h, p1, p2, p3, p4){
    var calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");

    // Clear existing content
    calculationsPowerConvDiv.innerHTML = "";

    //The header will SE the type of conversion taking place and the paragraphs the individual operations
    var header = document.createElement("h2");
    header.textContent = h;
    var par1 = document.createElement("p");
    par1.textContent = p1;
    var par2 = document.createElement("p");
    par2.textContent = p2;
    var par3 = document.createElement("p");
    par3.textContent = p3;
    var par4 = document.createElement("p");
    par4.textContent = p4;

    calculationsPowerConvDiv.appendChild(header);
    calculationsPowerConvDiv.appendChild(par1);
    calculationsPowerConvDiv.appendChild(par2);
    calculationsPowerConvDiv.appendChild(par3);
    calculationsPowerConvDiv.appendChild(par4);

    calculationsPowerConvDiv.style.backgroundColor = "#333";
}

//Clear inputs
function clearPowerConv(){
    //Clear the four input fields
    document.getElementById("PW").value = "";
    document.getElementById("PmW").value = "";
    document.getElementById("PdBW").value = "";
    document.getElementById("PdBm").value = "";

    //Clear the calculations div 
    document.getElementById("calculationsPowerConv").innerHTML = "";
    document.getElementById("calculationsPowerConv").style.backgroundColor = ""; 
}

/**********************************************************************************/
//Functions to Calculate SE Limit
function calculateSeLim(){
    //Getting value of EbN0 in dB
    var EbN0_db = parseFloat(document.getElementById('EbN0').value);

    if (!isNaN(EbN0_db)){ //checking if the user input is correct
        var EbN0 = Math.pow(10, EbN0_db/10);
        var SE = 0.1;

        while (true){
            if(SE <= Math.log2(1 + (EbN0 * SE)))
                SE+=0.1;
            else{
                SE-=0.1;                
                break;
            }
        }

        //Auxialliary code to show the process of calculation
        let calculationsSeLimDiv = document.getElementById("calculationsSeLim");
        calculationsSeLimDiv.innerHTML = ""; 
        var par1 = document.createElement("p");
        par1.textContent = "EbN0dB = 10 * log10(EbN0) => EbN0 = 10 ^ (EbN0dB / 10) => EbN0 = 10 ^ ("+EbN0_db.toFixed(2)+" / 10) => EbN0 = "+EbN0.toFixed(2);
        var par2 = document.createElement("p");
        par2.textContent = "SE <= log2(1 + EbN0 * SE) => SE <= log2(1 + "+EbN0.toFixed(2)+" * SE)";
        var par3 = document.createElement("p");
        par3.textContent = "The largest SE value that meets this condition  "+SE.toFixed(2)+" bps/Hz";

        calculationsSeLimDiv.appendChild(par1);
        calculationsSeLimDiv.appendChild(par2);
        calculationsSeLimDiv.appendChild(par3);

        calculationsSeLimDiv.style.backgroundColor = "#333";

    }
    else{
        //If the user hasn't given a value for the EbN0 he is notified and prompted to give another one 
        let calculationsSeLimDiv = document.getElementById("calculationsSeLim");         
        calculationsSeLimDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a value for the Eb/N0!";
        calculationsSeLimDiv.appendChild(errorMessage);
    }
}

function clearSeLim(){
    document.getElementById('EbN0').value = "";
    document.getElementById("calculationsSeLim").innerHTML = "";
    document.getElementById("calculationsSeLim").style.backgroundColor = "";
}

/**********************************************************************************/
//Functions to calculate Signal Speed
function calculateSignalSpeed(){
    var iP = parseFloat(document.getElementById('initP').value);
    var fP = parseFloat(document.getElementById('finalP').value);
    var d = parseFloat(document.getElementById('d').value);
    var sl = parseFloat(document.getElementById('sl').value);
    var t = parseFloat(document.getElementById('t').value);

    if(!isNaN(iP) && !isNaN(fP) && !isNaN(d) && !isNaN(sl) && !isNaN(t) && (sl>=3) && (sl<=5) && (d>=0) && (t>=0)) {
        var d1 = Math.pow(10,( Math.log10(d) + ( Math.log10(iP/fP) / sl )  ) ) - d ;
        var speed = d1 /t;
       
        let calculationsSignalSpeedDiv = document.getElementById("calculationsSignalSpeed");
        calculationsSignalSpeedDiv.innerHTML = ""; 

        var header = document.createElement("h2");
        header.textContent = "Reviewing Calculation";
        var parameters = document.createElement("p");
        parameters.textContent = "ip = "+iP+", fp = "+fP+", d = "+d+" m, sl = "+sl+", t = "+t+" s";
        var dDemo = document.createElement("p");
        dDemo.textContent = "d' = 10 ^ [log10(d) + log10(ip/fp) / sl] - d => d' = 10 ^ [log10("+d.toFixed(2)+") + log10("+iP.toFixed(2)+"/"+fP.toFixed(2)+") / "+sl.toFixed(2)+"] - "+d.toFixed(2)+" => d' = "+d1.toFixed(2)+" m";
        var sDemo = document.createElement("p");
        sDemo.textContent = "u = d' / t => u = "+d1.toFixed(2)+" / "+t+" => u = "+speed.toFixed(2)+" m/s"
        
        calculationsSignalSpeedDiv.append(header);
        calculationsSignalSpeedDiv.append(parameters);
        calculationsSignalSpeedDiv.append(dDemo);
        calculationsSignalSpeedDiv.append(sDemo);  
        
        calculationsSignalSpeedDiv.style.backgroundColor = "#333";
    }
    else{
        //If the user hasn't given a value for the EbN0 he is notified and prompted to give another one  
        let calculationsSignalSpeedDiv = document.getElementById("calculationsSignalSpeed");        
        calculationsSignalSpeedDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please make sure you have inserted correct values!";
        calculationsSignalSpeedDiv.appendChild(errorMessage);
    }

}

function clearSignalSpeed(){
    document.getElementById('initP').value = "";
    document.getElementById('finalP').value = "";
    document.getElementById('d').value = "";
    document.getElementById('sl').value = "";
    document.getElementById('t').value = "";
    document.getElementById("calculationsSignalSpeed").innerHTML = "";
    document.getElementById("calculationsSignalSpeed").style.backgroundColor = "";
}