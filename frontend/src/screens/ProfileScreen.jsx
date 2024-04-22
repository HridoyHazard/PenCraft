import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { useGetUserByIdQuery } from "../slices/usersApiSlice";
import { useUploadImageMutation } from "../slices/uploadApiSlice";
import { setCredentials } from "../slices/authSlice";

const ProfileScreen = () => {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const [uploadImage] = useUploadImageMutation();

  const { data: user, refetch } = useGetUserByIdQuery(userInfo._id);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadImage(formData).unwrap();
      console.log(res);
      toast.success(res.message);
      setAvatar(res.image);
      console.log(avatar);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setBio(user?.bio);
  }, [userInfo.email, userInfo.name, user?.bio]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
          bio,
          avatar,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        refetch();
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div class="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <main class="w-full min-h-screen mx-auto py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
          <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 class="pl-6 text-2xl font-bold sm:text-xl text-center">
              Public Profile
            </h2>
            <form onSubmit={handleSubmit}>
              <div class="grid max-w-2xl mx-auto mt-8">
                <div class="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={user && user.avatar}
                    alt="Bordered avatar"
                  />

                  <div class="rounded-md border border-indigo-500 bg-gray-50 shadow-md w-36">
                    <label
                      for="upload"
                      class="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 fill-white stroke-indigo-500"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span class="text-gray-600 font-medium">
                        Change Image
                      </span>
                    </label>
                    <input
                      id="upload"
                      type="file"
                      onChange={uploadFileHandler}
                      class="hidden"
                    />
                  </div>
                </div>

                <div class="items-center text-[#202142]">
                  <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div class="w-full">
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-indigo-900 "
                      >
                        Your Username
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        class="border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your first name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="mb-2 sm:mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-indigo-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="your.email@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-2 sm:mb-6">
                    <label
                      for="profession"
                      class="block mb-2 text-sm font-medium text-indigo-900 "
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      class=" border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="enter new password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-2 sm:mb-6">
                    <label
                      for="cpassword"
                      class="block mb-2 text-sm font-medium text-indigo-900 "
                    >
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      id="profession"
                      class=" border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="enter confirm password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-indigo-900 "
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-indigo-900  rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                      placeholder="Write your bio here..."
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>{" "}
                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {isLoading && <Loader />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;
