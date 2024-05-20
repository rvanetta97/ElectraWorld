const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      Product
    ]
  }). then(data => res.json(data)).catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id).then(data => res.json(data)).catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  Category.create({
    name: req.body.name,
  })
    .then((newCategory) => {
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedCategory[0] === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.status(200).json({message: 'Category deleted successfully'})
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
