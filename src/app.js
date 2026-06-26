const express = require('express');
const newModel = require('./models/note.model');

const app = express();
app.use(express.json());



app.post('/notes', async (req, res) => {
  const note = req.body;
  await newModel.create({
    name: note.name,
    Dec: note.Dec,
  });
  res.status(201).send({ message: 'Note created successfully', note });
});

app.get('/notes', async (req, res) => {
  const notes = await newModel.find(); 
  res.status(200).json({ 
    message: 'Notes retrieved successfully',
    notes: notes,
   });
});

app.delete('/notes/:index', async (req, res) => {
    const index = req.params.index;
    await newModel.findByIdAndDelete(index);
    res.status(200).json({ message: 'Note deleted successfully' });
  });   

  
app.patch('/notes/:id', async (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body.Dec;
  await newModel.findByIdAndUpdate({ _id: id }, { Dec: updatedNote });
  res.status(200).json({ message: 'Note updated successfully' });
});





module.exports = app;
