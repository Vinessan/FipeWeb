fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas").then(res => res.json()).then(json => {
    for(let i = 0; i < json.length; i++){    
        document.getElementById("marcas").innerHTML += "<option value='"+ json[i].codigo +"' selected>"+ json[i].nome +"</option>";
    }
});

document.getElementById("marcas").addEventListener("click", () => {
    document.getElementById("modelos").innerHTML = "<option selected hidden>Loading...</option>";

    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+ document.getElementById("marcas").value +"/modelos").then(res => res.json()).then(json => {
        for(let i = 0; i < json.modelos.length; i++){
            document.getElementById("modelos").innerHTML += "<option value='"+ json.modelos[i].codigo +"' selected>"+ json.modelos[i].nome +"</option>";
        }
        console.log(json);
    });
});

document.getElementById("modelos").addEventListener("click", () => {
    document.getElementById("anos").innerHTML = "<option selected hidden>Loading...</option>";

    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+ document.getElementById("marcas").value +"/modelos/"+ document.getElementById("modelos").value +"/anos").then(res => res.json()).then(json => {
        for(let i = 0; i < json.length; i++){
            document.getElementById("anos").innerHTML += "<option value='"+ json[i].codigo +"' selected>"+ json[i].nome +"</option>";
        }
    });
});

document.getElementById("anos").addEventListener("click", () => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+ document.getElementById("marcas").value +"/modelos/"+ document.getElementById("modelos").value +"/anos/"+ document.getElementById("anos").value +"").then(res => res.json()).then(json => {

        document.getElementById("result").innerHTML = "<ul><li><b>Marca:</b> "+ json.Marca +"</li><li><b>Modelo:</b> "+ json.Modelo +"</li><li><b>Ano:</b> "+ json.AnoModelo +"</li><li><b>Combustível:</b> "+ json.Combustivel +"</li><li><b>Código:</b> "+ json.CodigoFipe +"</li><li><b>Valor:</b> "+ json.Valor +"</li></ul>";
    });
});