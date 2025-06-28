const input = document.getElementById('key');
const button = document.querySelector('button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

button.addEventListener('click', function(event) { 
    event.preventDefault(); // Prevent form submission
    const key = input.value.trim(); // Get the value of the input field

    // Esconde ambas as mensagens primeiro
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    if (key === '06/23/2025') { // Check if the key is correct
        // Mostra mensagem de sucesso com link
        successMessage.classList.remove('hidden');
        
        // Opcional: Scroll para a mensagem
        successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Limpa o campo de senha
        input.value = '';
        
    } else {
        // Mostra mensagem de erro
        errorMessage.classList.remove('hidden');
        
        // Opcional: Scroll para a mensagem de erro
        errorMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Limpa o campo para nova tentativa
        input.value = '';
    }
});