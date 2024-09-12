"use client";

import React, { useState } from 'react';
import { Grid, Typography, Box, Container, TextField, Alert, Button, CircularProgress } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './contact.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  phone: '',
  projectDescription: '',
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const internationalPhoneRegex = /^\+2519\d{8}$/;

    if (!values.firstName) {
      errors.firstName = 'First name is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!';
    }
    if (!values.companyName) {
      errors.companyName = 'Company name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format!';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    } else if (!internationalPhoneRegex.test(values.phone)) {
      errors.phone = 'Invalid phone number format (+251)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (formErrors[name]) formErrors[name] = '';
  };

  const handlePhoneChange = (value) => {
    const sanitizedValue = value.replace(/\s+/g, '');
    setFormValues({ ...formValues, phone: sanitizedValue });
    if (formErrors.phone) formErrors.phone = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate(formValues);

    if (isValid) {
      try {
        setIsSubmitting(true);

        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        const templateParams = {
          recipient_name: 'Nexa Addis',
          from_email: formValues.email,
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          company_name: formValues.companyName,
          phone_number: formValues.phone,
          message: formValues.projectDescription,
        };

        // Sending the email
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setFormValues(initialValues);

        // Display success message
        Swal.fire({
          title: 'Good job!',
          text: 'Thank you for reaching out! We will contact you soon.',
          icon: 'success',
          confirmButtonColor: '#fb8122',
          background: '#f7f7f7',
        });

        console.log('Email successfully sent:', response);
      } catch (error) {
        console.error('Error occurred while submitting the form:', error);

        // Display error message
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong, please try again later.',
          icon: 'error',
          confirmButtonColor: '#fb8122',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: '4rem', sm: '6rem', md: '8rem' }, position: 'relative' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Left Image Section */}
          <Grid item xs={12} md={6}>
            <div className="bg-cover bg-center h-60 md:h-[30rem] relative">
              <img src="/image/about.jpg" alt="About Us" className="object-cover w-full h-full" />
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-white text-center lg:text-6xl">
                WHO ARE WE?
              </h1>
            </div>
          </Grid>

          {/* Right Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 4 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: '800', color: '#1c2229' }}
              >
                Let's get <span style={{ color: '#fb8122' }}>in touch!</span>
              </Typography>
            </Box>

            <Grid container spacing={3} component="form" onSubmit={handleSubmit}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="First Name*"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formValues.firstName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.firstName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.firstName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Last Name*"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formValues.lastName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.lastName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.lastName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Business Email*"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.email && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.email}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Company Name*"
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formValues.companyName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.companyName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.companyName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <MuiTelInput
                  label="Phone Number*"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formValues.phone}
                  onChange={handlePhoneChange}
                  defaultCountry="ET"
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.phone && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.phone}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Project Description"
                  id="projectDescription"
                  name="projectDescription"
                  type="text"
                  multiline
                  rows={4}
                  value={formValues.projectDescription}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ py: 1.5, fontSize: '1rem', borderRadius: '8px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
