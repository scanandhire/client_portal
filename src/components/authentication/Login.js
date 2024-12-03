import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const navigate = useNavigate();

    const testUser = 'tt';
    const testPassword = 'tp';

    const handleLogin = () => {
        if (username === testUser && password === testPassword) {
            localStorage.setItem('token', 'fake-token');
            navigate('/');
        } else {
            setHasError(true);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="text-center">Login</h2>
                {hasError && (
                    <Alert variant="warning" className="text-center">
                        Invalid credentials. Please try again.
                    </Alert>
                )}
                <form>
                    <div className="form-group mb-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
