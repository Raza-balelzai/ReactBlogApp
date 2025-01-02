import { Link } from "react-router-dom";
import CustomButton from "../../atoms/CustomButton";
import { useAuth } from "../../../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  console.log(user);
  const customLinkStyles = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
        style={{ padding: "10px 20px" }}
      >
        <Link to={"/"} className="navbar-brand" href="#">
          <strong>Blogosphere</strong>
        </Link>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto">
            {/* Conditionally render Admin dropdown based on user role */}
            {user?.isAdmin && (
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin Functionality
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/Admin/Tags" className="dropdown-item">
                      Tags
                    </Link>
                  </li>
                  <li>
                    <Link to="/Admin/BlogPosts" className="dropdown-item">
                      Blog Posts
                    </Link>
                  </li>
                  {user?.isSuperAdmin && (
                    <li>
                    <Link to="/Admin/ManageUsers" className="dropdown-item">
                      Manage Users(superadmin only)
                    </Link>
                  </li>
                  )}
                  
                </ul>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex gap-2">
            {/* Conditionally render Login/Logout buttons based on user authentication */}
            {!user ? (
              <>
                <Link to="/login" style={customLinkStyles}>
                  <CustomButton className="btn btn-outline-light me-2">
                    Login
                  </CustomButton>
                </Link>

                <Link to="/register" style={customLinkStyles}>
                  <CustomButton className="btn-light">Register</CustomButton>
                </Link>
              </>
            ) : (
              <CustomButton
                className="btn btn-outline-light"
                onClick={() => {
                  logout(); // Call logout function to log the user out
                  localStorage.removeItem("jwtToken"); // Remove JWT token from local storage
                }}
              >
                Logout
              </CustomButton>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
