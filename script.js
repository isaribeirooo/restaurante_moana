document.getElementById("busca-site").addEventListener("submit", function(e){

    e.preventDefault();

    let busca = document.getElementById("campoBusca").value.toLowerCase();

    if(busca.includes("inicio")){
        window.location.href = "#inicio";
    }

    else if(busca.includes("restaurante")){
        window.location.href = "#restaurante";
    }

    else if(busca.includes("cardapio") || busca.includes("menu")){
        window.location.href = "#menu";
    }

     else if(busca.includes("pratos principais")){
        window.location.href = "#pratos principais";
    }

     else if(busca.includes("entradas")){
        window.location.href = "#entradas";
    }

    else if(busca.includes("sobremesas")){
        window.location.href = "#sobremesas";
    }

    else if(busca.includes("bebidas")){
        window.location.href = "#bebidas";
    }

    else if(busca.includes("contato")){
        window.location.href = "#contato";
    }

    else{
        alert("Nenhum resultado encontrado");
    }

});