import { Box, TextField, Typography, Button } from "@mui/material";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ContactMe = () => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted successfully:', values);
        }
    });

    const textFieldStyles = {
        width: "100%",
        "& .MuiOutlinedInput-root": {
            color: "#ffffff",
            borderRadius: "50px",
            "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.15)",
                borderWidth: "1px",
            },
            "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#00b2ff",
            },
        },
        "& .MuiInputBase-input::placeholder": {
            color: "#ffffff",
            opacity: 0.4,
        },
    };

    return (
        <Box
            sx={{
                backgroundColor: "#08070e",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justify: "center",
                padding: "40px 24px",
                boxSizing: "border-box",
            }}
        >
            <Box sx={{ textAlign: "center", marginBottom: "48px" }}>
                <Typography
                    variant="h2"
                    sx={{
                        color: "white",
                        fontWeight: 600,
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        fontFamily: "sans-serif",
                        letterSpacing: "-0.02em",
                        marginBottom: "12px",
                    }}
                >
                    Let's [work] together
                </Typography>
                <Typography
                    sx={{
                        color: "#706F78",
                        fontSize: "1.05rem",
                        fontWeight: 400,
                    }}
                >
                    Open to full time, remote jobs or freelance projects.
                </Typography>
            </Box>

            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                autoComplete="off"
                sx={{
                    width: "100%",
                    maxWidth: "520px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "flex-start",
                }}
            >
                <TextField
                    name="name"
                    placeholder="Your Name"
                    variant="outlined"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={textFieldStyles}
                />

                <TextField
                    name="email"
                    placeholder="Your Email"
                    variant="outlined"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={textFieldStyles}
                />

                <TextField
                    name="message"
                    placeholder="Your message"
                    variant="outlined"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    multiline
                    rows={6}
                    fullWidth
                    sx={{
                        ...textFieldStyles,
                        "& .MuiOutlinedInput-root": {
                            ...textFieldStyles["& .MuiOutlinedInput-root"],
                            borderRadius: "20px",
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    sx={{
                        backgroundColor: "#00bcfd",
                        color: "#000000",
                        textTransform: "none",
                        fontWeight: "600",
                        fontSize: "1rem",
                        padding: "12px 32px",
                        borderRadius: "50px",
                        marginTop: "8px",
                        transition: "all 0.2s ease",
                        "&:hover": {
                            backgroundColor: "#00a5e0",
                            transform: "translateY(-1px)",
                        },
                        "&:active": {
                            transform: "translateY(0)",
                        },
                    }}
                >
                    Send Message
                </Button>
            </Box>
        </Box>
    );
};

export default ContactMe;