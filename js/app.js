const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen){
    modalImagen.addEventListener('show.bs.modal', function(event){   /*show.bs.modal es el key que tiene el evento*/
    //console.log(event.relatedTarget); //CODIGO QUE NOS DICE A QUE LE HEMOS DADO CLICK
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen'); //Como es atributo accedemos a el con getAttribute, name del atributo es data-bs-imagen
    
    //CONSTRUIR LA IMAGEN
    const imagen = document.createElement('IMG');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galeria';
    
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(imagen);
    
    });
    
    
    modalImagen.addEventListener('hidden.bs.modal', function(){
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
