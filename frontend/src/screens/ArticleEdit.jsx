import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import {
  useGetArticleByIdQuery,
  useUpdateArticleMutation,
} from "../slices/articleApiSlice";
import { useUploadImageMutation } from "../slices/uploadApiSlice";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ArticleEdit = () => {
  const { id: articleId } = useParams();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [authorName, setAuthorName] = useState("");

  const {
    data: article,
    isLoading,
    refetch,
  } = useGetArticleByIdQuery(articleId);

  const [updateArticle, { isLoading: isUpdating }] = useUpdateArticleMutation();

  const [uploadImage, { isLoading: loadingUpload }] = useUploadImageMutation();

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadImage(formData).unwrap();
      console.log(res);
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateArticle({
        id: articleId,
        title,
        summary,
        content,
        image,
        author,
        authorName,
      }).unwrap();
      toast.success("Article updated successfully");
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setSummary(article.summary);
      setContent(article.content);
      setImage(article.image);
      setAuthor(article.author);
      setAuthorName(article.authorName);
    }
  }, [article]);

  console.log(image);

  return (
    <div class="max-w-xl mx-auto mt-20">
      <Link
        to={"/dashboard/dashboard/articlelist"}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Go Back
      </Link>
      <div class="max-w-lg flex-col border rounded-lg bg-white p-8">
        <h2 class="title-font mb-1 text-4xl text-gray-900 text-center">
          Edit Article
        </h2>
        {isLoading && <Loader />}
        {isUpdating && <Loader />}
        <form onSubmit={handleSubmit}>
          <div class="mb-2">
            <label for="title" class="text-sm leading-7 text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div class="mb-2">
            <label for="email" class="text-sm leading-7 text-gray-600">
              Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div class="mb-2">
            <label for="content" class="text-sm leading-7 text-gray-600">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          <div class="max-w-xs">
            <label
              for="example1"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Upload file
              {image}
            </label>
            <input
              id="example1"
              type="file"
              name="image"
              onChange={uploadFileHandler}
              class="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />

            {loadingUpload && <Loader />}
          </div>
          <div class="text-center">
            <button class="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEdit;
