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
        try {
            const res = await axiosClient.post('/hireme', formData);
            alert(`Hey ${formData.fullName}, ${res.data.message}`);

            // reset
            setFormData(
                {
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
                }
            )
        } catch (error) {
            alert('Something went wrong. Please try again. ' + error.message);
        }
    };

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
                            label="Phone Number"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                        />
                    </Stack>
                    <TextField
                        name="company"
                        label="Company / Project"
                        fullWidth
                        value={formData.company}
                        onChange={handleChange}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Budget</InputLabel>
                        <Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="">Select your budget</MenuItem>
                            <MenuItem value="below_500">Below $500</MenuItem>
                            <MenuItem value="500_1000">$500 - $1000</MenuItem>
                            <MenuItem value="1000_5000">$1000 - $5000</MenuItem>
                            <MenuItem value="above_5000">Above $5000</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl component="fieldset">
                        <Typography variant="subtitle1" mb={1}>Services Required</Typography>
                        <FormGroup row>
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
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ alignSelf: 'flex-start', px: 4, borderRadius: 2 }}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default HireMe;
