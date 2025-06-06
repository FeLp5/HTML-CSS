const btn_add = document.querySelector('.add-button');


//     console.log("valor");

// function teste(){
    //     console.log(input_user);
    // }
    
const task_field = document.getElementById("task_field")
    var i = document.createElement("h1")
    var texto = document.createTextNode("ola")

    var count = 0;
btn_add.addEventListener('click', function() {
        // alerta o valor do campo
        const input_user = document.querySelector('#titulo-tarefa')
        var value = input_user.value;
    alert(value);
    localStorage.setItem("name" + count ,value)
    localStorage.getItem("name")
    count++;
    console.log(count)
    // impede o envio do form
    // e.preventDefault();



    task_field.appendChild(texto)

});


