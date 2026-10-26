/**
 * Enquiry Form component.
 * Accessible, validated contact form with demo submission flow.
 * Submission logic is isolated for easy backend connection later.
 */

import { useState } from 'react'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  garmentType: '',
  designDescription: '',
  preferredColours: '',
  desiredDate: '',
  referenceImage: '',
  additionalNotes: '',
}

export default function EnquiryForm({ onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear field error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!values.name.trim()) newErrors.name = 'Please enter your name.'
    if (!values.phone.trim()) newErrors.phone = 'Please enter your phone number.'
    else if (!/^[\d\s\-\+\(\)]{7,}$/.test(values.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    if (!values.garmentType.trim()) {
      newErrors.garmentType = 'Please tell us the type of work or garment.'
    }
    if (!values.designDescription.trim()) {
      newErrors.designDescription = 'Please describe your design idea.'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    // Demo submission flow — no backend connected yet.
    // Replace the setTimeout block below with a real API call.
    setTimeout(() => {
      setStatus('success')
      if (onSubmit) onSubmit(values)
    }, 1200)
  }

  if (status === 'success') {
    return (
      <div className="enquiry-form enquiry-form--success">
        <div className="enquiry-success">
          <h3>Thank you, {values.name.split(' ')[0]}.</h3>
          <p>
            Your enquiry has been received. We will review your design details
            and get back to you about availability. Each piece is handcrafted
            with care, so your order is confirmed only after we discuss your
            requirements and confirm an available slot.
          </p>
          <button
            className="btn btn--primary"
            onClick={() => {
              setValues(initialValues)
              setErrors({})
              setStatus(null)
            }}
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name <span className="field-required">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="field-error">{errors.name}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number <span className="field-required">*</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="field-error">{errors.phone}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address (optional)</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="field-error">{errors.email}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="garmentType">Type of Work or Garment <span className="field-required">*</span></label>
          <input
            id="garmentType"
            name="garmentType"
            type="text"
            value={values.garmentType}
            onChange={handleChange}
            placeholder="e.g. Blouse, Saree, Kurta, Lehenga"
            required
            aria-invalid={!!errors.garmentType}
            aria-describedby={errors.garmentType ? 'garmentType-error' : undefined}
          />
          {errors.garmentType && (
            <p id="garmentType-error" className="field-error">{errors.garmentType}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="designDescription">Design Description <span className="field-required">*</span></label>
          <textarea
            id="designDescription"
            name="designDescription"
            value={values.designDescription}
            onChange={handleChange}
            placeholder="Describe the design, motifs, or embroidery you envision."
            rows="4"
            required
            aria-invalid={!!errors.designDescription}
            aria-describedby={errors.designDescription ? 'designDescription-error' : undefined}
          />
          {errors.designDescription && (
            <p id="designDescription-error" className="field-error">{errors.designDescription}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="preferredColours">Preferred Colours</label>
          <input
            id="preferredColours"
            name="preferredColours"
            type="text"
            value={values.preferredColours}
            onChange={handleChange}
            placeholder="e.g. Ivory, gold, sage green"
          />
        </div>

        <div className="form-field">
          <label htmlFor="desiredDate">Desired Completion Date (optional)</label>
          <input
            id="desiredDate"
            name="desiredDate"
            type="date"
            value={values.desiredDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="referenceImage">Reference Image URL (optional)</label>
          <input
            id="referenceImage"
            name="referenceImage"
            type="url"
            value={values.referenceImage}
            onChange={handleChange}
            placeholder="https://example.com/reference.jpg"
          />
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="additionalNotes">Additional Notes (optional)</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={values.additionalNotes}
            onChange={handleChange}
            placeholder="Any other details you would like to share."
            rows="3"
          />
        </div>
      </div>

      <div className="availability-notice small">
        <p className="availability-notice-text">
          Each creation receives the time and attention it deserves. New orders
          are accepted according to availability. Your order is confirmed only
          after we discuss your requirements and an available slot.
        </p>
      </div>

      <div className="form-actions">
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'submitting'}
          className="btn--block"
        >
          {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
        </Button>
      </div>
    </form>
  )
}

import Button from './Button'
