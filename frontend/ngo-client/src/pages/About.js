import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';
import { API_BASE_URL } from '../config';
function About() {
    const [ourStory, setOurStory] = useState(null);
    const [coreValues, setCoreValues] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [storyRes, valuesRes, programsRes, teamRes] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/aboutus/our-story/'),
                    axios.get('http://127.0.0.1:8000/api/aboutus/core-values/'),
                    axios.get('http://127.0.0.1:8000/api/aboutus/programs/'),
                    axios.get('http://127.0.0.1:8000/api/aboutus/team-members/')
                ]);
                setOurStory(storyRes.data[0]);
                setCoreValues(valuesRes.data);
                setPrograms(programsRes.data);
                setTeamMembers(teamRes.data);
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
                <p className="mt-2">Loading About Us...</p>
            </div>
        );
    }

    return (
        <div className="about-container">
            {/* ====== HERO SECTION ====== */}
            <section className="about-hero">
                <div className="container text-center text-white">
                    <h1 className="display-3 fw-bold">About Us</h1>
                    <p className="lead">Making a difference, one step at a time.</p>
                </div>
            </section>

            {/* ====== OUR STORY ====== */}
            <section className="our-story py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="story-card">
                                <h2 className="text-center mb-4">Our Story</h2>
                                <p className="lead text-center">
                                    {ourStory?.content || 'Loading story...'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== CORE VALUES ====== */}
            <section className="core-values py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Our Core Values</h2>
                    <div className="row justify-content-center">
                        {coreValues.map((value) => (
                            <div className="col-md-3 col-sm-6 mb-4" key={value.id}>
                                <div className="value-card text-center">
                                    <h4>{value.value}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== PROGRAMS ====== */}
            <section className="programs py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Programs</h2>
                    <div className="row">
                        {programs.map((program) => (
                            <div className="col-md-4 mb-4" key={program.id}>
                                <div className="program-card">
                                    <h4 className="text-primary">{program.name}</h4>
                                    <p>{program.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== TEAM MEMBERS ====== */}
            <section className="team py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Meet Our Team</h2>
                    <div className="row justify-content-center">
                        {teamMembers.map((member) => (
                            <div className="col-md-4 mb-4" key={member.id}>
                                <div className="team-card text-center">
                                    <h4>{member.name}</h4>
                                    <p className="text-muted">{member.role}</p>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CALL TO ACTION ====== */}
            <section className="cta-section py-5 text-white text-center">
                <div className="container">
                    <h2>Become a Part of the Change</h2>
                    <p className="lead">Volunteer today or donate to help us transform lives.</p>
                    <div className="mt-4">
                        <button className="btn btn-light btn-lg me-3">Donate Now</button>
                        <button className="btn btn-outline-light btn-lg">Volunteer Today</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;