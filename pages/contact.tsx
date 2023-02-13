import * as React from 'react';
import BottomNav from '../components/BottomNav';
import style from '../styles/Contact.module.scss';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import { Button, FormHelperText } from '@mui/material';

const Contact = () => {


    const [form, setForm] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [hasError, setHasError] = React.useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
    });

    const errorMessage = 'This field is required.';
    const messageStyle = {
        marginTop: '1.5rem',
        minHeight: '9rem',
        borderColor: hasError.message ? 'rgb(211,47,47)' : '#C4C4C4',
        'textarea': {
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: hasError.message ? 'rgb(211,47,47)' : '#808080'
            }
        }
    }

    const checkErrors = () => ({
        firstName: !form.firstName,
        lastName: !form.lastName,
        email: !form.email,
        message: !form.message
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const errors = checkErrors();
        const hasAnyErrors = (
            errors.email
            || errors.message
            || errors.firstName
            || errors.lastName
        );
        setHasError(checkErrors());
        if (hasAnyErrors) return;
        if (!hasAnyErrors) {
            try {
                const res = await fetch(`api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                })

                const { error } = await res.json();

                if (error) {
                    // show error toast
                    return
                } else {
                    // show success toast
                    setForm({
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: '',
                    });
                }
            } catch (error) {
                // show error toast
            }
        }
    }

    return (
        <div>
            <div className={style.heading}>
                <div className={style.title}>
                    <h1>Contact Us</h1>
                </div>
                <span>Fill out and submit the form below to contact us for a quote or questions on available services.</span>
            </div>
            <div className={style.formContainer}>
                <form className={style.form} name='Contact' >
                    <div className={style.nameContainer}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                error={hasError.firstName}
                                value={form.firstName}
                                sx={{ marginRight: '1.5rem' }}
                                id="contact-name"
                                label="First Name"
                                variant="outlined"
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            />
                            {hasError.firstName && <FormHelperText >
                                {errorMessage}
                            </FormHelperText>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                error={hasError.lastName}
                                id="contact-name"
                                label="Last Name"
                                variant="outlined"
                                value={form.lastName}
                                onChange={(e) => setForm({ ...form, lastName: e.target.value })}

                            />
                            {hasError.lastName && <FormHelperText >
                                {errorMessage}
                            </FormHelperText>}
                        </div>
                    </div>
                    <TextField
                        error={hasError.email}
                        fullWidth
                        sx={{ width: '100%' }}
                        id="contact-name"
                        label="Email"
                        variant="outlined"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {hasError.email && <FormHelperText>
                        {errorMessage}
                    </FormHelperText>}
                    <Textarea
                        error={hasError.message}
                        sx={messageStyle}
                        placeholder='Type here...'
                        minRows={2}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    {hasError.message && <FormHelperText >
                        {errorMessage}
                    </FormHelperText>}
                    <div style={{ marginTop: '1.5rem', display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <Button
                            color='success'
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
            <BottomNav />
        </div>
    );
}

export default Contact;

