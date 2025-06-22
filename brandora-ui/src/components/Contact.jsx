import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

import {
    Box,
    Button,
    Stack,
    TextField,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosClient.post('https://brandora-server.onrender.com/api/users/contact', formData);
            alert(`Hey ${formData.fullName}, ${res.data.message}`);

            // Reset
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            alert('Something went wrong. Please try again. ' + error.message);
        }
    };

    const inputCentralizeStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: 1,
            '& fieldset': {
                border: `1px solid ${theme.palette.text.secondary}`, // Normal border
            },
            '&:hover fieldset': {
                borderColor: theme.palette.text.primary, // Hover border
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.text.primary, // Focus border
                borderWidth: '1px', // match your normal border
            },
        },
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', px: 2, py: 6 }}>
            <Typography variant="h3" gutterBottom textAlign="center">
                Contact Us
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" textAlign="center" mb={4}>
                We'd love to hear from you! Please fill out the form below.
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        name="fullName"
                        label="Full Name"
                        fullWidth
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        variant="outlined"
                        sx={inputCentralizeStyle}
                    />

                    <Stack direction={isSmall ? 'column' : 'row'} spacing={2}>
                        <TextField
                            name="email"
                            label="Email"
                            fullWidth
                            required
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            sx={inputCentralizeStyle}
                        />
                        <TextField
                            name="phone"
                            label="Phone Number (optional)"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            sx={inputCentralizeStyle}
                        />
                    </Stack>

                    <TextField
                        name="subject"
                        label="Subject"
                        fullWidth
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        sx={inputCentralizeStyle}
                    />

                    <TextField
                        name="message"
                        label="Your Message"
                        fullWidth
                        multiline
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        sx={inputCentralizeStyle}
                    />

                    <Button
                        type="submit"
                        variant="outlined"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                            alignSelf: 'flex-start',
                            px: 4,
                            color: 'text.secondary',
                            border: `1px dotted `,
                            bgcolor: 'transparent'
                        }}
                    >
                        Send Message
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default Contact;
