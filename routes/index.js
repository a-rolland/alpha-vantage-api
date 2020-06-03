const express = require('express');
const router  = express.Router();
const Company = require('../models/company');

/* GET home page */
router.get('/', (req, res, next) => {
  Company.find()
  .then(actions => {
    console.log(actions)
    res.render('index', {actions})
  })
  .catch(err => `Error: ${err}`)
});

router.get('/add', (req, res, next) => {
  res.render('add-company');
});

router.post('/add', (req, res, next) => {
  Company.create(req.body)
  .then(company => {
    console.log("Company successfully added !")
    res.redirect('/')
  })
  .catch(err => console.log(`Error : ${err}`))
});

router.get('/chart/:id', (req, res, next) => {
  Company.findById(req.params.id)
  .then(company => {
    res.render('company-chart', {company})
  })
  .catch(err => `Error : ${err}`)
});

module.exports = router;
