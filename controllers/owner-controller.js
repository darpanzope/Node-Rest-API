/* eslint-disable consistent-return */
const { owner, cat } = require('../models');

function index(req, res) {
  res.status(200).json('Owner Working');
}

function create(req, res) {
  owner.create({
    name: req.body.name,
  })
    .then((ownerData) => res.status(200).json(ownerData))
    .catch((error) => res.status(400).json(error));
}

function show(req, res) {
  owner.findByPk(req.params.id, {
    include: [{
      model: cat,
      as: 'cats',
    }],
  })
    .then((ownerData) => {
      if (!ownerData) {
        return res.status(404).json({ message: 'Owner Not Found' });
      }

      return res.status(200).json(ownerData);
    })
    .catch((error) => res.status(400).json(error));
}

function update(req, res) {
  owner.findByPk(req.params.id)
    .then((ownerData) => {
      if (!ownerData) {
        return res.status(404).json({ message: 'owner Not Found' });
      }

      owner.update({ ...owner, ...req.body })
        .then(() => res.status(200).json({ message: `Owner id ${req.params.id} updated` }))
        .catch((error) => res.status(400).json(error));
    })
    .catch((error) => res.status(400).json(error));
}

function destroy(req, res) {
  owner.findByPk(req.params.id)
    .then((ownerData) => {
      if (!ownerData) {
        return res.status(404).json({ message: 'owner Not Found' });
      }

      owner.destroy()
        .then(() => res.status(200).json({ message: `Owner id ${req.params.id} removed` }))
        .catch((error) => res.status(400).json(error));
    })
    .catch((error) => res.status(400).json(error));
}

module.exports = {
  index, create, show, update, destroy,
};
