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
            const res = await axiosClient.post('/contact', formData);
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
                        />
                        <TextField
                            name="phone"
                            label="Phone Number (optional)"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                        />
                    </Stack>

                    <TextField
                        name="subject"
                        label="Subject"
                        fullWidth
                        required
                        value={formData.subject}
                        onChange={handleChange}
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
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ alignSelf: 'flex-start', px: 4, borderRadius: 2 }}
                    >
                        Send Message
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default Contact;
