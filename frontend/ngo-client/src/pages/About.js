import React from 'react';

function About() {
    return (
        <div className="container py-5">
            {/* Mission Section */}
            <div className="row mb-5">
                <div className="col-12 text-center mb-4">
                    <h1 className="display-5 fw-bold text-primary">About Us</h1>
                    <p className="lead">Making a difference in communities since 2010</p>
                </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="row mb-5">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-lg border-0">
                        <div className="card-body text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-bullseye" style={{ fontSize: '3rem', color: '#2c3e50' }}></i>
                            </div>
                            <h3 className="card-title text-primary">Our Mission</h3>
                            <p className="card-text">
                                To create a lasting impact in the lives of underprivileged children and communities 
                                by providing education, woman empowerment, and livelihood opportunities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-lg border-0">
                        <div className="card-body text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-eye" style={{ fontSize: '3rem', color: '#2c3e50' }}></i>
                            </div>
                            <h3 className="card-title text-primary">Our Vision</h3>
                            <p className="card-text">
                                A world where every child has access to quality education, healthcare, 
                                and the opportunity to achieve their full potential.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* History Timeline */}
            <div className="row mt-5">
                <div className="col-12 text-center mb-5">
                    <h2 className="fw-bold">Our Journey</h2>
                    <p className="lead">Key milestones that shaped our organization</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h3 className="display-6 fw-bold text-primary">2010</h3>
                            <h5>Founded</h5>
                            <p className="small">Started with 5 volunteers in a small community</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h3 className="display-6 fw-bold text-primary">2015</h3>
                            <h5>First School</h5>
                            <p className="small">Opened our first educational center</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h3 className="display-6 fw-bold text-primary">2020</h3>
                            <h5>10,000+ Lives</h5>
                            <p className="small">Reached over 10,000 children and families</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h3 className="display-6 fw-bold text-primary">2024</h3>
                            <h5>National Presence</h5>
                            <p className="small">Expanded to 5 states across the country</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="row mt-5 bg-light py-5 rounded">
                <div className="col-12 text-center mb-4">
                    <h2 className="fw-bold">Our Core Values</h2>
                </div>
                <div className="col-md-3 text-center">
                    <h4>💙 Compassion</h4>
                    <p>We act with empathy and kindness</p>
                </div>
                <div className="col-md-3 text-center">
                    <h4>🤝 Integrity</h4>
                    <p>We are transparent and accountable</p>
                </div>
                <div className="col-md-3 text-center">
                    <h4>🌟 Excellence</h4>
                    <p>We strive for the highest quality</p>
                </div>
                <div className="col-md-3 text-center">
                    <h4>🌍 Community</h4>
                    <p>We work together for lasting change</p>
                </div>
            </div>
        </div>
    );
}

export default About;