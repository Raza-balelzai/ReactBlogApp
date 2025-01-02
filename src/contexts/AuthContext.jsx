import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const roles = decodedToken.role || [];
        setUser({
          username: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
          email: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
          isAdmin: roles.includes("Admin"),
          isSuperAdmin: roles.includes("SuperAdmin"),
          isUser: roles.includes("User"),
        });
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("jwtToken");
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("jwtToken", token);
    const decodedToken = jwtDecode(token);
    const roles = decodedToken.role || [];
    setUser({
      username: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      email: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
      isAdmin: roles.includes("Admin"),
      isSuperAdmin: roles.includes("SuperAdmin"),
      isUser: roles.includes("User"),
    });
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export const useAuth = () => useContext(AuthContext);
