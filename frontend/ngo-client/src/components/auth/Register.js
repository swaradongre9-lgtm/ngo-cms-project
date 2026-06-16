import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        full_name: '',
        role: 'volunteer',
        password: '',
        password2: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
            await axios.post('http://127.0.0.1:8000/api/auth/register/', {
                username: formData.username,
                email: formData.email,
                full_name: formData.full_name,
                role: formData.role,
                password: formData.password,
                password2: formData.password2
            });

            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="card shadow-lg border-0">
                            <div className="row g-0">
                                {/* Form Side */}
                                <div className="col-md-6">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="text-center mb-4">
                                            <h3 className="fw-bold">Create Account</h3>
                                            <p className="text-muted">Join us in making a difference</p>
                                        </div>

                                        {error && (
                                            <div className="alert alert-danger">{error}</div>
                                        )}

                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-2">
                                                <label className="form-label fw-bold">Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Enter username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label fw-bold">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label fw-bold">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    className="form-control"
                                                    placeholder="Enter full name"
                                                    value={formData.full_name}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label fw-bold">Role</label>
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

                                            <div className="mb-2">
                                                <label className="form-label fw-bold">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    name="password2"
                                                    className="form-control"
                                                    placeholder="Confirm password"
                                                    value={formData.password2}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-success w-100 py-2"
                                                disabled={loading}
                                            >
                                                {loading ? 'Registering...' : 'Register'}
                                            </button>
                                        </form>

                                        <hr className="my-3" />

                                        <div className="text-center">
                                            <p className="mb-0">
                                                Already have an account?
                                                <a href="/login" className="text-success fw-bold ms-1">Login here</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="col-md-6 d-none d-md-block">
                                    <div className="card-body h-100 d-flex flex-column justify-content-center align-items-center p-4" 
                                         style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', borderRadius: '0 0.375rem 0.375rem 0' }}>
                                        <div className="text-center text-white">
                                            <img 
                                                src="https://img.icons8.com/fluency/96/000000/join.png" 
                                                alt="Join" 
                                                className="mb-3"
                                                style={{ width: '100px' }}
                                            />
                                            <h2 className="mb-3">Join Our Mission</h2>
                                            <p className="mb-0">"Together we can make a difference"</p>
                                            <div className="mt-4">
                                                <img 
                                                    src="https://img.icons8.com/color/48/000000/community.png" 
                                                    alt="Community" 
                                                    className="me-2"
                                                />
                                                <img 
                                                    src="https://img.icons8.com/color/48/000000/volunteer.png" 
                                                    alt="Volunteer" 
                                                    className="me-2"
                                                />
                                                <img 
                                                    src="https://img.icons8.com/color/48/000000/charity.png" 
                                                    alt="Charity" 
                                                />
                                            </div>
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

export default Register;