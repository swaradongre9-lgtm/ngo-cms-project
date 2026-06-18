import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Media() {
    const [pressReleases, setPressReleases] = useState([]);
    const [mediaCoverage, setMediaCoverage] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [pr, mc, img, vid] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/media/press-releases/'),
                    axios.get('http://127.0.0.1:8000/api/media/media-coverage/'),
                    axios.get('http://127.0.0.1:8000/api/media/image-gallery/'),
                    axios.get('http://127.0.0.1:8000/api/media/videos/')
                ]);
                setPressReleases(pr.data);
                setMediaCoverage(mc.data);
                setImages(img.data);
                setVideos(vid.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
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
                <p className="mt-2">Loading media...</p>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4 fw-bold">Media Center</h1>
            <p className="text-center text-muted mb-5">Stay updated with our latest news and stories</p>

            {/* Press Releases Section */}
            <section className="mb-5">
                <h2 className="mb-4">Press Releases</h2>
                <div className="row">
                    {pressReleases.map(item => (
                        <div className="col-md-6 mb-3" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <p className="text-muted small">{item.release_date}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Media Coverage Section */}
            <section className="mb-5 bg-light p-4 rounded">
                <h2 className="mb-4">Media Coverage</h2>
                <ul className="list-group">
                    {mediaCoverage.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Image Gallery Section */}
            <section className="mb-5">
                <h2 className="mb-4">Image Gallery</h2>
                <div className="row">
                    {images.map(item => (
                        <div className="col-md-4 mb-3" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <img src={item.image_path} className="card-img-top" alt={item.description} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <p className="small">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Videos Section */}
            <section>
                <h2 className="mb-4">Videos</h2>
                <div className="row">
                    {videos.map(item => (
                        <div className="col-md-6 mb-3" key={item.id}>
                            <div className="card shadow-sm">
                                <div className="ratio ratio-16x9">
                                    <iframe src={item.video_url} title={item.description} allowFullScreen></iframe>
                                </div>
                                <div className="card-body text-center">
                                    <p className="small">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Media;