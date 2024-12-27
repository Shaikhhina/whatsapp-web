import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";
import { signUpUser } from "../../config/instantdb"; // Import only the login method as Sign Up is not used
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Update the userData state for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    try {
      const result = await signUpUser({
        email,
        password,
      });

      if (result.success) {
        alert("User loggedin successfully!");
        navigate("/chat");
      } else {
        alert(result.error || "An error occurred. Please try again.");
      }

      e.target.reset();
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Failed to update credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <img src={assets.whatsapp_logo} alt="WhatsApp Logo" className="logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login Page</h2>

        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-input"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Login Now</button>
      </form>
    </div>
  );
}

export default Login;
