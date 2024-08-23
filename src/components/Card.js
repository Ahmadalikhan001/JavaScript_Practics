import React from 'react';
import { Card as MuiCard, CardContent, CardHeader, IconButton, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const Card = ({ title, lastEdited, nodeCount, gatesCount, requirementsCount }) => {
    return (
        <MuiCard sx={{ border: '2px solid #6A0DAD', borderRadius: '15px', boxShadow: 2, '&:hover': { boxShadow: 6 } }}>
            <CardHeader
                title={<Typography variant="h6" sx={{ color: '#6A0DAD' }}>{title}</Typography>}
                action={
                    <Box display="flex" gap={1}>
                        <IconButton sx={{ color: '#6A0DAD' }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#6A0DAD' }}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" mb={2}>
                    Last edited: {lastEdited}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <StatItem icon={<CircleIcon />} value={nodeCount} label="Nodes" />
                    <StatItem icon={<ArrowUpwardIcon />} value={gatesCount} label="Gates" />
                    <StatItem icon={<FileCopyIcon />} value={requirementsCount} label="Requirements" />
                </Box>
            </CardContent>
        </MuiCard>
    );
};

const StatItem = ({ icon, value, label }) => (
    <Box textAlign="center">
        <Box>{icon}</Box>
        <Typography variant="h6" sx={{ color: '#6A0DAD' }}>{value}</Typography>
        <Typography variant="caption" color="text.secondary">{label}</Typography>
    </Box>
);

export default Card;
