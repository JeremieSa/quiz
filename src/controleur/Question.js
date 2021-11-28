class Question {
    constructor(question, reponse, numQuestion) {
        this.question = question;
        this.reponse = reponse;
        this.numQuestion = numQuestion;
    }

    function getQuestion() {
        return this.question;
    }

    function getReponse() {
        return this.reponse;
    }

    function getNumQuestion() {
        return this.numQuestion;
    }
}