const express = require('express');
// const { v4: uuidv } = require('uuidv');
const skillTests = require('../data/skillTests');
const { error } = require('console');

const router = express.Router();

router.post('/', (req, res) => {
    const newSection = {
        sectionId: Math.floor(Math.random() * 1000000), 
        title: req.body.title,
        questions: [] 
    };
    skillTests.sections.push(newSection);
    res.status(201).json(newSection);
});


router.delete('/:sectionId', (req,res) => {
    const sectionId = req.params.sectionId;
    const sectionIndex = skillTests.sections.findIndex(sec => sec.sectionId === sectionId);

    if(sectionIndex !== -1){
        skillTest.sections.splice(sectionIndex, 1);
        res.json({message: 'Sections deleted successfully'});

    }else {
        res.status(404).json({error: 'Section not found'});
    }
    
});


module.exports = router;