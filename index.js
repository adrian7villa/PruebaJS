document.addEventListener('DOMContentLoaded',function(){
    const txtTitulo=document.getElementById('title');
    const txtDescripcion=document.getElementById('description');
    const TDatos=document.getElementById('table');
    const btnAgregar=document.getElementById('add');
    const LAlerta=document.getElementById('alert');


    /*btnAgregar.onclick=function(){
        console.log('Titulo: ',txtTitulo.value);
        console.log('Descripcion: ', txtDescripcion.value);
        
        //esta es la mas reciente
        //se agrega nueva linea para prueba1
        //prueb2
        //prueba de remoto con rama prueba 2 clonada
    }*/

    function addTodo(){
        if(txtTitulo.value==='' || txtDescripcion.value===''){
            //console.error('El titulo y la descripcion es requerido');
            LAlerta.classList.remove('d-none');
            LAlerta.innerText='El titulo y la descripcion son requerido';
            return;
        }
        
        LAlerta.classList.add('d-none');
    }

    btnAgregar.onclick=addTodo;


});