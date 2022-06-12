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

// get all thoughts
router.route('/').get(getAllThoughts);
// update thought
router.route('/:id').get(getThoughtById).put(updateThought);
// delete thought
router.route('/:userId/:thoughtId').delete(deleteThought);
// create thought
router.route('/:userId').post(addThought);
// create reaction
router.route('/:thoughtId/reactions').post(addReaction);
// delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
