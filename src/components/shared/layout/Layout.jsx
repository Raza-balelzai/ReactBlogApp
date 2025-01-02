import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import "../../../styles/Layout.css";
import { useContext } from "react";
import { LoadingContext } from "../../../contexts/LoadingContext";
const Layout = ({ children }) => {
  const location = useLocation(); // Gets the current route
  const { loading } = useContext(LoadingContext);
  // Map page titles based on the route
  const pageTitles = {
    "/": {
      title: "Blogosphere",
      subtitle: "Home page",
      note: "Welcome to the",
    },
    "/Admin/Tags": {
      title: "Blog tags",
      note: "Admin functionality",
      subtitle: "for adding, removing, updating of tags",
    },
    "/login": {
      title: "Login",
      note: "Hey there!",
      subtitle: "SignIn to the website for more features",
    },
    "/register": {
      note: "Not registered?",
      title: "Register here",
      subtitle: "Sign up to get access to more features",
    },
    "/Admin/BlogPosts": {
      note: "Admin functionality",
      title: "Blog Posts",
      subtitle: "for adding, removing, updating of Blog posts",
    },
    "/Admin/ManageUsers": {
      note: " Super Admin functionality",
      title: "Manage users",
      subtitle: "where admins can be added and removed",
    },
  };

  const currentPage = pageTitles[location.pathname] || {
    title: "Page Not Found",
    subtitle: "Error",
    note: "Oops!",
  };
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        {" "}
        {/* Flexbox layout for full height */}
        <Navbar />
        <Header
          title={currentPage.title}
          subtitle={currentPage.subtitle}
          note={currentPage.note}
        />
        {loading && (
          <div className="loading-bar-container">
            <div
              className="loading-bar"
              style={{
                width: loading ? "100%" : "0%", // Simulates the progress bar growth
              }}
            ></div>
          </div>
        )}
        <main className="container mt-4 mb-5 flex-grow-1">
          {" "}
          {/* Ensure the main grows to fill space */}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
