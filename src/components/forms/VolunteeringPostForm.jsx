import React, { useState } from 'react';

const initialFormState = {
  title: '',
  orgName: '',
  category: '',
  startDate: '',
  endDate: '',
  numOfDays: '',
  coverImage: null, // Initialize as null for file input
};

const VolunteeringPostForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedEvents, setSubmittedEvents] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? files[0] : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));

    // Validate the input
    let errors = { ...formErrors };

    if (name === 'numOfDays' && (!Number.isInteger(+fieldValue) || +fieldValue <= 0)) {
      errors.numOfDays = 'Number of days must be a positive integer.';
    } else if (name === 'orgName' && fieldValue.length < 3) {
      errors.orgName = 'Organization name must be at least 3 characters long.';
    } else if (name === 'category' && fieldValue.length < 3) {
      errors.category = 'Category name must be at least 3 characters long.';
    } else if (name === 'title' && fieldValue.length < 3) {
      errors.title = 'Title name must be at least 3 characters long.';
    } else if (name === 'startDate' && !Date.parse(fieldValue)) {
      errors.startDate = 'Please enter a valid start date.';
    } else if (name === 'endDate' && !Date.parse(fieldValue)) {
      errors.endDate = 'Please enter a valid end date.';
    } else {
      errors[name] = ''; // Clear the error if the field is valid
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Final validation check
    const isFormValid = Object.values(formErrors).every((error) => error === '') &&
      Object.values(formData).every((field) => {
        if (typeof field === 'string') {
          return field.trim() !== ''; // Only trim if it's a string
        }
        return field !== null && field !== undefined; // Check other types as well
      });

    if (isFormValid) {
      console.log('Form submitted successfully!');
      // Add the submitted form data to the list
      setSubmittedEvents((prevEvents) => [...prevEvents, formData]);

      // Reset the form
      setFormData(initialFormState);
      setFormErrors({});
    } else {
      console.log('Form contains validation errors or empty fields.');
    }
    setIsLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Event Form</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
            value={formData.title}
            onChange={handleInputChange}
          />
          {formErrors.title && <div className="invalid-feedback">{formErrors.title}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="orgName" className="form-label">Organization Name:</label>
          <input
            type="text"
            name="orgName"
            className={`form-control ${formErrors.orgName ? 'is-invalid' : ''}`}
            value={formData.orgName}
            onChange={handleInputChange}
          />
          {formErrors.orgName && <div className="invalid-feedback">{formErrors.orgName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input
            type="text"
            name="category"
            className={`form-control ${formErrors.category ? 'is-invalid' : ''}`}
            value={formData.category}
            onChange={handleInputChange}
          />
          {formErrors.category && <div className="invalid-feedback">{formErrors.category}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <input
            type="date"
            name="startDate"
            className={`form-control ${formErrors.startDate ? 'is-invalid' : ''}`}
            value={formData.startDate}
            onChange={handleInputChange}
          />
          {formErrors.startDate && <div className="invalid-feedback">{formErrors.startDate}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <input
            type="date"
            name="endDate"
            className={`form-control ${formErrors.endDate ? 'is-invalid' : ''}`}
            value={formData.endDate}
            onChange={handleInputChange}
          />
          {formErrors.endDate && <div className="invalid-feedback">{formErrors.endDate}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="numOfDays" className="form-label">Number of Days:</label>
          <input
            type="number"
            name="numOfDays"
            className={`form-control ${formErrors.numOfDays ? 'is-invalid' : ''}`}
            value={formData.numOfDays}
            onChange={handleInputChange}
          />
          {formErrors.numOfDays && <div className="invalid-feedback">{formErrors.numOfDays}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">Cover Image:</label>
          <input
            type="file"
            name="coverImage"
            className="form-control"
            onChange={handleInputChange}
          />
          {formErrors.coverImage && <div className="invalid-feedback">{formErrors.coverImage}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {submittedEvents.length > 0 && (
        <div className="mt-4">
          <h2>Submitted Events</h2>
          <ul className="list-group">
            {submittedEvents.map((event, index) => (
                <>
              <li key={index} className="list-group-item">{event.title} - {event.orgName}</li>
              <li>{event.coverImage}</li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VolunteeringPostForm;

