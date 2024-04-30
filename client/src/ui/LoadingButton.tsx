import React from 'react';
import { Button } from '@mui/material';

const LoadingButton = ({ loading, onClick, children, ...rest }:any) => {
  return (
    <Button
      loading={loading}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default LoadingButton;
