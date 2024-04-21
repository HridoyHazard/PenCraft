import asyncHandler from "express-async-handler";
import Article from "../models/ArticleModal.js";

//create
const createArticle = asyncHandler(async (req, res) => {
  const article = new Article(req.body);

  if (article) {
    await article.save();

    res.json(article);
  } else {
    res.status(400);
    throw new Error("Invalid article data");
  }
});

//get all articles
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});

  res.json(articles);
});

//delete article
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    await Article.deleteOne({ _id: req.params.id });
    res.json("Article removed");
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

//articleGetById
const articleGetById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

//articleGetByAuthorId
const articleGetByAuthorId = asyncHandler(async (req, res) => {
  const article = await Article.find({ author: req.params.id });

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

//update article
const updateArticle = asyncHandler(async (req, res) => {
  const { title, summary, content, image, author, authorName } = req.body;

  const article = await Article.findById(req.params.id);

  if (article) {
    article.title = title || article.title;
    article.summary = summary || article.summary;
    article.content = content || article.content;
    article.image = image || article.image;
    article.author = author || article.author;
    article.authorName = authorName || article.authorName;

    const updatedArticle = await article.save();

    res.json(updatedArticle);
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

export {
  createArticle,
  getArticles,
  deleteArticle,
  updateArticle,
  articleGetById,
  articleGetByAuthorId,
};
