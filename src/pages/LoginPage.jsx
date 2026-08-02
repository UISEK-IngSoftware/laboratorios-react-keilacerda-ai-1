import { Button, Box, TextField, Typography } from '@mui/material';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css';
import Spinner from '../components/Spinner';

export default function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();
        setLoading(true);
        login(username, password).then((response) => {
            localStorage.setItem("token", response.access_token);
            navigate('/');
        }).catch((error) => {
            console.error("Error en login:", error);
            setError("Error al iniciar sesión. Por favor verfica tus credenciales.");
        }).finally(() => {
            setLoading(false);
        });
    };

    if (loading) {
        return <Spinner />;
    }
    
    return (
        <Box component="form" className="login-form" onSubmit={handleSubmit}> 
            <Typography variant='h5' gutterBottom>
                Inicio de Sesión
            </Typography>
            <TextField
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            variant="outlined"
            fullWidth
            required
            />
            <TextField
            label="Constraseña"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
            fullWidth
            required
            />
            {error && (
                <Typography color="error">
                    {error}
                </Typography>
            )}
            <Button variant="contained" color="primary" type="submit">
                Iniciar Sesión
            </Button>
        </Box>
    );
}