//Exercice 1: Ecrire une fonction qui prend en paramètre une liste de chaîne de caractères,
// et qui retourne uniquement les chaînes de caractères qui contiennent la lettre P.



let maString = "pierre"

 
const chercheP = (prenom) => {
    if (maString.indexOf('p') != -1) {

        return "il y a un p dans " + prenom

    } else {
        console.log("pas de p dans le prenom");
    }
}

console.log(chercheP(maString))



// Exercice 2: Ecrire une fonction qui prend en paramètre une liste de chaîne de caractères et qui retourne une liste d’objets. Chaque objet aura deux attributs:
// - Le premier sera la première lettre de chaque prénom
// - Le deuxième sera le prénom en lui même
// Exemple: ‘Pierre’ → { firstLetter: ‘P’, name: ‘Pierre’ }



let array = ["clement", "pierre", "luc"];

function getObject(monTableau) {
    
    let list = [];
    for (let prenom of monTableau) {
        list.push(
            `{firstLetter: ${prenom.slice(0,1)},name: ${prenom}}`
        )
    }
    console.log(list)
}

getObject(array)