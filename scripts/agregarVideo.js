let newVideo = [];
let almacenados = [];
// Captura el formulario
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  // .preventDefault  evita que ocurra la accion que viene asociada al submit por defecto(La recarga de la pagina)
  event.preventDefault();
  // Nos entrega una array con los elementos hijos de fomr
  const valuesForm = Object.values(form);
  console.log(valuesForm);
  // Obtener objeto con la informacion ingresada en formulario en el input
  const formInfo = {};
  valuesForm.forEach((valueInput) => {
    if (valueInput.id) {
      formInfo[valueInput.id] = valueInput.value;
    }
  });

    // validadcion de javaScript 
    let propertyVideo=0;
    let validacionForm=0;
    for (const key in formInfo) {
      propertyVideo = formInfo[key];
      if(!propertyVideo){
        alert(`El campo ${key} no se encuentra diligenciado`);
        validacionForm = true;
        break;
      }        
    }

  let Local = JSON.parse(localStorage.getItem("nuevoVideo"));
  let repeat;
  if (Local == null){
        ;
  } else {
  repeat = Local.find((elemento) => elemento.url == formInfo.url);
  }
  console.log(repeat);

  if (repeat != null || repeat != undefined ){
        alert("El video ya se encuentra en la lista");
        repeat = "";
  } else if (validacionForm != true){
    
  if (localStorage.getItem("nuevoVideo")) {
    almacenados = JSON.parse(localStorage.getItem("nuevoVideo"));
    almacenados.push(formInfo);
    localStorage.setItem("nuevoVideo", JSON.stringify(almacenados));
  } else if (localStorage.getItem("nuevoVideo") == null || localStorage.getItem("nuevoVideo") == undefined) {
    newVideo.push(formInfo);
    localStorage.setItem("nuevoVideo", JSON.stringify(newVideo));
  }
}
});







  