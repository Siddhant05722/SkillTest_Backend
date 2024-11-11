const express = require('express');
// const { v4: uuidv } = require('uuidv');
const skillTests = require('../data/skillTests');
const { error } = require('console');
const { text } = require('body-parser');
const { sections } = require('../data/skillTests');


const router = express.Router();

router.post('/:sectionId', (req,res) => {
    const sectionId = req.params.sectionId;
    const section = skillTest.sections.find(sec => sec.sectionId === sectionId);

    if(section){
        const newQuestions = {
            questionId: 2,
            text: req.body.text,
            options: req.body.correctAnswer
        };
        section.questions.push(newQuestions);
        res.status(201).json(newQuestions);
    }else{
        res.status(404).json({error: 'Section not found'});
    }
});

router.put('/:sectionId', (req,res) => {
    let questionFound = false;
    skillTest.sections.forEach(section => {
        section.questions.map(question => {
            if (question.questionId === req.params.questionId){
                questionFound = true;
                return{...question, ...req.body};
            }
            return question;
        });
        
    });
    if(questionFound){
        res.json({message: 'Question updated successfully'});
    }else{
        res.status(404).json({error: 'Question not found'});
    }
});

router.delete('/:questionId', (req, res) => {
    let questionFound = false;

    skillTest.sections.forEach(section.question.findIndex(q => q.questionId === req.params.questionId));
    if(questionIndex !== -1) {
        section.questions.splice(questionIndex, 1);
        questionFound = true;
    }
    if(questionFound){
        res.json({message: 'Question deleted successfully'});
    }else{
        res.status(404).json({error: 'Question not found'});
    }
});


module.exports =router;