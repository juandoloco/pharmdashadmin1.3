// src/LoginPage.js
import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { Card, CardContent, TextField, Button, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/farmacia.jpg)', // Ruta de la imagen en la carpeta public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    card: {
        maxWidth: 400,
        width: '100%',
        padding: theme.spacing(2),
        boxShadow: theme.shadows[5],
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const submit = (e) => {
        e.preventDefault();
        login({ username, password }).catch(() => notify('Invalid email or password'));
    };

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2" className={classes.title} align="center">
                            Iniciar Sesión
                        </Typography>
                        <form onSubmit={submit}>
                            <TextField
                                label="Usuario"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                className={classes.button}
                            >
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Container>
            <Notification />
        </div>
    );
};

export default LoginPage;
