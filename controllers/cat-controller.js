/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const { cat } = require('../models');

function index(req, res) {
  res.status(200).json('Cats Working');
}

function create(req, res) {
  cat.create({
    name: req.body.name,
    age: req.body.age,
    ownerId: req.body.ownerId,
  })
    .then((catData) => res.status(200).json(catData))
    .catch((error) => res.status(400).json(error));
}

function show(req, res) {
  cat.findByPk(req.params.id)
    .then((catData) => {
      if (!catData) {
        return res.status(404).json({ message: 'Cat Not Found' });
      }

      return res.status(200).json(catData);
    })
    .catch((error) => res.status(400).json(error));
}

function update(req, res) {
  cat.findByPk(req.params.id)
    .then((catData) => {
      if (!catData) {
        return res.status(404).json({ message: 'Cat Not Found' });
      }

      cat.update({ ...cat, ...req.body })
        .then(() => res.status(200).json({ message: `Cat id ${req.params.id} updated` }))
        .catch((error) => res.status(400).json(error));
    })
    .catch((error) => res.status(400).json(error));
}

function destroy(req, res) {
  cat.findByPk(req.params.id)
    .then((catData) => {
      if (!catData) {
        return res.status(404).json({ message: 'Cat Not Found' });
      }

      cat.destroy({
        where: { id: req.params.id },
      })
        .then(() => res.status(200).json({ message: `Cat id ${req.params.id} removed` }))
        .catch((error) => res.status(400).json(error));
    })
    .catch((error) => res.status(400).json(error));
}

module.exports = {
  index, create, show, update, destroy,
};
