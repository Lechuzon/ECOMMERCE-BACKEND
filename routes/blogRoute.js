const express = require("express");
const { createBlog, updateBlog, getBlog, getAllBlogs,deleteBlog, liketheBlog } = require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post('/',authMiddleware, isAdmin, createBlog);
router.put('/likes', authMiddleware, liketheBlog);

router.put('/:id',authMiddleware, isAdmin, updateBlog);

router.get('/:id', getBlog);
router.get('/', getAllBlogs);

router.delete('/:id', authMiddleware, isAdmin, deleteBlog);


module.exports = router;