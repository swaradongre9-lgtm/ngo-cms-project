import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
    const [visionMission, setVisionMission] = useState(null);
    const [statistics, setStatistics] = useState([]);
    const [initiatives, setInitiatives] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [visionRes, statsRes, initiativesRes] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/home/vision-mission/'),
                    axios.get('http://127.0.0.1:8000/api/home/statistics/'),
                    axios.get('http://127.0.0.1:8000/api/home/initiatives/')
                ]);
                setVisionMission(visionRes.data[0]);
                setStatistics(statsRes.data);
                setInitiatives(initiativesRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading content...</p>
            </div>
        );
    }

    return (
        <div className="home-container">
            {/* ====== HERO BANNER ====== */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-white">
                            <h1 className="display-4 fw-bold">Making a Difference Together</h1>
                            <p className="lead mt-3">
                                {visionMission?.mission_description || 'Empowering communities through education and healthcare'}
                            </p>
                            <div className="mt-4">
                                <button className="btn btn-light btn-lg me-3">Donate Now</button>
                                <button className="btn btn-outline-light btn-lg">Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop" 
                                alt="NGO Hero"
                                className="img-fluid rounded-3 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== VISION & MISSION ====== */}
            <section className="vision-mission py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <h3 className="text-primary">{visionMission?.mission_title || 'Our Mission'}</h3>
                                <p className="mt-3">{visionMission?.mission_description || 'Loading mission...'}</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <h3 className="text-primary">{visionMission?.vision_title || 'Our Vision'}</h3>
                                <p className="mt-3">{visionMission?.vision_description || 'Loading vision...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== STATISTICS ====== */}
            <section className="stats-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Our Impact</h2>
                    <div className="row text-center">
                        {statistics.map((stat) => (
                            <div className="col-md-3 col-sm-6 mb-4" key={stat.id}>
                                <div className="stat-card">
                                    <h2 className="display-4 fw-bold text-primary">{stat.value}</h2>
                                    <p className="mb-0">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== INITIATIVES ====== */}
            <section className="initiatives-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Our Programs</h2>
                    <div className="row">
                        {initiatives.map((initiative) => (
                            <div className="col-md-4 mb-4" key={initiative.id}>
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body">
                                        <h4 className="card-title text-primary">{initiative.title}</h4>
                                        <p className="card-text">{initiative.description}</p>
                                        <button className="btn btn-outline-primary btn-sm">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CALL TO ACTION ====== */}
            <section className="cta-section py-5 text-white text-center">
                <div className="container">
                    <h2>Join Us in Making a Difference</h2>
                    <p className="lead mt-3">Your support can change lives</p>
                    <div className="mt-4">
                        <button className="btn btn-light btn-lg me-3">Donate Now</button>
                        <button className="btn btn-outline-light btn-lg">Volunteer</button>
                    </div>
                </div>
            </section>

            {/* ====== FOOTER ====== */}
            <footer className="footer-section bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>NGO CMS</h5>
                            <p className="small">Empowering communities through education, healthcare, and livelihood programs.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled small">
                                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                                <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
                                <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact</h5>
                            <p className="small">Email: info@ngo.com</p>
                            <p className="small">Phone: +91 98765 43210</p>
                        </div>
                    </div>
                    <div className="text-center mt-3 pt-3 border-top border-secondary">
                        <small>&copy; 2026 NGO CMS. All rights reserved.</small>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;