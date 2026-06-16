import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
    const [visionMission, setVisionMission] = useState(null);
    const [statistics, setStatistics] = useState([]);
    const [initiatives, setInitiatives] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from APIs
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
                <p>Loading content...</p>
            </div>
        );
    }

    return (
        <div className="home-container">
            {/* Hero Banner Section */}
            <section className="hero-section text-white text-center py-5">
                <div className="container">
                    <h1 className="display-3 fw-bold">Making a Difference Together</h1>
                    <p className="lead mt-3">
                        {visionMission?.mission_description || 'Empowering communities through education and healthcare'}
                    </p>
                    <button className="btn btn-light btn-lg mt-3">Donate Now</button>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-mission py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center p-4">
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
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center p-4">
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

            {/* Statistics Section */}
            <section className="stats-section bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Impact</h2>
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

            {/* Initiatives Section */}
            <section className="initiatives-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Programs</h2>
                    <div className="row">
                        {initiatives.map((initiative) => (
                            <div className="col-md-4 mb-4" key={initiative.id}>
                                <div className="card h-100 shadow-sm border-0">
                                    {initiative.image_url && (
                                        <img 
                                            src={initiative.image_url} 
                                            className="card-img-top" 
                                            alt={initiative.title}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                    )}
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

            {/* Call to Action Section */}
            <section className="cta-section bg-primary text-white text-center py-5">
                <div className="container">
                    <h2>Join Us in Making a Difference</h2>
                    <p className="lead mt-3">Your support can change lives</p>
                    <div className="mt-4">
                        <button className="btn btn-light btn-lg me-3">Donate Now</button>
                        <button className="btn btn-outline-light btn-lg">Volunteer</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;