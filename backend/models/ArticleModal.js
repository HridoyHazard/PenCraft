import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  authorName: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
