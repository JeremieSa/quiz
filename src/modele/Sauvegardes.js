/*
La sauvegarde utilise la local storage.
Pour chaque question, nous utiliserons comme cle la question en elle-meme.
Exemple : "Vitesse max libellule ? (km/h)".
La valeur sera un des trois etat suivant :
    0 (To complete) : Question pas encore repondue
    1 (Wrong) : Mauvaise reponse
    2 (Completed) : Bonne reponse fournie
*/

// READ
/**
 * Donne la liste des etats pour chaque question passe en parametre
 * @param {*} listQuestion Liste de questions (pas les reponses)
 * @returns Liste d'etat "To complete", "Wrong" ou "Completed"
 */
function getAllQuestionsState(listQuestion) {
    let listeState = [];

    listQuestion.forEach(element => {
        if(localStorage.getItem(element) == undefined) {
            return undefined;
        }

        switch (localStorage.getItem(element)) {
            case "0":
                listeState.push("To complete");
                break;

            case "1":
                listeState.push("Wrong");
                break;

            case "2":
                listeState.push("Completed");
                break;
        
            default:
                console.error("ERROR : Wrong question state for question : " + element);
                return undefined;
        }
    });

    return listeState;
}

// WRITE
/**
 * Initialise le local storage où pour chaque question on donnera l'etat 0 ("To Complete").
 * @param {*} listQuestion Liste de questions (pas les reponses)
 */
function initLocalStorage(listQuestion) {
    listQuestion.forEach(element => {
        localStorage.setItem(element, 0);
    });
}

/**
 * Ajoute ou modifie l'etat d'une question
 * @param {*} question Une question
 * @param {*} state Un etat (0, 1 ou 2)
 */
function addOrModifyQuestionState(question, state) {
    localStorage.setItem(question, state);
}

/**
 * Supprime toutes les cles et valeurs du local storage.
 */
function clearLocalStorage() {
    localStorage.clear();
}

export {getAllQuestionsState, initLocalStorage, addOrModifyQuestionState, clearLocalStorage};

// TEST
/*let listeQuest = ["Vitesse max libellule ? (km/h)", "Quel est le nombre d'ailes des libellule ?",
                "Le type des yeux des libellules ?", "Les libellules ont-elles 3 yeux ? (Oui / Non)"];
console.log(getAllQuestionsState(listeQuest));*/