const express = require('express');
// const {v4: uuidv} = require('uuid');
const sectionRouter = require('./routes/section');
const questionRouter = require('./routes/questions');

const app = express();
app.use(express.json());

app.use('/api/sections', sectionRouter);
app.use('/api/questions', questionRouter); 

const skillTests = {
    sections: []
};

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});