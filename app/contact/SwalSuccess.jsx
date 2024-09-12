import React from 'react';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const SwalSuccess = () => {
  const router = useRouter();

  React.useEffect(() => {
    Swal.fire({
      title: 'Good job!',
      text: 'Thank you for reaching out! We will contact you soon.',
      icon: 'success',
      confirmButtonColor: '#fb8122',
      background: '#f7f7f7',
      showConfirmButton: false, // Hide the default OK button
      allowOutsideClick: false, // Prevent dismissal by clicking outside
      allowEscapeKey: false, // Prevent dismissal with the escape key
      html: `
        <div id="alert-content" style="text-align: center;">
          <h3>Thank you for reaching out! We will contact you soon.</h3>
        </div>
      `,
      onOpen: () => {
        // Disable scrolling and interactions
        document.body.style.overflow = 'hidden';
        document.querySelector('html').style.overflow = 'hidden';

        // Create a container for the MUI Button
        const alertContent = document.getElementById('alert-content');
        const buttonContainer = document.createElement('div');
        buttonContainer.style.margin = '12px';

        // Render the MUI Button into the SweetAlert2 modal
        ReactDOM.render(
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push('/')}
            style={{ backgroundColor: '#fb8122', color: 'white' }}
          >
            Go to Home
          </Button>,
          buttonContainer
        );

        alertContent.appendChild(buttonContainer);
      },
      onClose: () => {
        // Re-enable scrolling and interactions
        document.body.style.overflow = '';
        document.querySelector('html').style.overflow = '';
      }
    });
  }, [router]);

  return null; // This component does not render anything itself
};

export default SwalSuccess;
