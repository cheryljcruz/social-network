const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// get all thoughts & create
router.route('/').get(getAllThoughts).post(addThought);
// get single, update thought, delete thought
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// create & delete reaction
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;
