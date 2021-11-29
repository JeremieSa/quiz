export class QuestionParser {
    // Methods
    async getJson() {
        const response = await fetch("./../data/DataQuestions.json");
        return response.json();
    }

    async getQuestion(index) {
        let json = await this.getJson();
        return json.questionArray.question[index];
    }

    async getAnswer(index) {
        let json = await this.getJson();
        return json.questionArray.answer[index];
    }

    async getNbQuestions() {
        let json = await this.getJson();
        return json.questionArray.question.length;
    }
}

let testParser = new QuestionParser();
let premiereQuestion = await testParser.getQuestion(0);
console.log(premiereQuestion);