import React, { useState } from 'react';
import VerifyForm from './VerifyForm';
import VerifyMessage from './VerifyMessage';

const data = {
  name: 'Mohit kumar',
  email: 'Mohit@gmail.com',
  organizationName: 'BPIT',
  certificationTopic: 'SIH Internal Hackathon',
  certificateType: 'Certificate of Participation',
  validTill: '10/10/2030',
};

const VerifyCertificate = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    // Perform your verification logic here
    // Set isVerified to true if verification is successful
    setIsVerified(true);
  };

  return (
    <div className='text-black'>
      <VerifyForm onVerification={handleVerification} />
      {isVerified && <VerifyMessage {...data} />}
    </div>
  );
};

export default VerifyCertificate;
