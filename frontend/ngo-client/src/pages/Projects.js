import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projects/projects/')
            .then(response => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.status === filter);

    const getStatusColor = (status) => {
        if (status === 'Ongoing') return 'bg-warning text-dark';
        if (status === 'Completed') return 'bg-success text-white';
        return 'bg-info text-white';
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading projects...</p>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4 fw-bold">Our Projects</h1>
            <p className="text-center text-muted mb-4">Making a difference through our initiatives</p>
            
            {/* Filter Buttons */}
            <div className="text-center mb-4">
                {['All', 'Ongoing', 'Completed', 'Upcoming'].map(status => (
                    <button
                        key={status}
                        className={`btn m-1 px-4 ${
                            filter === status ? 'btn-primary' : 'btn-outline-primary'
                        }`}
                        onClick={() => setFilter(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="row">
                {filteredProjects.length === 0 ? (
                    <div className="col-12 text-center">
                        <p>No projects found with status: {filter}</p>
                    </div>
                ) : (
                    filteredProjects.map(project => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h4 className="card-title text-primary">{project.title}</h4>
                                        <span className={`badge ${getStatusColor(project.status)} px-3 py-2`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="card-text">{project.description}</p>
                                    <hr />
                                    <div className="small text-muted">
                                        <p className="mb-1"><strong>Location:</strong> {project.location || 'N/A'}</p>
                                        {project.start_date && (
                                            <p className="mb-1"><strong>Start:</strong> {project.start_date}</p>
                                        )}
                                        {project.end_date && (
                                            <p className="mb-1"><strong>End:</strong> {project.end_date}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;