var res=[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
  ];


var listaC = document.getElementById("lista"); //Se llama al id donde guardare la lista.
res.forEach(function(el){
listaC.innerHTML += "<li>"+"<b>" + "Tarea: " +"</b>" +el.title +"</li><br>";
}); // Genero una función con forEach para poder recorrer todo el arreglo de objetos. Generando una lista de las tareas ingresadas.Y utilizo el innerHTML para que se imprima

function nuevaLista(){
  var res1=document.getElementById("tarea").value; //Me entrega el valor ingresado por el usuario.
  listaC.innerHTML+="<li>"+"<b>" +"Tarea: " +"</b>" + res1+ "</li><br>";
}; // Se realiza una functión con el valor ingresado del usuario y se genera una lista con los datos.Y utilizo el innerHTML para que se imprima, cuando se ocupe el boton "ingresar".