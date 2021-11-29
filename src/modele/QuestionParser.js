export class QuestionParser {
    // Methods
    async getJson() {
        const response = await fetch("./../data/DataQuestions.json");
        return response.json();
    }

    async getNbQuestions() {
        let json = await this.getJson();
        return json.questionArray.question.length;
    }

    // QUESTION
    async getQuestion(index) {
        let json = await this.getJson();
        return json.questionArray.question[index];
    }

    async getAllQuestions() {
        let json = await this.getJson();
        return json.questionArray.question;
    }

    // ANSWER
    async getAnswer(index) {
        let json = await this.getJson();
        return json.questionArray.answer[index];
    }

    async getAllAnswers() {
        let json = await this.getJson();
        return json.questionArray.answer;
    }
}

// TEST
/*
let testParser = new QuestionParser();
let premiereQuestion = await testParser.getAllAnswers();
console.log(premiereQuestion);
*/