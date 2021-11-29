async function getJson() {
    const response = await fetch("./../data/DataQuestions.json");
    return response.json();
}

async function getNbQuestions() {
    let json = await getJson();
    return json.questionArray.question.length;
}

// QUESTION
async function getQuestion(index) {
    let json = await getJson();
    return json.questionArray.question[index];
}

async function getAllQuestions() {
    let json = await getJson();
    return json.questionArray.question;
}

// ANSWER
async function getAnswer(index) {
    let json = await getJson();
    return json.questionArray.answer[index];
}

async function getAllAnswers() {
    let json = await getJson();
    return json.questionArray.answer;
}

export {getJson, getNbQuestions, getQuestion, getAllQuestions, getAnswer, getAllAnswers};