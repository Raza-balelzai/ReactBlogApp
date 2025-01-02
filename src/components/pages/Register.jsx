import { useState } from "react";
import CustomForm from "../molecules/CustomForm";
function Register() {
   // Local state for username and password
     const [formData, setFormData] = useState({
       username: "",
       password: "",
     });
   
     // Handle form input change
     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
     };
   
     // Submit handler for the form
     const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Form submitted", formData);
       // Add your login logic here (e.g., API call)
     };
   
     // Fields for the login form
     const fields = [
       {
         type: "text",
         label: "Username",
         placeholder: "Enter your username",
         value: formData.username,
         onChange: handleInputChange,
         name: "username",
         wrapperClassName: "mb-3",
         inputClassName: "form-control",
         labelClassName: "form-label",
       },
       {
         type: "password",
         label: "Password",
         placeholder: "Enter your password",
         value: formData.password,
         onChange: handleInputChange,
         name: "password",
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
export default Register
