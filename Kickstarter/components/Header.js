import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddSharpIcon from '@mui/icons-material/AddSharp';

const Header = () => {
    return (
        <AppBar color='primary' position='static'>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        &sdot;&sdot;&sdot;&nbsp;&nbsp;CRYPTO KNIGHT&nbsp;&nbsp;&sdot;&sdot;&sdot;
                    </Typography>
                    <Button color='primary' variant='contained' disableElevation startIcon={<AddSharpIcon />}>
                        Create Campaign
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;