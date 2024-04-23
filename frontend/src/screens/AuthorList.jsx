import React, { useEffect, useState } from "react";
import Authors from "../components/Authors";
import Loader from "../components/Loader";

import { useGetUsersQuery } from "../slices/usersApiSlice";

const AuthorList = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div class="flex justify-center text-2xl md:text-3xl font-bold mb-8">
        All Authors
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data?.map((user) => (
                <Authors key={user._id} author={user} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthorList;
