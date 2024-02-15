const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
    });


    
    if(!categoryData){
      res.status(404).json({message:'Category not in database'});
      return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Location.findByPk(req.params.id, {
    include: [{ model: Product, through: Category}]
    });
    if(!categoryData){
        res.status(404).json({message:'Category not in database'});
        return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(!categoryDelete){
        res.status(404).json({message:'Somethings wrong'});
        return;
    }
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
