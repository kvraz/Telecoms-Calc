//JS Code for the BE to SNR Converter

//variables for the BE to SNR conversion
const beform = document.getElementById('be-form');
const betosnrDiv = document.getElementById('betosnr');

//event listener for the form submission
beform.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var be = parseFloat(document.getElementById('input1').value);
    var snr = Math.pow(2, be) - 1;
    var snr_db = 10 * Math.log10(snr);
    
    betosnrDiv.textContent = `SNR = ${snr_db.toFixed(2)} dB`;
});

//event listener for the reset button
beform.addEventListener('reset', function(event) {
    betosnrDiv.textContent = '';
});



//variables for the SNR to BE conversion
const snrform = document.getElementById('snr-form');
const snrtobeDiv = document.getElementById('snrtobe');

//event listener for the form submission
snrform.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var snr_db = parseFloat(document.getElementById('input2').value);
    var snr = Math.pow(10, snr_db/10);
    var be = Math.log2(snr+1);
    
    snrtobeDiv.textContent = `BE = ${be.toFixed(2)} bps/Hz`;
});

//event listener for the reset button
snrform.addEventListener('reset', function(event) {
    snrtobeDiv.textContent = '';
});

//---------------------------------------------------------------------------------------------//