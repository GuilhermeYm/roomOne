const input = document.getElementById('key');
const button = document.querySelector('button');

button.addEventListener('click', function(event) { 
    event.preventDefault(); // Prevent form submission
    const key = input.value.trim(); // Get the value of the input field

    if (key === '06/23/2025') { // Check if the key is correct
        alert('https://drive.google.com/drive/folders/1dsaRtJqXm4-rhTIchXi_gxvKIkDaS8rn?usp=sharing') // Redirect to the next room
    } else {
        alert('Senha incorreta! Tente novamente.'); // Alert for incorrect password
    }
});