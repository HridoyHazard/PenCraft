import express from "express";
import { createArticle , getArticles, deleteArticle, articleGetById, updateArticle, articleGetByAuthorId } from "../controllers/ArticleController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createArticle);
router.get("/", getArticles);
router.get("/:id", articleGetById);
router.get("/author/:id", articleGetByAuthorId);
router.put("/:id/update", updateArticle);
router.delete("/:id/delete", deleteArticle);

export default router;
