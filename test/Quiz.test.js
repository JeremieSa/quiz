

describe('Modele_QuestionParser', () => {
    test('Get the right total of questions', () => {
        expect(getNbQuestions()).toBe(4);
    }),

    test('For an index, get the right question', () => {
        expect(getQuestion(0)).toBe("Vitesse max libellule ? (km/h)");
    });
});