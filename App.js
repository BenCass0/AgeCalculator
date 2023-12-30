document.addEventListener("DOMContentLoaded", function () {
    var miBoton = document.getElementById("miBoton");
    miBoton.addEventListener("click", function () {
      var dia = document.getElementById("dia").value;
      var mes = document.getElementById("mes").value;
      var anio = document.getElementById("anio").value;
      
      var fechaActual=new Date();

      var day=fechaActual.getDate();
      var month=fechaActual.getMonth()+1;
      var year=fechaActual.getFullYear();

      function resetearEstilos() {
        document.getElementById("dia").style.border = "";
        document.getElementById("mes").style.border = "";
        document.getElementById("anio").style.border = "";
        document.getElementById("td").style.color = "";
        document.getElementById("tm").style.color = "";
        document.getElementById("ta").style.color = "";
        document.getElementById("validacion").style.color = "";
        document.getElementById("validacionuno").textContent = "";
        document.getElementById("validaciondos").textContent = "";
        document.getElementById("validaciontres").textContent = "";
      }
      console.log("Día:", dia);
      console.log("Mes:", mes);
      console.log("Año:", anio);
      resetearEstilos();
      
      if (dia === "") {
        document.getElementById("dia").style.border = "1px solid red";
        document.getElementById("td").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validacionuno").textContent = "This field is required";
        setTimeout(resetearEstilos, 3000);
      } else if (dia > 31) {
        document.getElementById("dia").style.border = "1px solid red";
        document.getElementById("td").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validacionuno").textContent = "Must be a valid day";
        setTimeout(resetearEstilos, 3000);
      }
  
      if (mes === "") {
        document.getElementById("mes").style.border = "1px solid red";
        document.getElementById("tm").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validaciondos").textContent = "This field is required";
        setTimeout(resetearEstilos, 3000);
      } else if (mes > 12) {
        document.getElementById("mes").style.border = "1px solid red";
        document.getElementById("tm").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validaciondos").textContent = "Must be a valid month";
        setTimeout(resetearEstilos, 3000);
      }
  
      if (anio === "") {
        document.getElementById("anio").style.border = "1px solid red";
        document.getElementById("ta").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validaciontres").textContent = "This field is required";
        setTimeout(resetearEstilos, 3000);
      } else if (anio > year) {
        document.getElementById("anio").style.border = "1px solid red";
        document.getElementById("ta").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validaciontres").textContent = "Must be in the past";
        document.getElementById("validaciontres").style.padding="0 0 0 20px";
        setTimeout(resetearEstilos, 3000);
      } else if (anio<1900){
        document.getElementById("anio").style.border = "1px solid red";
        document.getElementById("ta").style.color = "red";
        document.getElementById("validacion").style.color = "red";
        document.getElementById("validaciontres").textContent = "Error!";
        document.getElementById("validaciontres").style.padding="0 0 0 20px";
      
      }

      var fechaUsuario=new Date(anio,mes-1,dia);
      while(mes<=12){
      if (isValidDate(fechaUsuario)){
        if(fechaUsuario<fechaActual){
        console.log("fecha válida:",fechaUsuario);
        var resta=fechaActual-fechaUsuario;
        var Edadenmilisegundos=new Date(resta);
        var edadAnios=Math.abs(Edadenmilisegundos.getUTCFullYear()-1970)
        if(edadAnios<10){
          edadAnios="0"+edadAnios
        }
        var edadMeses=Edadenmilisegundos.getUTCMonth();
        if(edadMeses<10){
          edadMeses="0"+edadMeses
        }
        var edadDias=Edadenmilisegundos.getUTCDate()-1;
        if(edadDias<10){
          edadDias="0"+edadDias
        }
        console.log("Edad:", edadAnios, "años,", edadMeses, "meses y", edadDias, "días");
        document.getElementById("aniosNumero").textContent=edadAnios;
        document.getElementById("mesesNumero").textContent=edadMeses;
        document.getElementById("diasNumero").textContent=edadDias;
      }else{

      }
      }else{
        console.log("fecha inválida:");
      }

      function isValidDate(date){
        return !isNaN(date.getTime());
      }
                             
      }})
    });

