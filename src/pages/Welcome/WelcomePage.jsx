import React from 'react';
import { Title, Subtitle, Button, PageWrapper } from './styles';


const WelcomePage = () => {
  return (
    <PageWrapper>
      <Title>Welcome to My Beautiful Website</Title>
      <Subtitle>Explore and enjoy our content.</Subtitle>
      <Button to="/main">Go to the application</Button>
    </PageWrapper>
  );
};

export default WelcomePage;
