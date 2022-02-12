const materiasHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Fisica 1",
        nota:7
    },{
        nombre: "Calculo 2",
        nota:8
    },{
        nombre: "Programacion 3",
        nota:10
    },{
        nombre: "Bioetica",
        nota:7
    },{
        nombre: "Estadistica 2",
        nota:6
    },
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("lo siento, la materia no existe");
        else setTimeout(()=>{resolve(materia)}, Math.random()*1400);
    });
};

const devolverMaterias = async ()=>{
    let materia = [];
    for(let i = 0; i< materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `<div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();