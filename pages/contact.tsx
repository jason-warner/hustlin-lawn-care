import * as React from 'react';
import BottomNav from '../components/BottomNav';
import style from '../styles/Contact.module.scss';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import { Button } from '@mui/material';


const contact = () => {

    return (
        <div>
            <div className={style.heading}>
                <div className={style.title}>
                    <h1>Contact Us</h1>
                </div>
                <span>Fill out and submit the form below to contact us for a quote or questions on available services.</span>
            </div>
            <div className={style.formContainer}>
                <form name='Contact' >
                    <div className={style.nameContainer}>
                        <TextField sx={{ marginRight: '1.5rem' }} id="contact-name" label="First Name" variant="outlined" />
                        <TextField id="contact-name" label="Last Name" variant="outlined" />
                    </div>
                    <TextField fullWidth sx={{ width: '100%' }} id="contact-name" label="Email" variant="outlined" />
                    <Textarea sx={{ marginTop: '1.5rem', minHeight: '9rem' }} placeholder='Type here...' minRows={2} />
                    <div style={{ marginTop: '1.5rem', display: 'flex', width: '100%', justifyContent: 'center' }}>


                        <Button
                            color='success'
                            // sx={{ color: 'white', background: 'black', borderColor: 'white' }}
                            variant="contained"
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

export default contact;