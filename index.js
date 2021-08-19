document.addEventListener('DOMContentLoaded',function(){
    const txtTitulo=document.getElementById('title');
    const txtDescripcion=document.getElementById('description');
    const TDatos=document.getElementById('table');
    const btnAgregar=document.getElementById('add');

    btnAgregar.onclick=function(){
        console.log('Titulo: ',txtTitulo.value);
        console.log('Descripcion: ', txtDescripcion.value);
        //esta es la mas reciente
    }
})