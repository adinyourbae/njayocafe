// pages/index.js
import React from 'react';
import VideoBackground from '../components/Video'
import Layout from '../components/Layout';
const About = () => {
    return (
        <Layout >
            <div>
                <VideoBackground />
                {/* Add other content on top of the video background */}
            </div>
        </Layout>
    );
};

export default About;
