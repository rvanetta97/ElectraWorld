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
  Tag.findByPk(req.params.id, {
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
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((newTag) => {
      // Send the newly created row as a JSON object
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id',async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedTag[0] === 0) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.status(200).json({message: 'Tag deleted successfully'})
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
