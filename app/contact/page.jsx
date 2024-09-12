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
    <Box sx={{ position: 'relative' }}>
      {/* Hero Section */}
      <Box sx={{
        backgroundImage: 'url("https://i.imgur.com/KcHaWd7.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        position: 'relative',
        padding: { xs: '1rem', sm: '2rem', md: '3rem' }, // Reduced padding
        textAlign: { xs: 'center', md: 'left' }
      }}>
        <Box sx={{
          position: 'absolute',
          top: "0",
          left: "0",
          right: "0",
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
          height: '100%',
          width: '100%',
        }} />
        <Typography variant="h2" m="auto" pt="3rem" component="h1" sx={{ fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3.5rem" }, fontWeight: 'bold', zIndex: 1 }}>
          Contact Us
        </Typography>
      </Box>

      <Container sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>

          {/* Contact Information Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, backgroundColor: '#fff', height: '100%' }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: '800', mb: 3, fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' } }}>
                Contact Information
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Phone:</strong> +251 912 345 678
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Email:</strong> contact@nexaaddis.com
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> Addis Ababa, Ethiopia
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, backgroundColor: '#fff' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: '800', mb: 3, fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' } }}>
                Let's get <span style={{ color: '#fb8122' }}>in touch!</span>
              </Typography>

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

                <Grid item xs={12} md={6}>
                  <MuiTelInput
                    label="Phone Number*"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handlePhoneChange}
                    defaultCountry="ET"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
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
                    value={formValues.projectDescription}
                    onChange={handleChange}
                    size="small"
                    fullWidth
                    multiline
                    rows={4}
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
                    sx={{ bgcolor: '#fb8122', color: '#fff', ':hover': { bgcolor: '#e76f2b' } }}
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <CircularProgress size={24} /> : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
