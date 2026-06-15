import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        full_name: '',
        password: '',
        password2: '',
        role: 'volunteer'
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (formData.password !== formData.password2) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/auth/register/',
                data: {
                    email: formData.email,
                    username: formData.username,
                    full_name: formData.full_name,
                    password: formData.password,
                    password2: formData.password2,
                    role: formData.role
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log('Registration response:', response.data);
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            if (error.response) {
                console.error('Error data:', error.response.data);
                setError(JSON.stringify(error.response.data));
            } else if (error.request) {
                setError('Cannot connect to server. Make sure Django is running on port 8000');
            } else {
                setError('Registration failed: ' + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h3 className="text-center mb-0">Register for NGO CMS</h3>
                        </div>
                        <div className="card-body">
                            {error && (
                                <div className="alert alert-danger">
                                    <strong>Error:</strong> {error}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input 
                                        type="text" 
                                        name="username"
                                        className="form-control" 
                                        value={formData.username} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="full_name"
                                        className="form-control" 
                                        value={formData.full_name} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <select 
                                        name="role"
                                        className="form-control" 
                                        value={formData.role} 
                                        onChange={handleChange}
                                    >
                                        <option value="volunteer">Volunteer</option>
                                        <option value="staff">Staff</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="form-control" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        name="password2"
                                        className="form-control" 
                                        value={formData.password2} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-success w-100"
                                    disabled={loading}
                                >
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <a href="/login">Already have an account? Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;