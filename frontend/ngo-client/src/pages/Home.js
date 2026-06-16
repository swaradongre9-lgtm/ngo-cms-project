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
            {/* ====== HERO BANNER WITH IMAGE ====== */}
            <section className="hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-white">
                            <h1 className="display-3 fw-bold">Making a Difference Together</h1>
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
                                src="https://img.freepik.com/free-vector/children-holding-hands-around-globe_53876-61263.jpg" 
                                alt="NGO Hero"
                                className="img-fluid rounded-3 shadow-lg"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== VISION & MISSION WITH IMAGES ====== */}
            <section className="vision-mission py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-lg border-0 mission-card">
                                <div className="card-body text-center p-4">
                                    <img 
                                        src="https://img.icons8.com/fluency/96/000000/mission-of-a-company.png" 
                                        alt="Mission"
                                        className="mb-3"
                                    />
                                    <h3 className="card-title text-primary">
                                        {visionMission?.mission_title || 'Our Mission'}
                                    </h3>
                                    <p className="card-text">
                                        {visionMission?.mission_description || 'Loading mission...'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-lg border-0 vision-card">
                                <div className="card-body text-center p-4">
                                    <img 
                                        src="https://img.icons8.com/fluency/96/000000/vision.png" 
                                        alt="Vision"
                                        className="mb-3"
                                    />
                                    <h3 className="card-title text-primary">
                                        {visionMission?.vision_title || 'Our Vision'}
                                    </h3>
                                    <p className="card-text">
                                        {visionMission?.vision_description || 'Loading vision...'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== STATISTICS SECTION ====== */}
            <section className="stats-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Our Impact</h2>
                    <div className="row text-center">
                        {statistics.map((stat, index) => (
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

            {/* ====== INITIATIVES/PROGRAMS WITH IMAGES ====== */}
            <section className="initiatives-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Our Programs</h2>
                    <div className="row">
                        {initiatives.map((initiative) => (
                            <div className="col-md-4 mb-4" key={initiative.id}>
                                <div className="card h-100 shadow-lg border-0 initiative-card">
                                    <img 
                                        src={initiative.image_url || "https://img.freepik.com/free-vector/education-concept-illustration_114360-1315.jpg"}
                                        className="card-img-top" 
                                        alt={initiative.title}
                                        style={{ height: '220px', objectFit: 'cover' }}
                                    />
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

            {/* ====== CALL TO ACTION WITH IMAGE ====== */}
            <section className="cta-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-white">
                            <h2>Join Us in Making a Difference</h2>
                            <p className="lead mt-3">Your support can change lives. Donate, volunteer, or partner with us.</p>
                            <div className="mt-4">
                                <button className="btn btn-light btn-lg me-3">Donate Now</button>
                                <button className="btn btn-outline-light btn-lg">Volunteer</button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img 
                                src="https://img.freepik.com/free-vector/volunteers-planting-trees_53876-68500.jpg" 
                                alt="Volunteers"
                                className="img-fluid rounded-3 shadow-lg"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PARTNERS SECTION ====== */}
            <section className="partners-section py-5">
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold">Our Partners</h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-3 col-md-2">
                            <img src="https://img.icons8.com/color/80/000000/google-logo.png" alt="Google" className="img-fluid" />
                        </div>
                        <div className="col-3 col-md-2">
                            <img src="https://img.icons8.com/color/80/000000/microsoft.png" alt="Microsoft" className="img-fluid" />
                        </div>
                        <div className="col-3 col-md-2">
                            <img src="https://img.icons8.com/color/80/000000/amazon.png" alt="Amazon" className="img-fluid" />
                        </div>
                        <div className="col-3 col-md-2">
                            <img src="https://img.icons8.com/color/80/000000/facebook.png" alt="Facebook" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== FOOTER ====== */}
            <footer className="footer-section bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>NGO CMS</h5>
                            <p>Empowering communities through education, healthcare, and livelihood programs.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                                <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
                                <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: info@ngo.com</p>
                            <p>Phone: +91 98765 43210</p>
                            <div className="social-icons">
                                <img src="https://img.icons8.com/color/30/000000/facebook.png" alt="FB" className="me-2" />
                                <img src="https://img.icons8.com/color/30/000000/twitter.png" alt="Twitter" className="me-2" />
                                <img src="https://img.icons8.com/color/30/000000/linkedin.png" alt="LinkedIn" className="me-2" />
                                <img src="https://img.icons8.com/color/30/000000/instagram-new.png" alt="Instagram" />
                            </div>
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