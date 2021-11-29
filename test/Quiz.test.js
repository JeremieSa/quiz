import * as questionParser from '../src/modele/QuestionParser.js';
import * as sauvegarde from '../src/modele/Sauvegardes.js';

describe('Modele QuestionParser', () => {
    test('Get the right total of questions', () => {
        expect(questionParser.getNbQuestions()).toBe(4);
    }),

    test('For an index, get the right question', () => {
        expect(questionParser.getQuestion(0)).toBe("Vitesse max libellule ? (km/h)");
    }),

    test('Get the right array of questions', () => {
        expect(questionParser.getAllQuestions().toBe(["Vitesse max libellule ? (km/h)",
                                                    "Quel est le nombre d'ailes des libellule ?", "Le type des yeux des libellules ?",
                                                    "Les libellules ont-elles 3 yeux ? (Oui / Non)"]));
    });
});

describe('Modele Sauvegarde', () => {
    test('Initialisation of local storage', () => {
        let stateArray = ["To complete", "To complete", "To complete", "To complete"];
        let questionArray = ["1", "2", "3", "4"];
        localStorage.clear();
        sauvegarde.initLocalStorage(questionArray)
        expect(sauvegarde.getAllQuestionsState()).toBe(stateArray)
    });
});