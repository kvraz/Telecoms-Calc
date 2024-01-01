
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

//adding style for result box
betosnrDiv.style.backgroundColor = '#fff';
betosnrDiv.style.border = '4px solid #011f4b';
betosnrDiv.style.borderRadius = '10px';
betosnrDiv.style.width = '100px';
betosnrDiv.style.height = '40px';
betosnrDiv.style.flex = '1';
betosnrDiv.style.marginLeft = '10px';
betosnrDiv.style.display = 'flex';
betosnrDiv.style.alignItems = 'center';
});

//event listener for the reset button
beform.addEventListener('reset', function(event) {
betosnrDiv.textContent = '';

//removing result box
betosnrDiv.style.backgroundColor = '';
betosnrDiv.style.border = '';
betosnrDiv.style.borderRadius = '';
betosnrDiv.style.width = '';
betosnrDiv.style.height = '';
betosnrDiv.style.flex = '';
betosnrDiv.style.marginLeft = '';
betosnrDiv.style.display = '';
betosnrDiv.style.alignItems = '';
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

//adding style for result box
snrtobeDiv.style.backgroundColor = '#fff';
snrtobeDiv.style.border = '4px solid #011f4b';
snrtobeDiv.style.borderRadius = '10px';
snrtobeDiv.style.width = '100px';
snrtobeDiv.style.height = '40px';
snrtobeDiv.style.flex = '1';
snrtobeDiv.style.marginLeft = '10px';
snrtobeDiv.style.display = 'flex';
snrtobeDiv.style.alignItems = 'center';
});

//event listener for the reset button
snrform.addEventListener('reset', function(event) {
snrtobeDiv.textContent = '';

//removing result box
snrtobeDiv.style.backgroundColor = '';
snrtobeDiv.style.border = '';
snrtobeDiv.style.borderRadius = '';
snrtobeDiv.style.width = '';
snrtobeDiv.style.height = '';
snrtobeDiv.style.flex = '';
snrtobeDiv.style.marginLeft = '';
snrtobeDiv.style.display = '';
snrtobeDiv.style.alignItems = '';
});

//---------------------------------------------------------------------------------------------//
