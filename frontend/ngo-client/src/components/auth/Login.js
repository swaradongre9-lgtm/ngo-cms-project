import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
                username: username,
                password: password
            });

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            alert('Login successful!');
            navigate('/');
        } catch (error) {
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0">
                                {/* Image Side */}
                                <div className="col-md-6 d-none d-md-block">
                                    <div className="card-body h-100 d-flex flex-column justify-content-center p-4" 
                                         style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', borderRadius: '0.375rem 0 0 0.375rem' }}>
                                        <div className="text-center text-white">
                                            <h1 className="display-6 fw-bold mb-3">Welcome Back!</h1>
                                            <img 
                                                src="https://img.icons8.com/fluency/96/000000/ngo.png" 
                                                alt="NGO Logo" 
                                                className="mb-3"
                                                style={{ width: '100px' }}
                                            />
                                            <h3 className="mb-3">NGO CMS</h3>
                                            <p className="mb-0">"Empowering Lives, Creating Opportunities"</p>
                                            <div className="mt-4">
                                                <img 
                                                    src="https://img.icons8.com/color/48/000000/children.png" 
                                                    alt="Children" 
                                                    className="me-2"
                                                />
                                                <img 
                                                    src="https://img.icons8.com/color/48/000000/education.png" 
                                                    alt="Education" 
                                                    className="me-2"
                                                />
                                                <img 
                                                    src="https://img.icons8.com/color/48/000000/health.png" 
                                                    alt="Health" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Side */}
                                <div className="col-md-6">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="text-center mb-4">
                                            <h3 className="fw-bold">Sign In</h3>
                                            <p className="text-muted">Access your NGO CMS account</p>
                                        </div>

                                        {error && (
                                            <div className="alert alert-danger">{error}</div>
                                        )}

                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Username</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-person"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Password</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-lock"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="remember" />
                                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100 py-2"
                                                disabled={loading}
                                            >
                                                {loading ? 'Logging in...' : 'Login'}
                                            </button>
                                        </form>

                                        <hr className="my-4" />

                                        <div className="text-center">
                                            <p className="mb-0">
                                                Don't have an account? 
                                                <a href="/register" className="text-primary fw-bold ms-1">Register here</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;