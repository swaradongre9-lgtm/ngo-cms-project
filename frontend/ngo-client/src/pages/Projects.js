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

    if (loading) {
        return <div className="text-center mt-5">Loading projects...</div>;
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Our Projects</h1>
            
            {/* Filter Buttons */}
            <div className="text-center mb-4">
                {['All', 'Ongoing', 'Completed', 'Upcoming'].map(status => (
                    <button
                        key={status}
                        className={`btn m-1 ${filter === status ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="row">
                {filteredProjects.map(project => (
                    <div className="col-md-4 mb-4" key={project.id}>
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-text">{project.description}</p>
                                <p><strong>Status:</strong> 
                                    <span className={`badge ms-2 ${
                                        project.status === 'Ongoing' ? 'bg-warning' :
                                        project.status === 'Completed' ? 'bg-success' : 'bg-info'
                                    }`}>
                                        {project.status}
                                    </span>
                                </p>
                                <p><strong>Location:</strong> {project.location || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;