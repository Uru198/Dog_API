async function perrito(){
        var response =  await fetch("https://dog.ceo/api/breeds/image/random");
        var responsejson = await response.json();
        var img = responsejson.message;//URL de la imagen de perrito
        var contenedorperrito = document.querySelector(".contenedorperrito");
        contenedorperrito.innerHTML = "<img src='" +img+ "' alt='perrito'/>"

}
