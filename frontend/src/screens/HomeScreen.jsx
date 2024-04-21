import React, { useEffect, useState } from "react";
import { useGetArticlesQuery } from "../slices/articleApiSlice";
import Article from "../components/Article";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const { data, error, isLoading, refetch } = useGetArticlesQuery();

  console.log(data);

  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 h-full">
      <div class="flex justify-center text-2xl md:text-3xl font-bold mb-8">
        All Articles
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {data?.map((article) => (
              <Article
                key={article.id}
                id={article._id}
                title={article.title}
                summary={article.summary}
                content={article.content}
                image={article.image}
                author={article.authorName}
                authorId={article.author}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default HomeScreen;
