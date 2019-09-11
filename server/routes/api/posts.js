const router = require("express").Router();
const post_controller = require("../../controllers/PostController");


router.get("/", post_controller.get_all_posts);
router.post("/", post_controller.create_post);
router.delete("/:postID", post_controller.delete_post);

module.exports = router;
