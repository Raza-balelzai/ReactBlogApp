import CustomForm from "../../components/molecules/CustomForm";
import { useState, useContext } from "react";
import apiService from "../../services/ApiService";
import { useAuth } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoadingContext);
  // Local state for username and password
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { login } = useAuth();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await apiService.post(
        import.meta.env.VITE_LOGIN,
        formData
      );
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      await login(token); // Pass the token to the context
      navigate("/");
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fields for the login form
  const fields = [
    {
      type: "text",
      label: "Email",
      placeholder: "Enter your email",
      value: formData.userEmail,
      onChange: handleInputChange,
      name: "userEmail",
      wrapperClassName: "mb-3",
      inputClassName: "form-control",
      labelClassName: "form-label",
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      value: formData.userPassword,
      onChange: handleInputChange,
      name: "userPassword",
      wrapperClassName: "mb-3",
      inputClassName: "form-control",
      labelClassName: "form-label",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <CustomForm
            fields={fields}
            onSubmit={handleSubmit}
            buttonLabel="Login"
            buttonClassName="btn btn-primary w-100"
            className="shadow-lg p-4 rounded bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
