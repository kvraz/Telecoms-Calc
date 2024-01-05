//Functions for BE to SNR Converter

//Convert BE to SNR
function convertToSNR(){
    //Getting the BE value in bps/Hz and calculating the SNR in dB
    var be = parseFloat(document.getElementById('BE').value);
    var snr = Math.pow(2, be) - 1;
    var snr_db = 10 * Math.log10(snr);    
    
    if (!isNaN(be)){  //Checking if user input was correct
        //Displaying the result in the SNR Field
        document.getElementById("SNR").value = snr_db.toFixed(3).toString();   

        //Auxilliary code to show the mathematical process of conversion
        var header = "Process of Converting BE to SNR"
        var beDemo = "BE = "+be.toFixed(3)+" bps/Hz";
        var snrDemo = "BE = log2(SNR + 1) => SNR = 2^BE - 1 => SNR = 2^"+be.toFixed(3)+" - 1 => SNR = "+snr.toFixed(3);
        var snrdbDemo = "SNRdb = 10 * log10SNR => SNRdB = 10 * log10("+snr.toFixed(3)+") => SNRdB = "+snr_db.toFixed(3)+" dB";
        changeBeToSNRDiv(header, beDemo, snrDemo, snrdbDemo);   
    }
    else{   //If the user hasn't given a value for the BE he is notified and prompted to give another one    
        let calculationsBeToSNRDiv = document.getElementById("calculationsBeToSNR");
        calculationsBeToSNRDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a value for the Bandwidth Efficiency!";
        calculationsBeToSNRDiv.appendChild(errorMessage);
    }
}

//Convert SNR to BE
function convertToBE(){
    //Getting the SNR value in dB and calculating the BE in bps/Hz
    var snr_db = parseFloat(document.getElementById('SNR').value);
    var snr = Math.pow(10, snr_db/10);
    var be = Math.log2(snr+1);  
     
    if (!isNaN(snr_db)){    //Checking if user input is correct 
        //Displaying the result in the BE field
        document.getElementById("BE").value = be.toFixed(3).toString(); 

        //Auxilliary code to show the mathematical process of conversion
        var header = "Process of Converting SNR to BE"
        var snrdbDemo = "SNRdB = "+snr_db.toFixed(3)+" dB";
        var snrDemo = "SNRdb = 10 * log10(SNR) => SNR = 10^(SNRdB/10) => SNR = 10^("+snr_db.toFixed(3)+"/10) => SNR = "+snr.toFixed(3);
        var beDemo = "BE = log2(SNR + 1) => BE = log2("+snr.toFixed(3)+"+1) => BE =  "+be.toFixed(3)+" bps/Hz";
        changeBeToSNRDiv(header, snrdbDemo, snrDemo, beDemo);  
    }
    else{ //If the user hasn't given a value for the SNR he is notified and prompted to give another one                 
       let calculationsBeToSNRDiv = document.getElementById("calculationsBeToSNR");
       calculationsBeToSNRDiv.innerHTML = ""; 
       let errorMessage = document.createElement("p");
       errorMessage.style.color = "red";
       errorMessage.textContent = "Please give a value for the Signal to Noise Ratio!";
       calculationsBeToSNRDiv.appendChild(errorMessage);
    }  
}

//Show the mathematical process of a conversion
function changeBeToSNRDiv(h, p1, p2, p3) {
    var calculationsBeToSNRDiv = document.getElementById("calculationsBeToSNR");

    // Clear existing content
    calculationsBeToSNRDiv.innerHTML = "";

    //The header will be the type of conversion taking place and the paragraphs the individual operations
    var header = document.createElement("h2");
    header.textContent = h;
    var par1 = document.createElement("p");
    par1.textContent = p1;
    var par2 = document.createElement("p");
    par2.textContent = p2;
    var par3 = document.createElement("p");
    par3.textContent = p3;

    calculationsBeToSNRDiv.appendChild(header);
    calculationsBeToSNRDiv.appendChild(par1);
    calculationsBeToSNRDiv.appendChild(par2);
    calculationsBeToSNRDiv.appendChild(par3);
}

//Clear inputs
function clearBeToSNR(){
    //Clear the two input fields
    document.getElementById('BE').value = "";
    document.getElementById('SNR').value = "";

    //Clear the calculations div 
    document.getElementById("calculationsBeToSNR").innerHTML = "";    
}

/**********************************************************************************/
//Functions for Power Measurment Converter
function convertPW(){
    //Getting the power in Watts and calculating the other units
    var w = parseFloat(document.getElementById("PW").value);
    var mw = w * 1000;
    var dbw = 10 * Math.log10(w);
    var dbm = 10 * Math.log10(w) + 30;
  
    if (!isNaN(w) && w>=0){ //Checking if the user input is correct
        //Displaying the other unit results on their fields
        document.getElementById("PmW").value = mw;
        document.getElementById("PdBW").value = dbw;
        document.getElementById("PdBm").value = dbm;

        //Auxilliary code to show the mathematical process of conversion
        var header = "Converting Power in Watts"
        var wDemo = "PW = "+w+ " watts";
        var mwDemo = "PmW = 1000 * W => PmW = 1000 * "+w+" =>PmW = "+mw+" milliwatts";
        var dbwDemo = "PdBW = 10 * log10(W) => PdBW = 10 * log10("+w+") => PdBW = "+dbw+" dBW"; 
        var dbmDemo =  "PdBm = 10 * log10(W) + 30 => PdBm = 10 * log10("+w+") + 30 => PdBm = "+dbm+" dBm"; 

        changePowerMeasDiv(header, wDemo, mwDemo, dbwDemo, dbmDemo);
    }
    else{   //If the user hasn't given a value for the BE he is notified and prompted to give another one    
        let calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");
        calculationsPowerConvDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a correct value for PW!";
        calculationsPowerConvDiv.appendChild(errorMessage);
    }
}

function convertPmW(){

}

function convertPdBW(){

}

function clearPowerConv(){
    //Clear the four input fields
    document.getElementById("PW").value = "";
    document.getElementById("PmW").value = "";
    document.getElementById("PdBW").value = "";
    document.getElementById("PdBm").value = "";

    //Clear the calculations div 
    document.getElementById("calculationsPowerConv").innerHTML = "";  
}

function changePowerMeasDiv(h, p1, p2, p3, p4){
    var calculationsPowerConvDiv = document.getElementById("calculationsPowerConv");

    // Clear existing content
    calculationsPowerConvDiv.innerHTML = "";

    //The header will be the type of conversion taking place and the paragraphs the individual operations
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
}

