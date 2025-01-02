import { Route, Routes } from "react-router-dom";
import { AdminTags, Home, Login, Register } from "./components";
import Layout from "./components/shared/layout/Layout";
import AdminBlogPosts from "./components/pages/AdminBlogPosts";
import AdminUsers from "./components/pages/AdminUsers";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Admin/Tags" element={<AdminTags />} />
          <Route path="/Admin/BlogPosts" element={<AdminBlogPosts />} />
          <Route path="/Admin/ManageUsers" element={<AdminUsers/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
