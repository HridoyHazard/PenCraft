import React from "react";
import { Link } from "react-router-dom";
import { useGetUserByIdQuery } from "../slices/usersApiSlice";
import { useSelector } from "react-redux";

const Article = ({ id, title, summary, content, image, author, authorId }) => {
  const { data } = useGetUserByIdQuery(authorId);

  return (
    <div class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg flex flex-col justify-between leading-normal">
      <img src={image} class="w-full h-[320px] mb-3" />
      <div class="p-4 pt-2">
        <div class="mb-8 text-center">
          <Link
            to={`/article/view/${id}`}
            class="text-gray-900 font-bold text-lg mb-2 font-semiboldtwo-lines text-ellipsis"
          >
            <span>{title}</span>
          </Link>

          <p class="text-gray-700 text-sm line-clamp-2">{summary}</p>

          <Link
            to={`/article/view/${id}`}
            class="text-teal-600 hover:text-teal-700 text-sm"
          >
            Read More &rarr;
          </Link>
        </div>

        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4 "
            src={data?.avatar}
            alt="Avatar of Jonathan Reinink"
          />

          <div class="text-sm">
            <Link
              to={`/authors/${authorId}`}
              class="text-gray-900 font-semibold leading-none hover:text-indigo-600"
            >
              {author}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
