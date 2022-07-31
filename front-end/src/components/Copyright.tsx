import React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright({props}: any): JSX.Element {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          {/* <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '} */}
          {new Date().getFullYear()}
        </Typography>
    );
}