import React, { useState } from 'react';
import axiosClient from '../api/axiosClient'
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function HireMe() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: '',
        services: {
            website: false,
            marketing: false,
            seo: false,
            branding: false,
        },
    });

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            services: {
                ...prev.services,
                [name]: checked,
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert services object into a string list
        const selectedServices = Object.entries(formData.services)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(', '); // "website, marketing"

        const payload = {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            companyOrProject: formData.company,
            budget: formData.budget,
            serviceRequired: selectedServices,
            message: formData.message
        };

        try {
            const res = await axiosClient.post('https://brandora-server.onrender.com/api/users/hireme', payload);
            alert(`Hey ${formData.fullName}, ${res.data.message}`);

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                budget: '',
                message: '',
                services: {
                    website: false,
                    marketing: false,
                    seo: false,
                    branding: false,
                },
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
    }

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', px: 2, py: 6 }}>
            <Typography variant="h3" gutterBottom textAlign="center">
                Hire Me
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" textAlign="center" mb={4}>
                Let's build something amazing together. Fill the form and we’ll get in touch.
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
                            label="Phone Number"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            sx={inputCentralizeStyle}
                        />
                    </Stack>
                    <TextField
                        name="company"
                        label="Company / Project"
                        fullWidth
                        value={formData.company}
                        onChange={handleChange}
                        sx={inputCentralizeStyle}
                    />

                    <FormControl fullWidth sx={inputCentralizeStyle}>
                        <InputLabel>Budget</InputLabel>
                        <Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: 'transparent',  // 💥 Removes the white box
                                        boxShadow: 'none',               // Optional: removes default shadow
                                        backdropFilter: 'blur(20px)',     // Optional: nice glass effect
                                    },
                                },
                            }}
                        >
                            {[
                                { value: '', label: 'Select your budget' },
                                { value: 'below_500', label: 'Below $500' },
                                { value: '500_1000', label: '$500 - $1000' },
                                { value: '1000_5000', label: '$1000 - $5000' },
                                { value: 'above_5000', label: 'Above $5000' },
                            ].map(({ value, label }) => (
                                <MenuItem
                                    key={value}
                                    value={value}
                                    sx={{
                                        color: 'text.secondary',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&.Mui-selected:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    <FormControl component="fieldset" >
                        <Typography variant="subtitle1" mb={1}>Services Required</Typography>
                        <FormGroup row >
                            <FormControlLabel
                                control={<Checkbox checked={formData.services.website} onChange={handleServiceChange} name="website" />}
                                label="Website"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.services.marketing} onChange={handleServiceChange} name="marketing" />}
                                label="Marketing"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.services.seo} onChange={handleServiceChange} name="seo" />}
                                label="SEO"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.services.branding} onChange={handleServiceChange} name="branding" />}
                                label="Branding"
                            />
                        </FormGroup>
                    </FormControl>

                    <TextField
                        name="message"
                        label="Project Description / Message"
                        fullWidth
                        multiline
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
                        Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default HireMe;
