document.addEventListener('DOMContentLoaded',function(){
    const txtTitulo=document.getElementById('title');
    const txtDescripcion=document.getElementById('description');
    const btnAgregar=document.getElementById('add');



    btnAgregar.onclick=function(){
        console.log('Titulo: ',txtTitulo.value);
    }
})