import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import AuthorList from "./screens/AuthorList.jsx";
import AuthorProfile from "./screens/AuthorProfile.jsx";
import CreateArticle from "./screens/CreateArticle.jsx";
import ArticleList from "./screens/ArticleList.jsx";
import ArticleEdit from "./screens/ArticleEdit.jsx";
import ViewArticle from "./screens/ViewArticle.jsx";
import Dashboard from "./screens/Dashboard/Dashboard.jsx";
import Layout from "./screens/Dashboard/Layout.jsx";
import AboutUs from "./screens/AboutUs.jsx";
import ContactUs from "./screens/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route index={true} path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/authors/:id" element={<AuthorProfile />} />
          <Route path="/create" element={<CreateArticle />} />
          <Route path="/article/:id/edit" element={<ArticleEdit />} />
          <Route exact path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="articlelist" element={<ArticleList />} />
            <Route path="profile" element={<ProfileScreen />} />
          </Route>
        </Route>

        <Route path="/article/view/:id" element={<ViewArticle />} />

        <Route path="" element={<PrivateRoute />}></Route>
      </Routes>
    </>
  );
};

export default App;
