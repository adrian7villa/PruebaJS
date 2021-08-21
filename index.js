document.addEventListener('DOMContentLoaded',function(){
    const txtTitulo=document.getElementById('title');
    const txtDescripcion=document.getElementById('description');
    const TDatos=document.getElementById('table');
    const btnAgregar=document.getElementById('add');
    const LAlerta=document.getElementById('alert');
    let id=1;

    function removeTodo(id){
        //console.log(id);
        document.getElementById(id).remove();
    }


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
        const Fila=TDatos.insertRow();
        Fila.setAttribute('id',id++)
        Fila.innerHTML=`
            <td>${txtTitulo.value}</td>
            <td>${txtDescripcion.value}</td>
            <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
            `;

            const btnBorrar=document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','mb-1','ml-1');
            btnBorrar.innerHTML=`<i class="fa fa-trash"></i>`;
            btnBorrar.onclick=function(e){
                //console.log(e.target.parentNode);
                removeTodo(Fila.getAttribute('id'));
            }
            Fila.children[3].appendChild(btnBorrar);
    }

    btnAgregar.onclick=addTodo;



});