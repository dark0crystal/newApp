import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function RegisterForm() {
  const [formData, setFormData] = useState({ firstName: '', familyName: '', password: '', email: '' });
  const [formErrors, setFormErrors] = useState({ firstName: '', familyName: '', password: '', email: '' });
  const [isLoading, setIsLoding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);

    // Final validation check
    const isFormValid = Object.values(formErrors).every((error) => error === '') &&
      formData.firstName.trim() !== '' &&
      formData.familyName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password.trim() !== '';

    if (isFormValid) {
      try {
        // Replace with your actual backend URL
        const response = await fetch('https://your-backend-url.com/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log('User registered successfully:', result);
          // Reset the form
          setFormData({
            firstName: '',
            familyName: '',
            email: '',
            password: ''
          });
          setFormErrors({
            firstName: '',
            familyName: '',
            email: '',
            password: ''
          });
        } else {
          console.error('Registration failed:', result.message);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    } else {
      console.log('Form contains validation errors or empty fields.');
    }
    setIsLoding(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the input
    if (name === 'firstName' && value.length < 3) {
      setFormErrors((prevState) => ({
        ...prevState,
        firstName: 'Please enter a valid first name with at least 3 characters.',
      }));
    } else if (name === 'familyName' && value.length < 3) {
      setFormErrors((prevState) => ({
        ...prevState,
        familyName: 'Please enter a valid family name with at least 3 characters.',
      }));
    } else if (name === 'password' && value.length < 8) {
      setFormErrors((prevState) => ({
        ...prevState,
        password: 'Please enter a valid password with at least 8 characters.',
      }));
    } else if (name === 'email' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: 'Please enter a valid email address.',
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: '', // Reset error message
      }));
    }
  };

  // Check if the form has errors or empty fields to disable the submit button
  const isFormDisabled = Object.values(formErrors).some((error) => error !== '') ||
    formData.firstName.trim() === '' ||
    formData.familyName.trim() === '' ||
    formData.email.trim() === '' ||
    formData.password.trim() === '';

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 my-5 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Register</h3>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* First Name Input */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Enter your first name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <small className="text-danger">{formErrors.firstName}</small>
            </div>

            {/* Family Name Input */}
            <div className="mb-3">
              <label htmlFor="familyName" className="form-label">Enter your family name</label>
              <input
                type="text"
                id="familyName"
                className="form-control"
                placeholder="Enter your family name"
                name="familyName"
                value={formData.familyName}
                onChange={handleInputChange}
              />
              <small className="text-danger">{formErrors.familyName}</small>
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter your email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <small className="text-danger">{formErrors.email}</small>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <small className="text-danger">{formErrors.password}</small>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn btn-primary w-100 ${isLoading ? 'disabled' : ''}`}
              disabled={isFormDisabled || isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {/* Navigation Link */}
          <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <NavLink to="/login" className="text-decoration-none">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
