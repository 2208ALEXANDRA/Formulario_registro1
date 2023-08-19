document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
  
    // Obtén los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
  
    // Aquí puedes realizar validaciones adicionales antes de enviar los datos
  
    // Envía los datos a través de AJAX o realiza cualquier otra acción necesaria
  
    // Por ejemplo, muestra un mensaje de éxito
    alert('¡Registro exitoso!');
  
    // Reinicia el formulario
    document.getElementById('registroForm').reset();
  });
  
  