import React from 'react';
import { Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SectionTitle = ({ title, onClick }) => (
  <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onClick}>
    <IconButton>
      <ExpandMoreIcon />
    </IconButton>
    <Typography variant="h6" style={{ color: '#6A0DAD' }}>
      {title}
    </Typography>
  </div>
);

export default SectionTitle;
