const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(data => res.json(data)).catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id)({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(data => res.json(data))
    .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
