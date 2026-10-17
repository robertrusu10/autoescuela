document.addEventListener('DOMContentLoaded', () => {

    // 1. DESPLAZAMIENTO SUAVE PARA LOS ENLACES DEL MENÚ
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');
    
    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el salto brusco por defecto
            
            const destinoId = this.getAttribute('href');
            if (destinoId === '#') return;
            
            const elementoDestino = document.querySelector(destinoId);
            
            if (elementoDestino) {
                // Hace scroll de forma suave hasta la sección
                elementoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. SIMULACIÓN DE FORMULARIOS (Contacto y Aula Virtual)
    const formularios = document.querySelectorAll('form');
    
    formularios.forEach(formulario => {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página recargue al enviar
            
            const botonSubmit = formulario.querySelector('button[type="submit"]');
            const textoOriginal = botonSubmit.textContent;
            
            // Efecto visual de carga/éxito en el botón
            botonSubmit.textContent = '¡Procesando...!';
            
            setTimeout(() => {
                botonSubmit.textContent = '¡Enviado con éxito! ✅';
                botonSubmit.style.backgroundColor = '#4CAF50'; // Verde de éxito
                botonSubmit.style.color = '#ffffff';
                botonSubmit.style.border = 'none';
                
                // Mensaje animando a conseguir el apto sin fallos si es el aula virtual
                if(document.title.includes('Aula Virtual')) {
                    alert('¡Acceso concedido! A por ese teórico con 0 fallos. 🚗💨');
                }
            }, 800);

            // Restaurar el formulario a su estado original después de 3 segundos
            setTimeout(() => {
                botonSubmit.textContent = textoOriginal;
                botonSubmit.style.backgroundColor = '#ffcc00';
                botonSubmit.style.color = '#121212';
                formulario.reset(); // Limpia los campos del formulario
            }, 3500);
        });
    });

});