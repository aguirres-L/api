const express = require('express');

const app = express();

const students =[
    {id:1,
     name:"Agus"},
     {id:2,
      name:"Meli"},
      {id:3,
       name:"Milo"}
]


// Creo lo que seria el Home
app.get('/',(req,res)=>{

    res.send('Node JS api Cara de verga XD')
})


// Este metodo manda a llamar a la lista de estudiantes
app.get('/api/students',(req,res)=>{
    
    res.send(students);
})

// Este metodo me dejara poder acceder a un estudiante en particular gracias a el useo de su "id"
app.get('/api/students/:id',(req,res)=>{

    const student = students.find(c=> c.id === parseInt(req.params.id));
    
    if(!student) return res.status(400).send('Estudiante No encontrado')
    else res.send(student)
})



//  Utilizo el metodo "post" para poder agregar un nuevo estudiante, este estudiante se pasara por 

app.post('/api/students',(req,res)=>{

    const student = {
        id: students.length +1 ,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll:(req.body.enroll = "true")
    }
    
    students.push(student)
    res.send(student)
})


// Utilizo el metod delet para eliminar un id en particular 

app.delete('/api/students/:id',(req,res)=>{

//      -Hago refernecia al id de la url 
    const student = students.find(c=> c.id === parseInt(req.params.id));
    // Si no hay un id  activo el error  400 y mando un mensaje
    if(!student) return res.status(400).send('Estudiante no encontrado');

    const index = students.indexOf(students); // hago referencia al id de que deceo eliminar 
    students.slice(index,1);  // utilizo el metodo slice para eliminar desde el id que sleccione el "id"
    
    res.render(student); // 

})


const port = process.port || 80;
app.listen(port,()=>{console.log(`Escuchadno en el porto ${port}`)});

