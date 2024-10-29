import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoding] = useState(false);
  const [submittedUsers, setSubmittedUsers] = useState([]); // New state to store submitted users

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);

    // Final validation check
    const isFormValid = Object.values(formErrors).every((error) => error === '') &&
      formData.email.trim() !== '' && formData.password.trim() !== '';

    if (isFormValid) {
      console.log('Form submitted successfully!');
      // Add the submitted form data to the list
      setSubmittedUsers((prevUsers) => [...prevUsers, formData]);

      // Reset the form
      setFormData({
        email: '',
        password: '',
      });
      setFormErrors({
        email: '',
        password: '',
      });
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
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: 'Please enter a valid email address.',
      }));
    } else if (name === 'password' && value.length < 8) {
      setFormErrors((prevState) => ({
        ...prevState,
        password: 'Please enter a valid password with at least 8 characters.',
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
    formData.email.trim() === '' || formData.password.trim() === '';

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 my-5 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <small className="text-danger">{formErrors.email}</small>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
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

            <button
              type="submit"
              className={`btn btn-primary w-100 ${isLoading ? 'disabled' : ''}`}
              disabled={isFormDisabled || isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p>
              Don't have an account?{' '}
              <NavLink to="/register" className="text-decoration-none">
                Register
              </NavLink>
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-center">Submitted Users</h4>
            {submittedUsers.length > 0 ? (
              <ul className="list-group">
                {submittedUsers.map((user, index) => (
                  <li key={index} className="list-group-item">
                    <strong>Email:</strong> {user.email}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No users submitted yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
