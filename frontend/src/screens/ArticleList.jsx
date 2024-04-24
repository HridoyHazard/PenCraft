import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

import {
  useGetArticleByAuthorIdQuery,
  useDeleteArticleMutation,
} from "../slices/articleApiSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const ArticleList = () => {
  const { id: articleId } = useParams();

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const {
    data: articles,
    isLoading: isLoadingArticles,
    refetch,
  } = useGetArticleByAuthorIdQuery(userInfo?._id);

  const [deleteArticle, { isLoading: loadingDelete }] =
    useDeleteArticleMutation(articleId);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteArticle(id).unwrap();
          console.log("Deleted");
          refetch();
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  return (
    <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full"
        onClick={() => {
          navigate("/create");
        }}
      >
        Add Article
      </button>
      {isLoadingArticles ? (
        <Loader />
      ) : (
        <table class="w-full table-fixed">
          <thead>
            <tr class="bg-gray-100">
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Author
              </th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Title
              </th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Summary
              </th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Content
              </th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Created At
              </th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Status
              </th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {articles?.map((article) => (
              <tr key={article._id}>
                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  {article.authorName}
                </td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  {article.title}
                </td>

                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  {article.summary}
                </td>

                <td class="py-4 px-6 border-b border-gray-200 line-clamp-5">
                  {article.content}
                </td>

                <td class="py-4 px-6 border-b border-gray-200">
                  <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                    {new Date(article.timestamp).toLocaleDateString()}
                  </span>
                </td>
                <td class="py-4 px-6 border-b border-gray-200">
                  <Link
                    class="bg-blue-500 text-white py-2 px-4 rounded-full"
                    to={`/article/${article._id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    class="bg-red-500 text-white py-2 px-4 rounded-full"
                    onClick={() => handleDelete(article._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ArticleList;
