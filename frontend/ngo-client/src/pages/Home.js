import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Making a Difference Together</h1>
                    <p className="lead mt-3">
                        We are committed to creating lasting impact in the lives of underprivileged children and communities
                    </p>
                    <button className="btn btn-light btn-lg mt-3">Donate Now</button>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <h3 className="card-title text-primary">Our Mission</h3>
                                    <p className="card-text">
                                        To create a lasting impact in the lives of underprivileged children and communities 
                                        by providing education, woman empowerment, and livelihood opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <h3 className="card-title text-primary">Our Vision</h3>
                                    <p className="card-text">
                                        A world where every child has access to quality education, healthcare, 
                                        and the opportunity to achieve their full potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Statistics Section */}
            <section className="stats-section bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Impact</h2>
                    <div className="row text-center">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="stat-card">
                                <h2 className="display-4 fw-bold text-primary">10,000+</h2>
                                <p className="mb-0">Children Educated</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="stat-card">
                                <h2 className="display-4 fw-bold text-primary">500+</h2>
                                <p className="mb-0">Women Empowered</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="stat-card">
                                <h2 className="display-4 fw-bold text-primary">50+</h2>
                                <p className="mb-0">Communities Served</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="stat-card">
                                <h2 className="display-4 fw-bold text-primary">1000+</h2>
                                <p className="mb-0">Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Programs Section */}
            <section className="programs-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Featured Programs</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">Education Program</h4>
                                    <p className="card-text">
                                        Providing quality education to underprivileged children through schools, 
                                        learning centers, and scholarship programs.
                                    </p>
                                    <button className="btn btn-outline-primary btn-sm">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">Healthcare Initiative</h4>
                                    <p className="card-text">
                                        Health camps, mobile health units, and community-based health interventions 
                                        for marginalized communities.
                                    </p>
                                    <button className="btn btn-outline-primary btn-sm">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">Livelihood Program</h4>
                                    <p className="card-text">
                                        Vocational training and livelihood generation programs for 
                                        marginalized communities.
                                    </p>
                                    <button className="btn btn-outline-primary btn-sm">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Campaign Section */}
            <section className="campaign-section bg-warning text-dark py-5">
                <div className="container text-center">
                    <h2>Support Our Current Campaign</h2>
                    <p className="lead mt-3">
                        Help us provide education to 1000 children this year
                    </p>
                    <button className="btn btn-dark btn-lg mt-3">Support Now</button>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="stories-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Success Stories</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <p className="card-text fst-italic">
                                        "Thanks to the education program, I am now the first graduate in my family. 
                                        This NGO changed my life forever."
                                    </p>
                                    <h5 className="mt-3">- Priya, Student</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <p className="card-text fst-italic">
                                        "The vocational training helped me start my own small business. 
                                        I can now support my family."
                                    </p>
                                    <h5 className="mt-3">- Ramesh, Entrepreneur</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;