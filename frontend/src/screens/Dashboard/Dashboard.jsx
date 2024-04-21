import React from "react";
import { useGetArticlesQuery } from "../../slices/articleApiSlice";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
import Loader from "../../components/Loader";

const Dashboard = () => {
  let totalUser = 0;
  let totalArticle = 0;

  const { data: articles, isLoading: isLoadingArticles } =
    useGetArticlesQuery();

  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();

  {
    isLoadingArticles && isLoadingUsers ? (
      <Loader />
    ) : (
      (articles?.map((article) => {
        totalArticle++;
      }),
      users?.map((user) => {
        totalUser++;
      }))
    );
  }

  console.log(totalArticle, totalUser);

  return (
    <div class=" dark:bg-gray-800 flex flex-col justify-center items-center">
      <section class="grid gap-6 md:grid-cols-3 p-4 md:p-8 max-w-5xl mx-auto w-full ">
        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Unique views
            </dt>

            <dd class="text-5xl font-light md:text-6xl dark:text-white">
              192.1k
            </dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>32k increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>
        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Articles
            </dt>

            <dd class="text-5xl font-light md:text-6xl dark:text-white">
              {totalArticle}
            </dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>10 increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>
        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Users
            </dt>

            <dd class="text-5xl font-light md:text-6xl dark:text-white">
              {totalUser}
            </dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>5 increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>
        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              First Impression
            </dt>

            <dd class="text-5xl font-light md:text-6xl dark:text-white">21%</dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>55 increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Bounce rate
            </dt>

            <dd class="text-5xl font-light md:text-6xl dark:text-white">21%</dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-red-500 dark:text-red-400">
              <span>7% increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 8.75V17.25H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 17L6.75 6.75"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Average time on page
            </dt>

            <dd class="text-5xl font-light md:text-6xl dark:text-white">
              03:12
            </dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>3% increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>
      </section>
      <div class="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 md:space-y-0 p-4 md:p-8 max-w-5xl mx-auto w-full">
        <div class="flex flex-grow flex-col items-end rounded-xl bg-white px-6 py-4 shadow-md">
          <div
            class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: "rgb(123, 255, 253)",
              color: "rgb(0, 119, 117)",
            }}
          >
            New
          </div>
          <div class="grid flex-grow grid-cols-7 gap-1 self-stretch">
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-4 w-4 rounded-full"
                style={{ backgroundColor: "rgb(123, 255, 253)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                M
              </div>
            </div>
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-16 w-4 rounded-full"
                style={{ backgroundColor: "rgb(0, 255, 244)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                T
              </div>
            </div>
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-24 w-4 rounded-full"
                style={{ backgroundColor: "rgb(0, 255, 244)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                W
              </div>
            </div>
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-32 w-4 rounded-full"
                style={{ backgroundColor: "rgb(0, 237, 219)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                T
              </div>
            </div>
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-20 w-4 rounded-full"
                style={{ backgroundColor: "rgb(0, 255, 244)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                F
              </div>
            </div>
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-10 w-4 rounded-full"
                style={{ backgroundColor: "rgb(123, 255, 253)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                S
              </div>
            </div>
            <div class="flex flex-col items-center justify-end">
              <div
                class="mx-auto h-10 w-4 rounded-full"
                style={{ backgroundColor: "rgb(123, 255, 253)" }}
              ></div>
              <div class="mt-2 text-center text-xs font-semibold text-gray-400">
                S
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
