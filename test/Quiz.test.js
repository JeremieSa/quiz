import { QuestionParser } from "../src/modele/QuestionParser";

describe('Modele_QuestionParser', () => {
    test('Get the right total of questions', () => {
        let parser = new QuestionParser();
        expect(parser.getNbQuestions()).toBe(4);
    }),

    test('For an index, get the right question', () => {
        let parser = new QuestionParser();
        expect(parser.getQuestion(0)).toBe("Vitesse max libellule ? (km/h)");
    });
});