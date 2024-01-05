//Functions for BE to SNR Converter

//Convert BE to SNR
function convertToSNR(){
    //Getting the BE value in bps/Hz and calculating the SNR in dB
    var be = parseFloat(document.getElementById('BE').value);
    var snr = Math.pow(2, be) - 1;
    var snr_db = 10 * Math.log10(snr);

    document.getElementById("SNR").value = snr_db.toFixed(2).toString();    //Displaying the result in the SNR Field

    //Auxilliary code to show the mathematical process of conversion
    if (!isNaN(be)){  
        var header = "Process of Converting BE to SNR"
        var beDemo = "BE = "+be.toFixed(2)+" bps/Hz";
        var snrDemo = "BE = log2(SNR + 1) => SNR = 2^BE - 1 => SNR = 2^"+be.toFixed(2)+" - 1 => SNR = "+snr.toFixed(2);
        var snrdbDemo = "SNR(db) = 10 * log10(SNR) => SNR(dB) = 10 * log10("+snr.toFixed(2)+") => SNR(dB) = "+snr_db.toFixed(2)+" dB";
        changeBeToSNRDiv(header, beDemo, snrDemo, snrdbDemo);   
    }
    else{   //If the user hasn't given a value for the BE he is notified and prompted to give another one    
        let calculationsBeToSNRDiv = document.getElementById("calculationsBeToSNR");
        calculationsBeToSNRDiv.innerHTML = ""; 
        let errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please give a value for the Bandwidth Efficiency";
        calculationsBeToSNRDiv.appendChild(errorMessage);
    }
}

//Convert SNR to BE
function convertToBE(){
    //Getting the SNR value in dB and calculating the BE in bps/Hz
    var snr_db = parseFloat(document.getElementById('SNR').value);
    var snr = Math.pow(10, snr_db/10);
    var be = Math.log2(snr+1);

    document.getElementById("BE").value = be.toFixed(2).toString(); //Displaying the result in the BE field

    //Auxilliary code to show the mathematical process of conversion 
    if (!isNaN(snr_db)){      
        var header = "Process of Converting SNR to BE"
        var snrdbDemo = "SNR(dB) = "+snr_db.toFixed(2)+" dB";
        var snrDemo = "SNR(db) = 10 * log10(SNR) => SNR = 10^(SNR(dB)/10) => SNR = 10^("+snr_db.toFixed(2)+"/10) => SNR = "+snr.toFixed(2);
        var beDemo = "BE = log2(SNR + 1) => BE = log2("+snr.toFixed(2)+"+1) => BE =  "+be.toFixed(2)+" bps/Hz";
        changeBeToSNRDiv(header, snrdbDemo, snrDemo, beDemo);  
    }
    else{ //If the user hasn't given a value for the SNR he is notified and prompted to give another one                 
       let calculationsBeToSNRDiv = document.getElementById("calculationsBeToSNR");
       calculationsBeToSNRDiv.innerHTML = ""; 
       let errorMessage = document.createElement("p");
       errorMessage.style.color = "red";
       errorMessage.textContent = "Please give a value for the Signal to Noise Ratio";
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