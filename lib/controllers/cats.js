const { Router } = require('express');
const Cat = require('../models/cat');



module.exports = Router()
  .get('/:id', async (req, res) => {
    const cat = await Cat.getByID(req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(ids);
  });
