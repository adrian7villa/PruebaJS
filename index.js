document.addEventListener('DOMContentLoaded',function(){
    const txtTitulo=document.getElementById('title');
    const txtDescripcion=document.getElementById('description');
    const TDatos=document.getElementById('table');
    const btnAgregar=document.getElementById('add');

    btnAgregar.onclick=function(){
        console.log('Titulo: ',txtTitulo.value);
        console.log('Descripcion: ', txtDescripcion.value);
        //esta es la mas reciente
        //se agrega nueva linea para prueba1
        //prueb2
        //prueba de remoto con rama prueba 2 clonada
    }
})