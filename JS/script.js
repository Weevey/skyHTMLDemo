'use strict'

function myFunction() {
    document.getElementById('change').src='/IMAGES/sky.jpeg';
    } 
function revert() {
    document.getElementById('change').src='/IMAGES/mrew.png';
    }

function buttpress() {
    if (document.getElementById('name').innerHTML == 'Steve') {
        console.log('its Steve');
        document.getElementById('name').innerHTML = 'Ayres';
        document.getElementById('butt').innerHTML = 'Change back to Steve';

    } else {
        console.log('its not steve');
        document.getElementById('name').innerHTML = 'Steve';
        document.getElementById('butt').innerHTML = 'Change to Ayres again';
    } 
}

