import { useState } from "react";
import "./Task5.css";

function Task5() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    // Validate only the field being changed
    const updatedErrors = validateForm(updatedFormData);

    setErrors({
      ...errors,
      [name]: updatedErrors[name] || "",
    });

    setSuccessMessage("");
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    const validationErrors = validateForm(formData);

    setErrors({
      ...errors,
      [name]: validationErrors[name] || "",
    });
  }

  function validateForm(data) {
    const newErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^\d{10}$/.test(data.mobile)) {
      newErrors.mobile = "Mobile number must contain 10 digits";
    }

    if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!data.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!data.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!data.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!data.city.trim()) {
      newErrors.city = "City is required";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    // Mark all fields as touched after Register is clicked
    const allTouched = {};

    Object.keys(formData).forEach((field) => {
      allTouched[field] = true;
    });

    setTouched(allTouched);

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Registration completed successfully!");
    } else {
      setSuccessMessage("");
    }
  }

  function handleReset() {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setSubmitted(false);
    setSuccessMessage("");
  }

  return (
    <div className="task5-container">
      <div className="registration-card">
        <h1>Registration Form</h1>
        <p className="form-subtitle">Create your account</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter first name"
              />
              {(touched.firstName || submitted) && errors.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter last name"
              />
              {(touched.lastName || submitted) && errors.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter email address"
              />
              {(touched.email || submitted) && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="10-digit mobile number"
              />
              {(touched.mobile || submitted) && errors.mobile && (
                <p className="error">{errors.mobile}</p>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Minimum 8 characters"
              />
              {(touched.password || submitted) && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm password"
              />
              {(touched.confirmPassword || submitted) &&
                errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {(touched.dob || submitted) && errors.dob && (
                <p className="error">{errors.dob}</p>
              )}
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {(touched.gender || submitted) && errors.gender && (
                <p className="error">{errors.gender}</p>
              )}
            </div>

            <div className="form-group full-width">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your address"
                rows="3"
              />
              {(touched.address || submitted) && errors.address && (
                <p className="error">{errors.address}</p>
              )}
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter city"
              />
              {(touched.city || submitted) && errors.city && (
                <p className="error">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Register
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Task5;
