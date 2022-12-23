const express = require("express");
const router = express.Router();

const { getAllTask, createTask, getTask, updateTask, deleteTask } = require('../controller/task');
router.route('/').get(getAllTask);
router.route('/').post(createTask);
router.route('/').delete(deleteTask);
router.route('/:id').get(getTask);
router.route('/').patch(updateTask);

module.exports = router;