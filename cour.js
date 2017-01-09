function changeColor(e) {
    //detecter l'element a changer 
    var divs = document.getElementsByTagName("div");

    var color = "";

    //detecter la touche
    var caractere = String.fromCharCode(e.charCode)

    switch (caractere) {


    case "j":
        couleur = "yellow";
        break;
    case "b":
        couleur = "blue";
        break;
    default:
        couleur = "red";


    }
    for (var i = 0; i < divs.length; i++) {

        divs[i].style.backgroundColor = couleur;


    }

}
document.addEventListener("keypress", changeColor);